const express = require("express");
const router = express.Router();
const registerUsers = require("../Controllers/registerUsers");
const getAllUsers = require("../Controllers/getAllUsers");
const addContact = require("../Controllers/addContact");
const validateAccount = require("../Controllers/validateAccount")

router.route("/").post(registerUsers).get(getAllUsers);

router.route("/:id").patch(addContact);

router.route("/validate").post(validateAccount);

module.exports = router;
