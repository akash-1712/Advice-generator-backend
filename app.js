const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const adviceRouter = require("./routes/fetch");
const helmet = require("helmet");

const app = express();

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST,PUT,DELETE,OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Origin, X-Requested-With,Authorization"
  );
  next();
});

app.use(helmet);

app.use("/fetch", adviceRouter);

app.use((req, res, next) => {
  throw new Error("not a correct URL(use 'domain/fetch/advice' instead)");
});
app.use((error, req, res, next) => {
  res.status(500).json({ message: "Failed", error: error.message });
});

app.listen(process.env.PORT || 8080);
