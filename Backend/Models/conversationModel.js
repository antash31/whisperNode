const mongoose  = require("mongoose");

const conversationSchema = new mongoose.Schema({
    conversationId:{type:String,required:true},
    participants:{type:[String],required:true},
    createdAt:{type:Date,required:true}
});

module.exports = mongoose.model("Conversation",conversationSchema);