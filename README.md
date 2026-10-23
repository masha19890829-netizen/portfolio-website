# Masha Zhou Portfolio Website

AI Game / Product Lab - Personal research & portfolio website for Masha Zhou (周文迪).

## About

This is a modern, responsive personal portfolio website built with React 19 + TypeScript + Vite + Tailwind CSS 3.4 + shadcn/ui. It features a deep-space neon "Rhythmic Youth" game-style UI design with rich animations and effects.

## Tech Stack

- **Framework**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS 3.4 + shadcn/ui components
- **Animation**: GSAP ScrollTrigger, CSS keyframes, Canvas 2D (Constellation particles)
- **3D Effects**: CSS perspective/preserve-3d (TiltCard, Archive Carousel)
- **Typography Effects**: GlitchText, Typewriter, RevealText

## Design System

- **Background**: Deep space blue-black (#0B0F1A)
- **Neon System**: Cyan (#00F0C8), Purple (#A855F7), Pink (#EC4899), Blue (#3B82F6), Orange (#F59E0B)
- **Fonts**: DM Serif Display, Noto Serif SC, Inter, Noto Sans SC, Roboto Mono

## Project Structure

```
src/
  components/       # Reusable components + shadcn/ui (53 components)
  sections/         # Page sections (Hero, CareerTimeline, etc.)
  pages/            # Route pages (Home, About, Projects, Research, Workflow, Contact)
  data/             # Site data (education, career, GitHub projects, contact info)
  hooks/            # Custom hooks
  lib/              # Utilities
public/
  images/           # Static images (Bilibili avatar, textures, TodayQuest designs)
  portfolio/        # Portfolio gallery images
  videos/           # Lab video
```

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Important Note on Binary Assets

The `public/` directory contains binary files (images and videos) that are **not included** in this repository via the automated push process. You will need to manually upload these files to the `public/` folder in your GitHub repository:

### Required images in `public/images/`:
- `bilibili-avatar.jpg` - Bilibili channel avatar
- `texture-1.jpg`, `texture-2.jpg`, `texture-3.jpg` - Paper scroll textures
- `todayquest-1.png`, `todayquest-2.png`, `todayquest-3.png` - TodayQuest app designs

### Required images in `public/portfolio/`:
- `6639.png`, `6640.png`, `6641.png`, `6642.png`, `6643.png` - Game AI portfolio works

### Required video in `public/videos/`:
- `lab-video.mp4` - Lab video background

To upload these files:
1. Go to your GitHub repository: https://github.com/masha19890829-netizen/portfolio-website
2. Navigate to the `public/` directory
3. Use the "Add file" > "Upload files" button for each folder
4. Or clone the repo locally and copy the files from your local project

## Deployment

This site can be deployed to any static hosting platform:
- **Netlify**: Connect your GitHub repo for auto-deployment
- **Vercel**: Import project from GitHub
- **GitHub Pages**: Enable Pages in repo settings

## Links

- **5050 Game Innovation Lab**: https://github.com/masha19890829-netizen/5050-game-innovation-lab
- **Bilibili Channel**: https://space.bilibili.com/237167264
