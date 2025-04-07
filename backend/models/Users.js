const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Please add a email"],
      unique: true,
      lowercase: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please add a valid email",
      ],
    },
    password: {
      type: String,
      required: true,
      minLength: [6, "Password should be 6 characters long"],
      required: [true, "Please add a password"],
      select: false, // prevent exposing to queries by default
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    avatar: {
      type: String,
      default:
        "https://img.freepik.com/free-vector/purple-man-with-blue-hair_24877-82003.jpg?t=st=1744053967~exp=1744057567~hmac=b56dbd844c7d7c6e8cd2ff92755e635bfc1d90a7f4e3e742ee343f48a4190d8a&w=900",
    },
  },
  {
    timestamps: true, //adds createdAt and updatedAt fields
  }
);
module.exports = mongoose.model("User", userSchema);
