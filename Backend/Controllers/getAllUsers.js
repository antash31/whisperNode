const Users = require("../Models/userModel");

const getAllUsers = async (req, res) => {
  //I want to fetch all the users from the database.

  try {
    const temp = await Users.find({}, { userId: 1, fullName: 1, _id: 0 });
    console.log(temp);
    res.status(200).send(temp);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ msg: "Server Error" });
  }
};

module.exports = getAllUsers;
