const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON data in request bodies
app.use(express.json());

// GET endpoint for /orders
app.get('/orders', (req, res) => {
  console.log('GET /orders - Request received');
  res.send('Here is the list of all orders.');
});

// POST endpoint for /orders
app.post('/orders', (req, res) => {
  console.log('POST /orders - Request received');
  res.send('A new order has been created.');
});

// GET endpoint for /users
app.get('/users', (req, res) => {
  console.log('GET /users - Request received');
  res.send('Here is the list of all users.');
});

// POST endpoint for /users
app.post('/users', (req, res) => {
  console.log('POST /users - Request received');
  res.send('A new user has been added.');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});