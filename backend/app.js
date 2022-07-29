const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const dbClient = require("./db/dbClient");

const tourRouter = require("./routers/tour");
const adminRouter = require("./routers/admin");
const userRouter = require("./routers/user");
const hotelRouter = require("./routers/hotel");
const authenticationRouter = require("./routers/authentication");

const app = express();

app.use(cors({ origin: "*", credentials: true }));
app.options("*", cors({ origin: "*", credentials: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-with, Content-Type, Accept"
//   );
//   next();
// });

const run = async () => {
  try {
    await dbClient.connect();
    app.use("/api/v1/tour", tourRouter);
    app.use("/api/v1/admin", adminRouter);
    app.use("/api/v1/user", userRouter);
    app.use("/api/v1/hotels", hotelRouter);
    app.use("/api/v1/authentication", authenticationRouter);
    app.use((req, res) => {
      res.send({ success: false, message: "no page found" });
    });
  } finally {
  }
};

run().catch();

module.exports = app;
