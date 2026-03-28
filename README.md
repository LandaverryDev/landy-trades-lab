# Landy Trades Lab

A personal trading education web app built as a premium, interactive learning product instead of a plain tutorial site or admin dashboard.

## MVP focus

- Structured learning path from beginner to advanced
- Short, visual-first lessons
- Interactive quizzes with immediate feedback
- Chart-based challenges with clickable answer zones
- Scenario simulator / replay mode
- Strategy builder for turning lessons into system rules
- Progress, XP, streaks, and achievements
- Curriculum shaped to support future trading bot and automation thinking

## Tech stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Local mock data for modules, lessons, quizzes, chart challenges, and scenarios

## Current routes

- `/` dashboard / landing experience
- `/learn` learning path overview
- `/module/[moduleSlug]` guided module overview and sequence
- `/lesson/[lessonSlug]` lesson view
- `/quiz/[quizSlug]` interactive quiz
- `/chart-challenge/[challengeSlug]` chart drill
- `/simulator/[scenarioSlug]` replay / scenario training
- `/progress` progress and unlock tracking
- `/strategy-builder` assemble a strategy blueprint from rule blocks

## Folder structure

```text
src/
  app/                 App Router entry points only
  components/
    layout/            Shared shell and navigation
    ui/                Reusable low-level UI pieces
  data/                Typed lesson, quiz, chart, and module seed data
  features/            Screen-level learning experiences
    dashboard/
    learning-path/
    lesson/
    module-overview/
    strategy-builder/
    chart-challenge/
    progress/
    quiz/
    simulator/
  lib/                 Data selectors and local progress helpers
  styles/              Global styles and theme surface
  types/               Trading-learning domain models
```

## Key decisions

- Mock curriculum data lives in typed local files first so the app can scale into a real backend later without rewriting page structure.
- Lessons use reusable data-driven content blocks so text, callouts, and visuals can expand without rewriting the renderer.
- Chart and simulator interactions are separate feature surfaces so drills and replay mechanics can expand independently.
- Quiz, chart, and simulator best scores are tracked locally in the browser for lightweight persistence.
- Review work is scheduled locally with spaced-review rules so weak concepts resurface instead of disappearing after one pass.
- The strategy builder turns learning content into rule blocks so the app can progress toward bot and automation workflows instead of stopping at theory.
- Curriculum content includes bot-builder hooks so concepts can later map to signals, filters, triggers, and risk controls.
- The default build script uses webpack because it verified cleanly in this environment during setup.

## Local development

```bash
npm install
npm run dev
```

Production verification:

```bash
npm run lint
npm run test
npm run build
```

## Deployment

The cleanest deployment target for this app is Vercel because it matches the Next.js runtime directly.

Recommended deploy flow:

```bash
npm install
npm run lint
npm run test
npm run build
```

Then:

1. Import the repo into Vercel.
2. Keep the default Next.js framework detection.
3. Use the default build command: `npm run build`.
4. Use the default output setting for Next.js.

## CI

GitHub Actions verification is configured in [.github/workflows/ci.yml](/Users/erick/Documents/web-dev/landy-trades-lab/.github/workflows/ci.yml). Every push and pull request now runs:

- `npm ci`
- `npm run lint`
- `npm run test`
- `npm run build`
