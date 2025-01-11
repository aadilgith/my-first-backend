const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
console.log(process.env.PORT);

const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// GET route with default
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

// GET route for a specific route
app.get("/api/items", (req, res) => {
  res.json([{id: 1, name: 'Item One'}, {id: 2, name: 'Item Two'}, {id: 3, name: 'Item Three'}]);
});

// POST route for API requests
app.post("/api/items", (req, res) => {
  console.log(req.body);
  const newItem = req.body;
  console.log(Date());
  console.log(Date.now());
  newItem.id = Date.now()
  res.status(201).json(newItem);
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
