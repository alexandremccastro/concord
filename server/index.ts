import * as express from "express";
import { createServer, Server as HttpServer } from "http";
import { Server, Socket } from "socket.io";

const app = express();
const httpServer: HttpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

app.get("/register", (req, res) => {
  res.send({ message: "Register a new user" });
});

io.on("connection", (socket: Socket) => {
  socket.on("test", (e) => {
    console.log("message data", e);

    socket.join("testroom");

    socket.to("testroom").emit("welcome", { message: "Welcome to the room" });

    socket.emit("welcome", { message: "Welcome to the room" });

    socket.on("disconnect", () => {
      console.log("Socket has been disconected");
      socket.leave("testroom");
    });
  });
});

httpServer.listen(3000);
