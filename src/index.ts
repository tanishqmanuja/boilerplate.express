import express from "express";
import env from "./env";

const app = express();

app.get("/", (_req, res) => {
  res.send("Hello World!");
});

app.listen(env.PORT, () => {
  console.log(`Listening on http://localhost:${env.PORT}`);
});
