//const express = require("express");
import express from "express";

const app = express();

app.use(express.static("dist"));

app.get("/", async (_req, res) => {
  res.send(`<h1>Hello from React</h1>`);
});

app.listen(7777);

console.info("Server is listening on port 7777");
