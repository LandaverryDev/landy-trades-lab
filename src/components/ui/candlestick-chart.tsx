"use client";

import { useState } from "react";

import type { Candle, ChartHotspot } from "@/types/trading";

interface PriceZoneSelection {
  low: number;
  high: number;
}

interface CandlestickChartProps {
  candles: Candle[];
  hotspots?: ChartHotspot[];
  selectedHotspotId?: string | null;
  revealHotspots?: boolean;
  onHotspotSelect?: (hotspotId: string) => void;
  selectedPrice?: number | null;
  correctPrice?: number | null;
  priceTolerance?: number;
  revealPriceAnswer?: boolean;
  onPriceSelect?: (price: number) => void;
  priceSelectionLabel?: string;
  selectedZone?: PriceZoneSelection | null;
  correctZone?: PriceZoneSelection | null;
  zoneDraftPrice?: number | null;
  zoneTolerance?: number;
  revealZoneAnswer?: boolean;
  onZoneDraftSelect?: (price: number) => void;
  onZoneSelect?: (zone: PriceZoneSelection) => void;
  zoneSelectionLabel?: string;
  height?: number;
}

export function CandlestickChart({
  candles,
  hotspots,
  selectedHotspotId,
  revealHotspots = false,
  onHotspotSelect,
  selectedPrice,
  correctPrice,
  priceTolerance = 0.25,
  revealPriceAnswer = false,
  onPriceSelect,
  priceSelectionLabel = "Selected level",
  selectedZone,
  correctZone,
  zoneDraftPrice,
  zoneTolerance = 0.2,
  revealZoneAnswer = false,
  onZoneDraftSelect,
  onZoneSelect,
  zoneSelectionLabel = "Selected zone",
  height = 360,
}: CandlestickChartProps) {
  const [hoverPrice, setHoverPrice] = useState<number | null>(null);
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
  const yToPrice = (y: number) =>
    maxPrice - ((y - paddingY) / (height - paddingY * 2)) * priceRange;

  const candleToX = (index: number) => paddingX + index * candleSlot + candleSlot / 2;
  const plotWidth = width - paddingX * 2;
  const plotHeight = height - paddingY * 2;

  const guidePrices = Array.from({ length: 5 }, (_, index) => minPrice + (priceRange / 4) * index);
  const zoneSelectionActive = Boolean(onZoneDraftSelect || onZoneSelect);
  const selectedPriceCorrect =
    selectedPrice !== null &&
    selectedPrice !== undefined &&
    correctPrice !== null &&
    correctPrice !== undefined &&
    Math.abs(selectedPrice - correctPrice) <= priceTolerance;

  const toleranceBand =
    revealPriceAnswer && correctPrice !== null && correctPrice !== undefined
      ? {
          y: Math.min(priceToY(correctPrice + priceTolerance), priceToY(correctPrice - priceTolerance)),
          height: Math.abs(priceToY(correctPrice - priceTolerance) - priceToY(correctPrice + priceTolerance)),
        }
      : null;
  const normalizedSelectedZone = selectedZone
    ? {
        low: Math.min(selectedZone.low, selectedZone.high),
        high: Math.max(selectedZone.low, selectedZone.high),
      }
    : null;
  const normalizedCorrectZone = correctZone
    ? {
        low: Math.min(correctZone.low, correctZone.high),
        high: Math.max(correctZone.low, correctZone.high),
      }
    : null;
  const draftZone =
    zoneDraftPrice !== null && zoneDraftPrice !== undefined && hoverPrice !== null
      ? {
          low: Math.min(zoneDraftPrice, hoverPrice),
          high: Math.max(zoneDraftPrice, hoverPrice),
        }
      : null;
  const selectedZoneCorrect =
    normalizedSelectedZone &&
    normalizedCorrectZone &&
    Math.abs(normalizedSelectedZone.low - normalizedCorrectZone.low) <= zoneTolerance &&
    Math.abs(normalizedSelectedZone.high - normalizedCorrectZone.high) <= zoneTolerance;

  function clamp(value: number, min: number, max: number) {
    return Math.min(Math.max(value, min), max);
  }

  function resolveSvgPoint(event: React.PointerEvent<SVGRectElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * width;
    const y = ((event.clientY - rect.top) / rect.height) * height;

    return {
      x: clamp(x, paddingX, width - paddingX),
      y: clamp(y, paddingY, height - paddingY),
    };
  }

  function handlePricePointerMove(event: React.PointerEvent<SVGRectElement>) {
    if (!onPriceSelect && !zoneSelectionActive) {
      return;
    }

    const point = resolveSvgPoint(event);
    setHoverPrice(Number(yToPrice(point.y).toFixed(2)));
  }

  function handlePricePointerLeave() {
    setHoverPrice(null);
  }

  function handlePriceSelect(event: React.PointerEvent<SVGRectElement>) {
    const point = resolveSvgPoint(event);
    const price = Number(yToPrice(point.y).toFixed(2));

    if (onPriceSelect) {
      onPriceSelect(price);
      return;
    }

    if (onZoneSelect && zoneDraftPrice !== null && zoneDraftPrice !== undefined) {
      onZoneSelect({
        low: Math.min(zoneDraftPrice, price),
        high: Math.max(zoneDraftPrice, price),
      });
      return;
    }

    onZoneDraftSelect?.(price);
  }

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

        {toleranceBand ? (
          <rect
            x={paddingX}
            y={toleranceBand.y}
            width={plotWidth}
            height={Math.max(toleranceBand.height, 8)}
            fill="rgba(34,197,94,0.12)"
            stroke="rgba(34,197,94,0.35)"
            strokeDasharray="8 8"
            rx="16"
          />
        ) : null}

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

        {onPriceSelect || zoneSelectionActive ? (
          <rect
            x={paddingX}
            y={paddingY}
            width={plotWidth}
            height={plotHeight}
            rx="20"
            fill="transparent"
            className="cursor-crosshair"
            onPointerMove={handlePricePointerMove}
            onPointerLeave={handlePricePointerLeave}
            onClick={handlePriceSelect}
          />
        ) : null}

        {revealZoneAnswer && normalizedCorrectZone ? (
          <rect
            x={paddingX}
            y={priceToY(normalizedCorrectZone.high)}
            width={plotWidth}
            height={Math.max(priceToY(normalizedCorrectZone.low) - priceToY(normalizedCorrectZone.high), 8)}
            fill="rgba(34,197,94,0.12)"
            stroke="rgba(34,197,94,0.4)"
            strokeDasharray="10 8"
            rx="18"
          />
        ) : null}

        {draftZone ? (
          <rect
            x={paddingX}
            y={priceToY(draftZone.high)}
            width={plotWidth}
            height={Math.max(priceToY(draftZone.low) - priceToY(draftZone.high), 8)}
            fill="rgba(56,189,248,0.08)"
            stroke="rgba(56,189,248,0.45)"
            strokeDasharray="8 8"
            rx="18"
          />
        ) : null}

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

        {hoverPrice !== null && (onPriceSelect || zoneSelectionActive) ? (
          <g pointerEvents="none">
            <line
              x1={paddingX}
              x2={width - paddingX}
              y1={priceToY(hoverPrice)}
              y2={priceToY(hoverPrice)}
              stroke="rgba(56,189,248,0.32)"
              strokeWidth="1.5"
              strokeDasharray="8 8"
            />
            <text
              x={width - paddingX - 6}
              y={priceToY(hoverPrice) - 8}
              textAnchor="end"
              fill="rgba(125,211,252,0.9)"
              fontSize="14"
            >
              Hover {hoverPrice.toFixed(2)}
            </text>
          </g>
        ) : null}

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

        {correctPrice !== null && correctPrice !== undefined && revealPriceAnswer ? (
          <g pointerEvents="none">
            <line
              x1={paddingX}
              x2={width - paddingX}
              y1={priceToY(correctPrice)}
              y2={priceToY(correctPrice)}
              stroke="rgba(34,197,94,0.9)"
              strokeWidth="2"
              strokeDasharray="10 8"
            />
            <text
              x={paddingX + 8}
              y={priceToY(correctPrice) - 8}
              fill="rgba(187,247,208,0.95)"
              fontSize="14"
              fontWeight="600"
            >
              Answer {correctPrice.toFixed(2)}
            </text>
          </g>
        ) : null}

        {selectedPrice !== null && selectedPrice !== undefined ? (
          <g pointerEvents="none">
            <line
              x1={paddingX}
              x2={width - paddingX}
              y1={priceToY(selectedPrice)}
              y2={priceToY(selectedPrice)}
              stroke={
                revealPriceAnswer
                  ? selectedPriceCorrect
                    ? "rgba(34,197,94,0.98)"
                    : "rgba(251,113,133,0.98)"
                  : "rgba(56,189,248,0.95)"
              }
              strokeWidth="2.5"
            />
            <text
              x={paddingX + 8}
              y={priceToY(selectedPrice) + 18}
              fill={
                revealPriceAnswer
                  ? selectedPriceCorrect
                    ? "rgba(187,247,208,0.95)"
                    : "rgba(254,205,211,0.95)"
                  : "rgba(186,230,253,0.95)"
              }
              fontSize="14"
              fontWeight="600"
            >
              {priceSelectionLabel} {selectedPrice.toFixed(2)}
            </text>
          </g>
        ) : null}

        {normalizedSelectedZone ? (
          <g pointerEvents="none">
            <rect
              x={paddingX}
              y={priceToY(normalizedSelectedZone.high)}
              width={plotWidth}
              height={Math.max(priceToY(normalizedSelectedZone.low) - priceToY(normalizedSelectedZone.high), 8)}
              fill={
                revealZoneAnswer
                  ? selectedZoneCorrect
                    ? "rgba(34,197,94,0.12)"
                    : "rgba(251,113,133,0.12)"
                  : "rgba(56,189,248,0.1)"
              }
              stroke={
                revealZoneAnswer
                  ? selectedZoneCorrect
                    ? "rgba(34,197,94,0.95)"
                    : "rgba(251,113,133,0.95)"
                  : "rgba(56,189,248,0.95)"
              }
              strokeWidth="2"
              rx="18"
            />
            <text
              x={paddingX + 8}
              y={priceToY(normalizedSelectedZone.high) - 8}
              fill={
                revealZoneAnswer
                  ? selectedZoneCorrect
                    ? "rgba(187,247,208,0.95)"
                    : "rgba(254,205,211,0.95)"
                  : "rgba(186,230,253,0.95)"
              }
              fontSize="14"
              fontWeight="600"
            >
              {zoneSelectionLabel} {normalizedSelectedZone.low.toFixed(2)} - {normalizedSelectedZone.high.toFixed(2)}
            </text>
          </g>
        ) : null}

        {revealZoneAnswer && normalizedCorrectZone ? (
          <text
            x={width - paddingX - 8}
            y={priceToY(normalizedCorrectZone.high) - 8}
            textAnchor="end"
            fill="rgba(187,247,208,0.95)"
            fontSize="14"
            fontWeight="600"
          >
            Answer zone {normalizedCorrectZone.low.toFixed(2)} - {normalizedCorrectZone.high.toFixed(2)}
          </text>
        ) : null}

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
