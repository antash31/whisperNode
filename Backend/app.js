const express = require("express");
const app = express();
const users = require("../Backend/Routes/users");
const mongoose = require("mongoose");
const cors = require("cors");
const db = require("./Config/db");
const { Server } = require("socket.io");
const http = require("http");
const conversations = require("../Backend/Routes/conversations");

app.use(cors());
const server = http.createServer(app);
// const io = new Server(server, {
//   cors: {
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
//     credentials: true,
//   },
// });

// io.on("connection", (socket) => {
//   console.log(`User Connected ${socket.id}`);

//   socket.broadcast.emit("First emit", `Socket has emitted ${socket.id}`);

//   socket.on("message", ({ message, room }) => {
//     socket.to(room).emit("messageFU", message);
//   });
//   socket.on("join-room", (room) => {
//     socket.join(room);
//     console.log(`User joined room ${room}`);
//   });
// });

app.use(express.json());

//For conversations.
app.use("/api/v1/conversations/getAllConversations", conversations);

//To check if the user is present or not.
app.use("/api/v1/users", users);

app.use("/api/v1/users/register", users);
app.use("/api/v1/users/getAllUsers", users);
app.use("/api/v1/users/addContact", users);

server.listen(9000, () => {
  console.log(`Server is listening`);
});
