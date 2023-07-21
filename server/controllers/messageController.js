const Messages = require("../models/messageModel");

module.exports.getMessages = async (req, res, next) => {
  try {
    const { from, to } = req.body;
    //find all the messages between two specific person
    const messages = await Messages.find({
      users: {
        $all: [from, to],
      },
      //sort all messages between two specific person
    }).sort({ updatedAt: 1 });

    const projectedMessages = messages.map((msg) => {
      return {
        fromSelf: msg.sender.toString() === from,
        message: msg.message.text,
        time:msg.createdAt
      };
    });
    res.json(projectedMessages);
  } catch (ex) {
    next(ex);
  }
};

module.exports.addMessage = async (req, res, next) => {
  try {
    const { from, to, message } = req.body;
    const data = await Messages.create({
      message: { text: message },
      users: [from, to],
      sender: from,
    });
    if (data) return res.json({ msg: "پیام با موفقیت ارسال شد" ,data});
    else return res.json({ msg: "پیام ارسال نشد" });
  } catch (ex) {
    next(ex);
  }
};
