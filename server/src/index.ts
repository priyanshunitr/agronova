import express from "express";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 3000;

const app = express();

app.get("/", (_req, res) => {
  res.send("congrates! Server is running");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
