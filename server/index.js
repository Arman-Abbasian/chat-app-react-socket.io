const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const socket = require("socket.io");
require("dotenv").config();
const authRoutes = require("./routes/auth");
const messageRoutes = require("./routes/messages");


//cors config
app.use(cors());
//client data config
app.use(express.json());
//mongoose connection to mongoDB
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("mongoose connected to mongoDB successfully");
  })
  .catch((err) => {
    console.log(err.message);
  });
//route confing
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
//web server config
const server = app.listen(process.env.PORT, () =>
  console.log(`Server started on port ${process.env.PORT}`)
);
//socke.io config
const io = socket(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
  },
});

global.onlineUsers = new Map();
io.on("connection", (socket) => {
  global.chatSocket = socket;
  socket.on("add-user", (userId) => {
    onlineUsers.set(userId, socket.id);
  });

  socket.on("send-msg", (data) => {
    const sendUserSocket = onlineUsers.get(data.to);
    if (sendUserSocket) {
      socket.to(sendUserSocket).emit("msg-recieve", data.msg);
    }
  });
})
