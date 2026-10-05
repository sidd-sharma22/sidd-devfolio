# 🌿 Siddharth Sharma — Personal Portfolio & Devfolio

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat&logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![CSS3](https://img.shields.io/badge/Design_System-Emerald_%26_Sand-0F8A63?style=flat)](src/index.css)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A clean, modern, and responsive developer portfolio and research showcase for **Siddharth Sharma** — Computer Science undergraduate at **IIIT Kottayam**, specializing in **AI/ML Research**, **TinyML / Edge AI**, and **Full-Stack Engineering**.

Designed and built from the ground up with **React 18**, **TypeScript**, **Vite**, and an **Emerald & Sand** design system implemented in pure CSS.

---

## ✨ Key Highlights

- **🔬 Research & Publications**: Highlights accepted peer-reviewed work (IEEE ICIIS 2026) in Edge-AI and TinyML for IIoT security, alongside research metrics from ABV-IIITM Gwalior.
- **🎨 Custom "Emerald & Sand" Palette**: A carefully curated color system blending warm sand surfaces (`#FAF8F2`), rich emerald accents (`#0F8A63`), crisp white cards (`#FFFFFF`), and soft emerald highlights (`#DCF5E9`).
- **⚡ Zero Bloat Architecture**: Lightweight standalone CSS tokens and utility classes with zero runtime styling overhead, resulting in lightning-fast initial load times and high Lighthouse performance.
- **📱 Fully Responsive**: Fluid typography (`clamp()`), adaptive CSS Grid layouts, and custom breakpoints tailored for mobile, tablet, and widescreen desktop displays.
- **♿ Accessible & Semantic**: Built with semantic HTML5 landmarks, structured schema.org metadata, accessible keyboard focus rings, and proper color contrast ratios.

---

## 🎨 Color System ("Emerald & Sand")

The application uses a centralized token system defined in [`src/index.css`](src/index.css):

| Token | Hex Value | Role & Usage |
| :--- | :--- | :--- |
| **Primary Emerald** | `#0F8A63` | Primary buttons, active navigation states, section accents, heading highlights, icon rings |
| **Emerald Hover** | `#0B7453` | Interactive hover and active focus states |
| **Sand Background** | `#FAF8F2` | Warm dominant background across all pages and sections |
| **White / Surface** | `#FFFFFF` | Scrolled glassmorphic navbar, cards, secondary buttons, input surfaces |
| **Light Emerald** | `#DCF5E9` | Subtle section backgrounds, icon containers, soft chips & badges |
| **Border** | `#E5EEE8` | Clean dividers, card borders, and button outlines |
| **Dark Heading** | `#18231F` | Main headings (`h1`–`h6`), brand titles, code terminal background |
| **Primary Text** | `#1F2937` | High-readability body copy, publication abstracts, descriptions |
| **Secondary Text** | `#64748B` | Metadata, dates, supporting captions, and secondary links |

---

## 📂 Project Structure

```text
sidd-devfolio/
├── public/                     # Static assets served at root
│   ├── og-image.png            # OpenGraph social card preview
│   ├── portfolio-icon.png      # Favicon
│   ├── profile-pic-1.png       # High-res profile avatar
│   ├── robots.txt              # Search crawler configurations
│   └── Sidd_Resume_AI.pdf      # Downloadable resume with AI research focus
├── src/
│   ├── components/             # Modular section components
│   │   ├── AboutSection.tsx    # Academic journey, focus areas & leadership
│   │   ├── ContactSection.tsx  # Direct communication channels & social handles
│   │   ├── ExperienceSection.tsx# Industry internship, club lead roles & certifications
│   │   ├── Footer.tsx          # Dynamic copyright & credits
│   │   ├── HeroSection.tsx     # Landing intro, availability status & CTA buttons
│   │   ├── Navbar.tsx          # Sticky responsive header with mobile drawer
│   │   ├── ProjectsSection.tsx # Featured technical projects with demo/source links
│   │   ├── ResearchSection.tsx # Accepted papers, TinyML metrics & research contributions
│   │   └── TechStackSection.tsx# Core competencies, skills & interactive terminal
│   ├── pages/
│   │   ├── Index.tsx           # Single-page assembled portfolio
│   │   └── NotFound.tsx        # 404 error page
│   ├── App.tsx                 # Client-side routing configuration
│   ├── index.css               # Centralized "Emerald & Sand" design system & animations
│   ├── main.tsx                # Application DOM entry point
│   └── vite-env.d.ts           # Vite TypeScript declarations
├── index.html                  # HTML entry with OpenGraph & Schema.org metadata
├── package.json                # Project dependencies and run scripts
├── tsconfig.json               # TypeScript compiler options
└── vite.config.ts              # Vite bundling & development server settings
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18.0.0 or higher) and [npm](https://www.npmjs.com/) installed:

```bash
node -v
npm -v
```

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/sidd-sharma22/sidd-devfolio.git
   cd sidd-devfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:8080](http://localhost:8080) (or the port output in your terminal) to view the site in your browser.

---

## 🛠️ Available Scripts

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts Vite dev server with instant Hot Module Replacement (HMR). |
| `npm run build` | Compiles TypeScript and builds production-ready static assets in `dist/`. |
| `npm run lint` | Runs ESLint 9 checks across all source code. |
| `npm run preview` | Serves the locally built `dist/` directory for previewing production output. |

---

## 🌐 Deployment

The production bundle generated by `npm run build` is composed of purely static HTML, CSS, and JS files located in `dist/`. It can be deployed to any static host:

- **Vercel**: Import the repository and set the framework preset to **Vite**.
- **Netlify**: Set build command to `npm run build` and publish directory to `dist`.
- **GitHub Pages**: Build the project and deploy the `dist/` folder via GitHub Actions.

---

## 📬 Connect with Siddharth

- **GitHub**: [@sidd-sharma22](https://github.com/sidd-sharma22)
- **LinkedIn**: [in/sidd-sharma22](https://www.linkedin.com/in/sidd-sharma22)
- **X / Twitter**: [@sidd_sharma22](https://x.com/sidd_sharma22)
- **Email**: [siddharthsharma2219@gmail.com](mailto:siddharthsharma2219@gmail.com)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
