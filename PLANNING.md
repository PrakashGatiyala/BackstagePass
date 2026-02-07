# BackstagePass – 9-Day Fitness Challenge UI

## Overview

A pixel-perfect implementation of the BackstagePass "9-Day Fitness Challenge" page, built as a job application assignment. The UI faithfully reproduces the provided Figma design with component-based architecture, CSS variable theming, and exported design assets.

## Tech Stack

- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS v4 (via `@tailwindcss/vite` plugin)
- **Fonts**: Inter (body, 400–700), Sarabun (logo, Bold 700) — Google Fonts
- **Icons**: Exported PNGs/SVGs from Figma (in `public/light/`)
- **Theming**: CSS custom properties with light/dark support via Context API + localStorage

## Architecture & Component Structure

```
src/
├── components/
│   ├── Header.tsx          # Top navigation bar
│   ├── SubHeader.tsx       # Secondary nav (back, day counter, challenge title)
│   ├── PageLayout.tsx      # Main layout (Sidebar + PostSection)
│   ├── Sidebar.tsx         # Day 1–9 navigation sidebar
│   └── PostSection.tsx     # Main content: submission post + reactions
├── hooks/
│   └── useTheme.tsx        # ThemeProvider, useTheme hook, localStorage persistence
├── index.css               # CSS variables for light/dark themes
├── App.tsx                 # Root component composing all sections
└── main.tsx                # Entry point
```

```
public/light/
├── Header/                 # logo.png, streak.png, notification.png, Avatar.png
└── Page/
    ├── Info.png, LockSimple.svg, Submission_BG.png, Post_Avatar.png
    ├── Post_Video_thumbnail.svg
    └── Reaction/           # highfive_emojii.png, eyeswithLove_emojii.png,
                            # face_dummy_icon.png, comment_icon.png
```

## Completed Components

### 1. Header (`Header.tsx`)

- Logo: Sarabun Bold 24px — "Backstage" in theme color, "Pass" in `#8D6500`
- Streak pill: streak icon + "30" count with pill background
- Notification icon + user avatar (all from `public/light/Header/`)
- Height: 60px, padding: 14px 24px

### 2. SubHeader (`SubHeader.tsx`)

- Back button with chevron SVG + "Back" text
- Vertical divider + "Day 1 of 9" (16px semibold)
- "9-Day Fitness Challenge" title (14px semibold) + Info icon
- Height: 56px, `#FFFFFFCC` background, `#F2EFF3` borders

### 3. PageLayout (`PageLayout.tsx`)

- Flex layout: Sidebar (left) + centered PostSection
- Max width: 1440px, min height: `calc(100vh - 116px)`

### 4. Sidebar (`Sidebar.tsx`)

- 258px wide, gradient background overlay
- 10 items: empty header block + Day 1–9
- Day 1: completed state (white bg, green `#30A46C` checkmark SVG)
- Day 2–9: locked state with `LockSimple.svg`
- Day items: 48px height, 16px padding, 16px border-radius

### 5. PostSection (`PostSection.tsx`)

- **Container**: 640px wide, 24px top padding, 24px gap
- **Submission banner**: `Submission_BG.png` background, 98px height, "Your Submission" text (`#218358`, 14px semibold), text centered in visible top 49px
- **Post card** (overlaps banner by 49px):
  - **User info**: `Post_Avatar.png` (48px), "Ashraf Idrishi" (14px semibold), "1s" timestamp, three-dot SVG menu (`#211F26`)
  - **Text**: "Today's challenge workout completed—feeling stronger already" (14px regular, left-aligned)
  - **Image**: `Post_Video_thumbnail.svg` (640×307)
  - **Reactions**: Emoji pill (highfive + love emojis + "18" count), smiley icon, comment icon — all from `public/light/Page/Reaction/`
  - **Comments**: "10 Comments" text (right-aligned)

## Theme Implementation

CSS custom properties in `index.css`:

| Variable             | Light        | Dark         |
| -------------------- | ------------ | ------------ |
| `--bg-page`          | `#f0f0f0`    | `#1a1a1a`    |
| `--bg-card`          | `#ffffff`    | `#2a2a2a`    |
| `--bg-header`        | `#ffffff`    | `#1e1e1e`    |
| `--text-primary`     | `#1a1a1a`    | `#f5f5f5`    |
| `--text-secondary`   | varies       | varies       |
| `--bg-reaction-pill` | `#F5F3F6`    | dark variant |
| `--border-color`     | light border | dark border  |

Theme toggled via `useTheme()` hook, persisted in `localStorage` (`bp-theme`).

## Current Status

### ✅ Completed (Light Theme)

- [x] Project setup (Vite + React + TS + Tailwind v4)
- [x] Theme system (CSS variables + Context API + localStorage)
- [x] Header with logo, streak, notification, avatar
- [x] SubHeader with back nav, day counter, challenge title
- [x] Page layout (Sidebar + centered content)
- [x] Sidebar with day navigation, completed/locked states
- [x] Post submission banner with overlap effect
- [x] Post card: user info, text, video thumbnail, reactions

### ⏳ Not Yet Implemented

- [ ] Dark theme asset integration (dark mode CSS vars exist, but `public/dark/` assets not yet added)
- [ ] Mobile/responsive design (currently desktop-only at 1440px max)
- [ ] Community section ("See what others shared", participant count, pinned posts)
- [ ] Deployment to public URL

## How to Run

```bash
cd backstage-pass
npm install
npm run dev
```

Dev server runs at `http://localhost:5180`

## Notes

- All design measurements follow exact Figma specs (pixel-perfect)
- Assets exported directly from Figma into `public/light/` folders
- Built incrementally, feature-by-feature, matching the design system
