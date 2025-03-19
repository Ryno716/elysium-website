const express = require("express");
const cors = require("cors");
const fs = require("fs");
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const DATA_FILE = "./public/data/trainers.json"; // ✅ Path to trainers JSON

// ✅ GET trainers (Read)
app.get("/api/trainers", (req, res) => {
  fs.readFile(DATA_FILE, "utf8", (err, data) => {
    if (err) {
      res.status(500).json({ message: "Error reading trainers.json" });
    } else {
      res.json(JSON.parse(data));
    }
  });
});

// ✅ POST trainers (Add)
app.post("/api/trainers", (req, res) => {
  const newTrainer = req.body;

  fs.readFile(DATA_FILE, "utf8", (err, data) => {
    if (err) {
      res.status(500).json({ message: "Error reading file" });
      return;
    }

    const trainers = JSON.parse(data);
    trainers.push(newTrainer);

    fs.writeFile(DATA_FILE, JSON.stringify(trainers, null, 2), (err) => {
      if (err) {
        res.status(500).json({ message: "Error saving trainer" });
      } else {
        res.json({ message: "Trainer added successfully", trainers });
      }
    });
  });
});

// ✅ DELETE trainer
app.delete("/api/trainers/:index", (req, res) => {
  const index = parseInt(req.params.index, 10);

  fs.readFile(DATA_FILE, "utf8", (err, data) => {
    if (err) {
      res.status(500).json({ message: "Error reading file" });
      return;
    }

    let trainers = JSON.parse(data);
    trainers.splice(index, 1); // Remove trainer at index

    fs.writeFile(DATA_FILE, JSON.stringify(trainers, null, 2), (err) => {
      if (err) {
        res.status(500).json({ message: "Error deleting trainer" });
      } else {
        res.json({ message: "Trainer deleted successfully", trainers });
      }
    });
  });
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
