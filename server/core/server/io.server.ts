import { Server as HttpServer } from "http";
import { Server, ServerOptions } from "socket.io";

export default class IOServer {
  protected io: Server;

  constructor(httpServer: HttpServer, serverOptions?: Partial<ServerOptions>) {
    this.io = new Server(httpServer, serverOptions);
  }
}
