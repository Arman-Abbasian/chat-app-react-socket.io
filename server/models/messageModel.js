const mongoose = require("mongoose");

const MessageSchema = mongoose.Schema({
  //body of message
    message: {
      text: { type: String, required: true },
    },
    //message send form who to who
    users: Array,
    //who send the message
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Messages", MessageSchema);
