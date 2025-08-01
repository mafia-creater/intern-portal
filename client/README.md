# She Can Foundation Internship Portal – Client

## Overview
This is the React frontend for the She Can Foundation internship portal. It provides a modern, animated dashboard and leaderboard for interns to track their fundraising progress, referral codes, and unlockable rewards.

---

## Features
- Animated login and dashboard pages
- Real-time dashboard data (name, referral code, total donations, rewards)
- Leaderboard with top interns
- Responsive design for desktop and mobile
- Modern UI with Framer Motion and Lucide icons

---

## Tech Stack
- **React** (with Vite)
- **Framer Motion** (animations)
- **Lucide React** (icons)
- **Tailwind CSS** (styling)
- **React Router** (routing)

---

## Project Structure
```
client/
  src/
    App.jsx
    DashboardPage.tsx
    LeaderboardPage.tsx
    LoginPage.tsx
    ...
  public/
  package.json
  vite.config.js
  ...
```

---

## Setup Instructions
1. **Install dependencies**
   ```bash
   npm install
   ```
2. **Start the development server**
   ```bash
   npm run dev
   ```
   The client runs on `http://localhost:5173` by default (see Vite config).

---

## API Integration
- The client fetches dashboard and leaderboard data from the backend server (`http://localhost:3001`).
- Update API URLs in the source code if your backend runs on a different port or host.

---

## Customization & Development
- Main pages are in `src/`
- Styling uses Tailwind CSS classes
- Animations use Framer Motion
- Icons from Lucide React

---

## License
MIT

---

## Credits
- She Can Foundation
- Internship project template by your team
