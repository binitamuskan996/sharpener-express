const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON data in request bodies
app.use(express.json());

// In-memory database (just a simple array)
let users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
];
const addUserMiddleware = (req, res, next) => {
    req.user = "Guest";
    next();
};

// TASK 1: Route with custom middleware applied
app.get('/welcome', addUserMiddleware, (req, res) => {
    res.send(`<h1>Welcome, ${req.user}!</h1>`);
});
// GET all users
app.get('/users', (req, res) => {
    res.json(users);
});

// POST to add a new user
app.post('/users', (req, res) => {
    const { name } = req.body;
    const newUser = { id: users.length + 1, name };
    users.push(newUser);
    res.status(201).json(newUser);
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});