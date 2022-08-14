import { config } from "dotenv";

import { createServer, Server as HttpServer } from "http";

import app from "./app";
import ChatServer from "./core/server/chat.server";

config({ debug: true, path: "./.env" });

const httpServer: HttpServer = createServer(app);

new ChatServer(httpServer).start();

httpServer.listen(process.env.APP_PORT || 3000);
