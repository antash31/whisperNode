const User = require("../Models/userModel");

const getAllConversations = async (req, res) => {
  try {
    //1.I want to get the AdminID
    console.log(req.params);
    const { AdminUserId } = req.params;
    console.log(AdminUserId);

    //2.I want that adminID's contacts in an array.
    const adminContactArray = await User.find(
      { userId: AdminUserId },
      { contacts: 1, _id: 0 }
    );
    console.log("AdminContacts: ", adminContactArray);

    if (adminContactArray.length == 0) {
      return res.status(404).json({ msg: "No such ID" });
    }
    if (adminContactArray[0].contacts.length == 0) {
      return res.status(200).json({ msg: "Admin has no contacts yet" });
    }

    //3. Then I want to get all the users from their IDs.
    const adminContactsInfo = await User.find(
      { userId: { $in: adminContactArray[0].contacts } },
      { __id: 0, __v: 0 }
    );
    console.log("Admin contacts info: ", adminContactsInfo);
    res.status(200).send(adminContactsInfo);
  } catch (err) {
    console.log("Error bro: ", err.message);
  }
};

module.exports = getAllConversations;
