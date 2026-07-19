# Digital Portfolio

A modern, responsive personal portfolio website for **Jenifer Saral J**, built with React and Vite. It showcases education, technical skills, featured projects, and contact details in a clean single-page layout.

## Purpose

This project serves as a digital resume and portfolio for an aspiring software developer. It helps recruiters and collaborators quickly learn about:

- Professional background and education
- Technical skills (Java, Spring Boot, SQL, and related tools)
- Featured academic and development projects
- Contact information and resume download

The site is lightweight, fast to load, and easy to customize by updating content in `src/data/portfolioData.js`.

## Prerequisites

Install the following before running the project:

| Requirement | Minimum Version |
|-------------|-----------------|
| [Node.js](https://nodejs.org/) | 18.x or later |
| npm | 9.x or later (included with Node.js) |

Verify your installation:

```bash
node --version
npm --version
```

## Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd Digital-portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Add your resume PDF to the `public` folder as `Jenifer Resume.pdf`. The **Resume Preview** section embeds this file, and the download buttons use the same path.

## How to Run

### Development server

Start the local dev server with hot reload:

```bash
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

### Production build

Create an optimized build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # UI sections (Navbar, Hero, About, etc.)
├── data/
│   └── portfolioData.js # Portfolio content (skills, projects, contact)
├── App.jsx              # Main layout composing all sections
├── main.jsx             # React entry point
└── index.css            # Global styles
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |

## Tech Stack

- **React 18** — UI components
- **Vite 5** — Build tool and dev server
- **CSS** — Custom styling (no external UI framework)

## Customization

Edit `src/data/portfolioData.js` to update name, skills, projects, education, and contact details without changing component code.
