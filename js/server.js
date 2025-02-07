// server.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = 8080;

// Serve static files from public folder
app.use(express.static(path.join(__dirname, 'js')));

// Routes serving HTML pages from the views folder
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'homepage.html'));
});

app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'dashboard.html'));
});

app.get('/accounts', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'accounts.html'));
});

app.get('/transactions', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'transactions.html'));
});

app.get('/settings', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'settings.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});