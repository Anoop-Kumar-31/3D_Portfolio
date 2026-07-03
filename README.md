<div align="center">
  <br />
  <img src="public/globe.svg" alt="Logo" width="80" height="80">
  <h1 align="center">NextGen Portfolio ✧</h1>
  <p align="center">
    <strong>An immersive, high-performance 3D web portfolio built for the modern web.</strong>
    <br />
    A digital sanctuary showcasing the intersection of robust software engineering and premium, luxury aesthetics.
    <br />
    <br />
    <a href="#features">Features</a>
    ·
    <a href="#architecture">Architecture</a>
    ·
    <a href="#tech-stack">Tech Stack</a>
    ·
    <a href="#getting-started">Getting Started</a>
  </p>
</div>

<br />

---

## ✦ Vision

This repository contains the source code for the personal portfolio of **Anoop Kumar**, a T-shaped Full-Stack Developer and novel author. Designed to be more than just a website, it is an interactive digital experience characterized by **glassmorphic UI**, **ambient 3D environments**, and **seamless, cinematic scroll interactions**.

Every pixel is intentional. Every animation is tuned for maximum fluidity.

---

## ✦ Core Features

- **Immersive 3D Canvas:** A dynamic background powered by `three.js` and `react-three-fiber`, featuring an interactive glowing sphere and orbital particles that react to user navigation.
- **Cinematic Scroll Architecture:** Custom boundary-aware scroll-jacking logic for a smooth, single-page app feel, allowing granular scrolling inside components before transitioning entire sections.
- **Glassmorphism Design System:** High-end translucent panels (`backdrop-filter`) accented with subtle inset shadows and animated glowing borders.
- **Responsive Layouts:** Modular UI (Home, Skills, Projects, About) that elegantly degrades from ultra-wide 4K displays down to mobile viewports.
- **Type-Safe Ecosystem:** Strictly typed with `TypeScript` to guarantee runtime stability and maintainable architecture.

---

## ✦ Tech Stack

The architecture is forged upon modern, industry-standard technologies prioritizing performance, scalability, and developer experience.

| Domain | Technologies |
| :--- | :--- |
| **Core Framework** | `Next.js 14` (App Router), `React 18`, `TypeScript` |
| **3D Engine** | `Three.js`, `@react-three/fiber`, `@react-three/drei` |
| **Styling** | `CSS Modules`, Glassmorphic Utility Classes |
| **Icons & Typography** | `react-icons`, Google Fonts (Outfit, Plus Jakarta Sans) |
| **Build & Tooling** | `Vite` / `Webpack`, `ESLint`, `Prettier` |

---

## ✦ Getting Started

To run this premium experience locally, follow these steps:

### 1. Clone the Repository
```bash
git clone https://github.com/Anoop-Kumar-31/3D_Portfolio.git
cd 3D_Portfolio
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Launch Development Environment
```bash
npm run dev
# or
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to experience the environment locally.

---

## ✦ Architecture Overview

### State & Navigation
The application uses a unified section state manager passing `activeSection` down to all components (`Home`, `Skills`, `Projects`, `About`). The custom scroll handler in `page.tsx` gracefully orchestrates transitions between these sections based on user intent (mouse wheel, touch swipe, keyboard arrows).

### 3D Layering
The `ThreeCanvas.tsx` component is decoupled from the DOM layout, living on a lower `z-index`. DOM interactions (`pointer-events`) are selectively enabled/disabled to allow clicks to pass through the UI down to the 3D canvas when appropriate.

---

## ✦ Author

**Anoop Kumar**
- Role: Full-Stack Developer & Novel Author
- Specialization: Frontend Engineering, API Architecture, UI/UX Design.

> *"Bridging the gap between scalable logic and exquisite design."*

<br />

<div align="center">
  <p>Built with precision in Next.js • © 2026 Anoop Kumar</p>
</div>
