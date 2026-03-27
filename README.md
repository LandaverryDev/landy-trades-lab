# Landy Trades Lab

A personal trading education web app built as a premium, interactive learning product instead of a plain tutorial site or admin dashboard.

## MVP focus

- Structured learning path from beginner to advanced
- Short, visual-first lessons
- Interactive quizzes with immediate feedback
- Chart-based challenges with clickable answer zones
- Scenario simulator / replay mode
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
- `/lesson/[lessonSlug]` lesson view
- `/quiz/[quizSlug]` interactive quiz
- `/chart-challenge/[challengeSlug]` chart drill
- `/simulator/[scenarioSlug]` replay / scenario training
- `/progress` progress and unlock tracking

## Folder structure

```text
src/
  app/                 Route entry points and global app shell
  components/          Reusable UI and feature components
    chart/             Chart challenge client UI
    dashboard/         Landing/dashboard composition
    learning/          Learning path view
    lesson/            Lesson renderer
    progress/          Progress page
    quiz/              Quiz player
    shell/             Shared app shell / navigation
    simulator/         Scenario replay UI
    ui/                Base visual building blocks
  data/                Seed curriculum and mock content
  lib/                 Data access helpers and selectors
  types/               Domain types for the learning platform
```

## Key decisions

- Mock curriculum data lives in typed local files first so the app can scale into a real backend later without rewriting page structure.
- Lessons are intentionally short and card-based to keep the product visual-first and fast-moving.
- Chart and simulator interactions are separate feature surfaces so drills and replay mechanics can expand independently.
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
npm run build
```
