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
const allowedOrigins = [
  "http://localhost:5173", // local dev
  "https://layoutr.vercel.app", // production frontend on Vercel
];
app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests from no origin
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

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
