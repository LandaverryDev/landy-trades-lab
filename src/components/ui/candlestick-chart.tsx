"use client";

import type { Candle, ChartHotspot } from "@/types/trading";

interface CandlestickChartProps {
  candles: Candle[];
  hotspots?: ChartHotspot[];
  selectedHotspotId?: string | null;
  revealHotspots?: boolean;
  onHotspotSelect?: (hotspotId: string) => void;
  height?: number;
}

export function CandlestickChart({
  candles,
  hotspots,
  selectedHotspotId,
  revealHotspots = false,
  onHotspotSelect,
  height = 360,
}: CandlestickChartProps) {
  const width = 920;
  const paddingX = 48;
  const paddingY = 30;
  const candleSlot = (width - paddingX * 2) / candles.length;
  const candleBodyWidth = Math.max(10, candleSlot * 0.46);

  const prices = candles.flatMap((candle) => [candle.low, candle.high]);
  const minPrice = Math.min(...prices) - 0.4;
  const maxPrice = Math.max(...prices) + 0.4;
  const priceRange = maxPrice - minPrice || 1;

  const priceToY = (price: number) =>
    paddingY + ((maxPrice - price) / priceRange) * (height - paddingY * 2);

  const candleToX = (index: number) => paddingX + index * candleSlot + candleSlot / 2;

  const guidePrices = Array.from({ length: 5 }, (_, index) => minPrice + (priceRange / 4) * index);

  return (
    <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(11,16,28,0.95),rgba(6,10,18,0.98))] p-4 shadow-[0_22px_70px_rgba(0,0,0,0.42)]">
      <svg viewBox={`0 0 ${width} ${height}`} className="h-auto w-full">
        <defs>
          <linearGradient id="chartGlow" x1="0%" x2="100%" y1="0%" y2="0%">
            <stop offset="0%" stopColor="rgba(24,255,164,0.06)" />
            <stop offset="100%" stopColor="rgba(74,206,255,0.2)" />
          </linearGradient>
        </defs>

        <rect x="0" y="0" width={width} height={height} rx="24" fill="rgba(255,255,255,0.01)" />

        {guidePrices.map((price) => {
          const y = priceToY(price);

          return (
            <g key={price}>
              <line
                x1={paddingX}
                x2={width - paddingX}
                y1={y}
                y2={y}
                stroke="rgba(148,163,184,0.12)"
                strokeDasharray="5 9"
              />
              <text x={8} y={y + 4} fill="rgba(148,163,184,0.85)" fontSize="14">
                {price.toFixed(1)}
              </text>
            </g>
          );
        })}

        {hotspots?.map((hotspot) => {
          const x = candleToX(hotspot.candleStart) - candleSlot / 2;
          const widthSpan = (hotspot.candleEnd - hotspot.candleStart + 1) * candleSlot;
          const y = priceToY(hotspot.priceHigh);
          const hotspotHeight = priceToY(hotspot.priceLow) - y;
          const selected = hotspot.id === selectedHotspotId;

          const stroke = selected
            ? hotspot.correct
              ? "rgba(22,255,160,0.95)"
              : "rgba(248,113,113,0.95)"
            : "rgba(96,165,250,0.3)";

          const fill = revealHotspots
            ? hotspot.correct
              ? "rgba(22,255,160,0.12)"
              : selected
                ? "rgba(248,113,113,0.14)"
                : "rgba(96,165,250,0.05)"
            : "rgba(96,165,250,0.03)";

          return (
            <g key={hotspot.id}>
              <rect
                x={x}
                y={y}
                width={widthSpan}
                height={hotspotHeight}
                rx="18"
                fill={fill}
                stroke={stroke}
                strokeWidth={selected ? 2.5 : 1}
                className={onHotspotSelect ? "cursor-pointer transition-all" : undefined}
                onClick={() => onHotspotSelect?.(hotspot.id)}
              />
              <text
                x={x + 14}
                y={y + 22}
                fill="rgba(226,232,240,0.9)"
                fontSize="14"
                fontWeight="600"
              >
                {hotspot.label}
              </text>
            </g>
          );
        })}

        <path
          d={`M ${paddingX} ${height - paddingY} L ${width - paddingX} ${height - paddingY}`}
          stroke="rgba(148,163,184,0.18)"
          strokeWidth="1.5"
        />

        {candles.map((candle, index) => {
          const x = candleToX(index);
          const bodyTop = priceToY(Math.max(candle.open, candle.close));
          const bodyBottom = priceToY(Math.min(candle.open, candle.close));
          const wickTop = priceToY(candle.high);
          const wickBottom = priceToY(candle.low);
          const bullish = candle.close >= candle.open;
          const fill = bullish ? "#20f2a6" : "#fb7185";
          const bodyHeight = Math.max(8, bodyBottom - bodyTop);

          return (
            <g key={`${index}-${candle.close}`}>
              <line x1={x} x2={x} y1={wickTop} y2={wickBottom} stroke={fill} strokeWidth="2.2" />
              <rect
                x={x - candleBodyWidth / 2}
                y={bodyTop}
                width={candleBodyWidth}
                height={bodyHeight}
                rx="6"
                fill={fill}
              />
            </g>
          );
        })}

        <rect
          x={paddingX}
          y={paddingY}
          width={width - paddingX * 2}
          height={height - paddingY * 2}
          rx="20"
          fill="url(#chartGlow)"
          pointerEvents="none"
        />
      </svg>
    </div>
  );
}
