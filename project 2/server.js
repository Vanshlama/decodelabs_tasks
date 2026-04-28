// Backend API Project
// GET /users → fetch users
// POST /users → add user (tested using Thunder Client / fetch)const express = require("express");
const app = express();

app.use(express.json());

// Dummy data (acts like database)
let users = [
  {
    id: 1,
    name: "Vansh",
    email: "vansh@gmail.com"
  }
];

// ✅ GET API
app.get("/users", (req, res) => {
  res.json(users);
});

// ✅ POST API
app.post("/users", (req, res) => {
  const { name, email } = req.body;

  // Basic validation
  if (!name || !email) {
    return res.status(400).json({ message: "Name and email required" });
  }

  const newUser = {
    id: users.length + 1,
    name,
    email,
  };

  users.push(newUser);

  res.status(201).json({
    message: "User added successfully",
    user: newUser,
  });
});

// Root route
app.get("/", (req, res) => {
  res.send("Backend API is running 🚀");
});

// Start server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});