const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const users = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Doe", email: "jane@example.com" },
];

app.get("/welcome", (req, res) => {
  res.json({ message: "Welcome to Express!" });
});

app.get("/users", (req, res) => {
  res.json(users);
});

app.post("/users", (req, res) => {
  const newUser = { id: users.length + 1, ...req.body };
  users.push(newUser);
  res.status(201).json(newUser);
});

app.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const index = users.findIndex((user) => user.id == id);
  if (index !== -1) {
    users[index] = { ...users[index], ...req.body };
    res.json(users[index]);
  } else {
    res.status(404).json({ error: "User not found" });
  }
});

app.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  const index = users.findIndex((user) => user.id == id);
  if (index !== -1) {
    users.splice(index, 1);
    res.json({ message: "User deleted" });
  } else {
    res.status(404).json({ error: "User not found" });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
