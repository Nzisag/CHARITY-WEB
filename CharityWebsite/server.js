const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware to handle JSON data and enable CORS
app.use(cors());
app.use(bodyParser.json());

// Test route to check server status
app.get('/', (req, res) => {
  res.send('Backend is running');
});

// Handle volunteer sign-up form submission
app.post('/api/volunteer', (req, res) => {
  const { name, email, interest } = req.body;

  if (!name || !email || !interest) {
    return res.status(400).json({ message: 'Please fill all the fields.' });
  }

  // Send confirmation response
  res.json({
    message: `Thank you, ${name}! You signed up to help with ${interest}.`,
  });
});
app.post('/api/donation', (req, res) => {
  const { name, email, amount } = req.body;

  if (!name || !email || !amount) {
    return res.status(400).json({ message: 'Please fill all donation fields.' });
  }

  // Here, you can save the donation info to a database or file if you want

  res.json({ message: `Thank you ${name} for your generous donation of KES ${amount}!` });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
