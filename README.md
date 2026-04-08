# 🚀 Young Techies Festival

![Young Techies Banner](https://img.shields.io/badge/YoungTechies-2026-blue?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-7.3+-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-3.14-green?style=for-the-badge&logo=greensock)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css)

The official web platform for the **Young Techies Festival**. Inspiring, educating, and empowering the next generation of innovators, creators, and tech leaders.

---

## ✨ Features

- **🎯 Interactive Experience**: Powered by **GSAP** for smooth, scroll-triggered animations and high-performance UI transitions.
- **🕒 Live Countdown**: Real-time event timer keeps the excitement building as the festival nears.
- **🖼️ Visual Showcase**: A dynamic gallery section highlighting past events and what to expect.
- **🌓 Dynamic Themes**: Full support for Dark and Light modes with a custom theme toggle.
- **📝 Seamless Registration**: Integrated registration flow for participants, volunteers, and hackers.
- **💡 Tech Hub**: Comprehensive sections for Tech Talks, Hackathons, and Workshop details.
- **🤝 Partnership Portal**: Dedicated sponsorship page for brands looking to support the mission.
- **📱 Fluid Responsiveness**: Optimized for every screen size, from mobile devices to desktop monitors.

## 🛠️ Tech Stack

- **Core**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (Next-generation CSS engine)
- **Animations**: [GSAP](https://greensock.com/gsap/) (GreenSock Animation Platform)
- **Routing**: [React Router DOM](https://reactrouter.com/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Backend/DB**: [Supabase](https://supabase.com/) (for registration & data management)

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/danielnero-bot/laughing-octo-system.git
   cd young-techies
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up Environment Variables:**
   Create a `.env` file in the root directory and add your Supabase credentials (if applicable):
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Launch Development Server:**
   ```bash
   npm run dev
   ```

## 📂 Project Structure

```text
src/
├── assets/         # Images, fonts, and static resources
├── components/     # Reusable UI components (Hero, Navbar, Gallery, etc.)
├── pages/          # Full-page components (Register, Sponsorship, etc.)
├── lib/            # Configuration and utility libraries (Supabase, etc.)
├── App.jsx         # Main application routing and structure
└── index.css       # Global design system and Tailwind directives
```

---

## 📅 See You at the Festival!

The Young Techies Festival is more than just an event; it's a movement. Follow our journey as we build the future of tech.

Developed with ❤️ for the tech community.
