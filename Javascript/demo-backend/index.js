const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/Trainingdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/customers", async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(5000, () =>
  console.log("✅ Server running on http://localhost:5000")
);
