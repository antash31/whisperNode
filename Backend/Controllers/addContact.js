const User = require("../Models/userModel");

const addContact = async (req, res) => {
  try {
    const { id } = req.params;
    const { AdminuserId } = req.body;

    if(id==AdminuserId)
    {
        return res.status(400).json({msg:"Id and admin ID is same !!"})
    }
      const contactFind = await User.findOne({
        userId: AdminuserId,
        contacts: { $in: [id] },
      });
  
      console.log(contactFind);
  
      if (contactFind) {
        return res.status(400).json({ msg: "Contact Already added" });
      }
  
      await User.updateOne({ userId: AdminuserId }, { $addToSet: { contacts: id } });
  
      res.status(200).json({ msg: "Contact Updated" });
    
  
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = addContact;
