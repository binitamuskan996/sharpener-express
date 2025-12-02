const express = require('express');
const app = express();
const port = 4000;

// Middleware to parse JSON data in request bodies
app.use(express.json());

// GET endpoint for /products
app.get('/products', (req, res) => {
  console.log('GET /products - Request received');
  res.send('Here is the list of all products.');
});

// POST endpoint for /products
app.post('/products', (req, res) => {
  console.log('POST /products - Request received');
  res.send('A new product has been created.');
});

// GET endpoint for /categories
app.get('/categories', (req, res) => {
  console.log('GET /categories - Request received');
  res.send('Here is the list of all categories.');
});

// POST endpoint for /categories
app.post('/categories', (req, res) => {
  console.log('POST /categories - Request received');
  res.send('A new category has been added.');
});

// Wildcard route to handle all undefined routes (404 error)
app.use((req, res) => {
  console.log(`404 - Route not found: ${req.method} ${req.url}`);
  res.status(404).send('<h1>404 - Page Not Found</h1>');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});