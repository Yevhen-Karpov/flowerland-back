// const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const achimenesRouter = require("./routes/api/achimenes");
const geransRouter = require("./routes/api/gerans");
const violetsRouter = require("./routes/api/violets");
const authRouter = require("./routes/api/auth");
const usersRouter = require("./routes/api/users");
const collectionsRouter = require("./routes/api/collections");

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());

app.use("/api/achimenes", achimenesRouter);
app.use("/api/gerans", geransRouter);
app.use("/api/violets", violetsRouter);
app.use("/api/auth", authRouter);
app.use("/api/users", usersRouter);
app.use("/api/collections", collectionsRouter);

module.exports = app;
