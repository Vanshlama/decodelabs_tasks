const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// connect database
mongoose.connect("mongodb://127.0.0.1:27017/project3");

// schema
const User = mongoose.model("User", {
  name: String,
  email: String
});

// CREATE
app.post("/add", async (req, res) => {
  await User.create(req.body);
  res.send("Saved");
});

// READ
app.get("/users", async (req, res) => {
  const data = await User.find();
  res.json(data);
});

// DELETE
app.delete("/delete/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.send("Deleted");
});

app.listen(5000, () => console.log("Server running"));