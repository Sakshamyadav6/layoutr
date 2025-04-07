const jwt = require("jsonwebtoken");
const User = require("../models/Users");

const protect = async (req, res, next) => {
  let token;
  //check for token in authorization header
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      //extract token from req
      token = req.headers.authorization.split(" ")[1];

      //verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET); //it returns the decoded payload back

      //attach user to request ,excluding password
      req.user = await User.findById(decoded._id).select("-password");

      next(); //go to the next middleware or controller
    } catch (error) {
      console.log("token verification failed", error);
      res.status(401).json({ message: "Not authorized, invalid token" });
    }
  } else {
    res.status(401).json({ message: "Not authorized, token not available" });
  }
};
module.exports = protect;
