const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
    conversationId:{type:String,required:true},
    messageId:{type:String,required:true},
    sentBy:{type:String,required:true},
    receivedBy:{type:String,required:true},
    text:{type:String,required:true},
    Time:()=>new Date(),
});

module.exports = mongoose.model("Message",MessageSchema);