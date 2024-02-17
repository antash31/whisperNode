const User = require("../Models/userModel");

const validateAccount = async (req, res) => {
  const { email, password } = req.body;

  const verify = await User.find(
    { email: email, password: password },
    { _id: 0, __v: 0 }
  );

  if (verify.length == 0) {
    return res
      .status(404)
      .json({ msg: "The user is not signed up with this email." });
  }

  res.status(200).send({ userInfo: verify, msg: "User Sent successfully" });
};

module.exports = validateAccount;
