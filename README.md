# Tauri Achievement Ladder (Frontend)

An Angular single-page UI that renders a World of Warcraft–style leaderboard. Players can be ranked by achievement points or honorable kills, with faction-aware row styling and simple race/class iconography (work in progress).

![Ladder preview](https://github.com/user-attachments/assets/c9b1520a-ec10-4fb6-876c-94c83a8a82ba)

## Background & Motivation

The website [ladder.tauriwow.com](https://ladder.tauriwow.com/) previously provided player rankings for the [Tauri World of Warcraft](https://tauriwow.com/) private server, displaying statistics such as achievement points and honorable kills. It allowed players to track their progression and compare their standing across the realm.

After the release of the Legion expansion on 2025.Oct.01, the website stopped updating, leaving rankings outdated despite the introduction of many new achievements. As a result, players no longer had a reliable way to check their current position.

This project aims to recreate and modernize the original ladder system, restoring accurate and up-to-date rankings for the Tauri WoW community.

## Features
- Toggle between sorting by achievement points or honorable kills
- Faction-tinted rows and icon placeholders for race/class
- Responsive, single-component layout with CoreUI styling
- Standalone Angular setup (no NgModule), ready for Tauri or web hosting

## Tech Stack
- Angular 21 (standalone components)
- CoreUI 5 for styling primitives
- RxJS + HttpClient for data fetching
- SCSS for theming

## Expected API
The frontend expects a backend reachable at `http://localhost:5000` exposing:

- `GET /api/ladder/sorted/achievements` → array of `LadderAchievement`
- `GET /api/ladder/sorted/honorableKills` → array of `LadderAchievement`

`LadderAchievement` shape (see `src/app/ladder.service.ts`):

```ts
interface LadderAchievement {
	name: string;
	race: number;
	gender: number;
	class: number;
	realm: string;
	guild: string;
	achievementPoints: number;
	honorableKills: number;
	faction: 'Horde' | 'Alliance';
}
```

## Getting Started

### Prerequisites
- Node.js 20+ (tested with the engines listed in `package.json`)
- npm 10+
- (Optional) Angular CLI globally: `npm install -g @angular/cli`

### Install
```bash
npm install
```

### Run (dev server)
```bash
npm start
```
This runs `ng serve -o` on the default Angular port. Ensure your backend is running on the expected host/port.

### Build (production)
```bash
npm run build
```
Outputs an optimized build to `dist/`.

## Project Structure
- `src/app/ladder.component.ts` — standalone component rendering the ladder table and handling sort toggles.
- `src/app/ladder.component.html` — table markup and bindings.
- `src/app/ladder.component.scss` — WoW-inspired styles and faction color cues.
- `src/app/ladder.service.ts` — HTTP calls to the ladder endpoints.
- `src/app/models/achievement.model.ts` — typed player model used by the component.
