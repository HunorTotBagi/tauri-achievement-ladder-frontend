# Tauri Achievement Ladder (Frontend)

An Angular single-page UI that renders a World of Warcraft–style leaderboard. Players can be ranked by achievement points or honorable kills, with faction-aware row styling and simple race/class iconography.

The backend application for this project is developed separately and can be found here: [Tauri Achievement Ladder - Backend](https://github.com/HunorTotBagi/tauri-achievement-ladder-backend)

![ezgif-479fbd953fdaf5b3](https://github.com/user-attachments/assets/4215a132-ca75-4fbe-b831-0c14444ce303)

## Background & Motivation

The website [Tauri Ladder](https://ladder.tauriwow.com/) previously provided player rankings for the [Tauri World of Warcraft](https://tauriwow.com/) private server, displaying statistics such as achievement points and honorable kills. It allowed players to track their progression and compare their standing across the realm.

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
