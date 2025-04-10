const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoute = require("./routes/authRoutes");
const projectRoute = require("./routes/projectRoutes");

dotenv.config(); // load .env file

connectDB();

const app = express();
app.use(express.json());
app.use(cors());

//default route
app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/auth", authRoute);
app.use("/api", projectRoute);

const PORT = process.env.PORT;
app.listen(PORT, "0.0.0.0", () =>
  console.log(`Server running on port ${PORT}`)
);
