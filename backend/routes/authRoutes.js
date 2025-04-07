const express = require("express");
const router = express.Router();
const {
  registeredUser,
  loginUser,
  updateProfile,
} = require("../controllers/authController");
const protect = require("../middlewares/authMiddleware");

router.post("/register", registeredUser);
router.post("/login", loginUser);

//protected route
router.get("/profile", protect, (req, res) => {
  res
    .status(200)
    .json({ message: "User profile fetched sucessfully", user: req.user });
});
router.put("/profile", protect, updateProfile);

module.exports = router;
