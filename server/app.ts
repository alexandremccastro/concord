import * as express from "express";

const app = express();

app.get("/register", (req, res) => {
  res.send({ message: "Register a new user" });
});

export default app;
