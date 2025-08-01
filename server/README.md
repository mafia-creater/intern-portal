# She Can Foundation Server API Documentation

This Express.js server provides API endpoints for the internship dashboard and leaderboard features.

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start the server:**
   ```bash
   node index.js
   ```
   The server will run on `http://localhost:3001` by default (or the port specified in your `.env` file).

## Environment Variables
- `PORT`: The port number for the server (default: 3001). Set in `.env`.

## API Endpoints

### 1. GET `/api/dashboard`
Returns the dashboard data for the current intern.

**Response Example:**
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

### 2. GET `/api/leaderboard`
Returns the leaderboard data for all interns.

**Response Example:**
```json
[
  { "rank": 1, "name": "Samantha Jones", "totalDonations": 2100 },
  { "rank": 2, "name": "Michael Lee", "totalDonations": 1850 },
  { "rank": 3, "name": "Alex Doe", "totalDonations": 1250 },
  { "rank": 4, "name": "Priya Sharma", "totalDonations": 900 },
  { "rank": 5, "name": "Ben Carter", "totalDonations": 750 }
]
```

## Project Structure
```
server/
  index.js      # Main Express server file
  package.json  # Node.js dependencies
  .env          # Environment variables
```

## Dependencies
- express
- cors

## Notes
- All data is currently hardcoded for demonstration purposes.
- CORS is enabled for development convenience.

## License
MIT
