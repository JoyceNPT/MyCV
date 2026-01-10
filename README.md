# Portfolio - Ngo Phuoc Thinh

A modern, responsive portfolio website designed to showcase my skills, projects, and professional journey as a .NET Developer. Built with performance, accessibility, and aesthetics in mind.

## 🚀 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (v4), [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Theming**: [next-themes](https://github.com/pacocoursey/next-themes) (Dark/Light mode)
- **Animation**: CSS-based transitions and interactions

## ✨ Features

- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices.
- **Dynamic Profile**: comprehensive profile section aimed at recruiting, featuring:
  - **Timeline Experience**: Vertical timeline visualization of work history.
  - **Categorized Skills**: Technical, Soft Skills, and Languages with visual badges.
  - **Sticky Sidebar**: Quick access to skills and contact info on large screens.
- **Project Showcase**: Detailed project cards with:
  - Tech stack tags (aligned for consistency).
  - Highlights and detailed descriptions.
  - Links to Repositories and Demos.
- **Certifications**: List of professional certifications with direct verification links.
- **Interactivity**:
  - Smooth page transitions (CSS-based fade-in).
  - Hover effects on tags and interactive elements.
- **Dark Mode**: Integrated system-aware dark mode support.

## 📂 Project Structure

```
├── app/
│   ├── (routes)/
│   │   ├── profile/        # Main profile page
│   │   ├── project/        # Projects showcase
│   │   └── certifications/ # Certifications list
│   ├── api/                # Internal API routes (mock data)
│   ├── globals.css         # Global styles & animations
│   ├── layout.tsx          # Root layout with ThemeProvider
│   └── template.tsx        # Page transition wrapper
├── components/
│   ├── layout/             # Header, Footer, Nav
│   ├── profile/            # Profile-specific components (ExperienceList, etc.)
│   ├── project/            # Project cards & grids
│   └── ui/                 # Reusable shadcn/ui components
├── lib/
│   └── data.ts             # Centralized mock data
└── public/                 # Static assets
```

## 🛠️ Getting Started

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/JoyceNPT/Portfolio.git
    cd Portfolio
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Run the development server**:
    ```bash
    npm run dev
    ```

4.  **Open in browser**:
    Navigate to [http://localhost:3000](http://localhost:3000).

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---
© 2026 Ngo Phuoc Thinh. All rights reserved.
