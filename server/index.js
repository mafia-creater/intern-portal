const express = require('express');
const cors =require('cors');

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 3001;

const internData = {
  name: 'Ripudaman',
  referralCode: 'Ripudaman2025',
  totalDonations: 125012,
  rewards: [
    { name: 'Company T-Shirt', unlocked: true },
    { name: '$50 Gift Card', unlocked: true },
    { name: 'Lunch with CEO', unlocked: false },
  ]
};

const leaderboardData = [
  { rank: 1, name: 'Samantha Jones', totalDonations: 210012 },
  { rank: 2, name: 'Michael Lee', totalDonations: 185012 },
  { rank: 3, name: 'Ripudaman', totalDonations: 125012 }, // Our current user
  { rank: 4, name: 'Priya Sharma', totalDonations: 91020 },
  { rank: 5, name: 'Ben Carter', totalDonations: 71250 },
];

// GET route for our dashboard data
app.get('/api/dashboard', (req, res) => {
  res.json(internData);
});

// GET route for the leaderboard data

app.get('/api/leaderboard', (req, res) => {
  res.json(leaderboardData);
});

// Start the server
app.listen(PORT, () => {
  console.log(`🎉 Server is running on http://localhost:${PORT}`);
});