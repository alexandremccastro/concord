import { Server as HttpServer } from "http";
import { Server, Socket } from "socket.io";
import IOServer from "./io.server";

export default class ChatServer extends IOServer {
  constructor(httpServer: HttpServer) {
    super(httpServer, {
      cors: {
        origin: process.env.FRONT_URL,
      },
    });
  }

  start() {
    this.io.on("connection", (socket: Socket) => {
      socket.on("test", (e) => {
        console.log("message data", e);

        socket.join("testroom");

        socket
          .to("testroom")
          .emit("welcome", { message: "Welcome to the room" });

        socket.emit("welcome", { message: "Welcome to the room" });

        socket.on("disconnect", () => {
          console.log("Socket has been disconected");
          socket.leave("testroom");
        });
      });
    });
  }
}
