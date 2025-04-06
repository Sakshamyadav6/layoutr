const User = require("../models/Users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registeredUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    //1.check if user already exists
    const user = await User.findOne({ email });
    if (user) {
      res.status(400).json({ message: "user already registred" });
    }
    //2.salt and hash passwrod
    const salt = await bcrypt.genSalt(10); // 10=costfactor
    const hashedPassword = await bcrypt.hash(password, salt); // format of hasing first (plainpwd,the salt)
    //3.create and save new user
    const newUser = await User.create({
      email: email,
      name: name,
      password: hashedPassword,
    });
    //4.create jwt token
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    //5. return success response
    res.status(200).json({
      message: "user registred sucessfully",
      user: {
        name: newUser.name,
        email: newUser.email,
      },

      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "server error" });
  }
};
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    //1 find user by email and include password
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      res.status(400).json({ message: "Invalid email or password" });
    }
    //2 compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.status(400).json({ message: "Invalid password" });
    }
    //3 jwt token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    //4 return success response
    res.status(200).json({
      message: "Logged in sucessfully",
      user: { id: user._id, name: user.name, email: email },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};
module.exports = { registeredUser, loginUser };
