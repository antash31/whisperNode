const User = require("../Models/userModel");

const registerUsers = async (req, res) => {
  const { fullName, username, email, password } = req.body;
  const userId = Date.now();

  try {
    let emailFind = await User.findOne({ email });

    if (emailFind) {
      return res.status(400).json({ msg: "User Already exists" });
    }

    emailFind = new User({
      userId,
      fullName,
      username,
      email,
      password,
    });
    await emailFind.save();
    res.status(201).json({ msg: "User registered" });
  } catch (err) {
    console.log(err.message);
    res.status(500).send("server error");
  }
};

module.exports = registerUsers;
