const express = require("express");
const router = express.Router();
const getAllConversations = require("../Controllers/getAllConversations");

router.route("/:AdminUserId").get(getAllConversations);

module.exports = router;
