# She Can Foundation Internship Portal

## Overview
This project is a full-stack web application for the She Can Foundation internship program. It provides interns with a dashboard to track fundraising progress, referral codes, and unlockable rewards, as well as a leaderboard to view top performers.

**Main Parts:**
- **Client:** React web app (Vite) for the user interface
- **Server:** Express.js backend serving API data

---

## Features
- Animated login and dashboard pages
- Real-time dashboard data (name, referral code, total donations, rewards)
- Leaderboard with top interns
- Responsive design for desktop and mobile
- Modern UI with Framer Motion and Lucide icons

---

## Tech Stack
- **Frontend:** React, Vite, Framer Motion, Lucide React, Tailwind CSS
- **Backend:** Node.js, Express, CORS

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
server/
  index.js
  package.json
  .env
```

---

## Setup Instructions
1. **Clone the repository**
   ```bash
   # Clone your project folder
   git clone "https://github.com/mafia-creater/intern-portal.git"
   ```
2. **Install dependencies**
   ```bash
   cd server
   npm install
   cd ../client
   npm install
   ```
3. **Start the backend server**
   ```bash
   cd ../server
   node index.js
   ```
   The server runs on `http://localhost:3001` by default.
4. **Start the frontend client**
   ```bash
   cd ../client
   npm run dev
   ```
   The client runs on `http://localhost:5173` by default (see Vite config).

---

## API Endpoints
### Dashboard
- **GET `/api/dashboard`**
  - Returns intern dashboard data:
```json
{
  "name": "Alex Doe",
  "referralCode": "alex2025",
  "totalDonations": 1250,
  "rewards": [
    { "name": "Company T-Shirt", "unlocked": true },
    { "name": "$50 Gift Card", "unlocked": true },
    { "name": "Lunch with CEO", "unlocked": false }
  ]
}
```
### Leaderboard
- **GET `/api/leaderboard`**
  - Returns leaderboard data:
```json
[
  { "rank": 1, "name": "Samantha Jones", "totalDonations": 2100 },
  { "rank": 2, "name": "Michael Lee", "totalDonations": 1850 },
  { "rank": 3, "name": "Alex Doe", "totalDonations": 1250 },
  { "rank": 4, "name": "Priya Sharma", "totalDonations": 900 },
  { "rank": 5, "name": "Ben Carter", "totalDonations": 750 }
]
```

---

## Environment Variables
- `PORT` (server/.env): Port for backend server (default: 3001)

---

## Customization & Development
- Update intern and leaderboard data in `server/index.js` for demo/testing.
- Frontend pages are in `client/src/`.
- Styling uses Tailwind CSS classes.
- Animations use Framer Motion.

---

## License
MIT

---

