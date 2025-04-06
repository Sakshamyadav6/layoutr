const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoute = require("./routes/authRoutes");

dotenv.config(); // load .env file

connectDB();

const app = express();
app.use(express.json());
app.use(cors());

//default route
app.get("/", (res, req) => {
  res.send("API is running...");
});

app.use("/api/auth", authRoute);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
