const express = require("express");
const cors = require("cors");
require("dotenv").config();


/* application level connection */
const app = express();

/* middleware connections */
app.use(
  cors({
    origin: "*",
    methods: "GET, PATCH, POST, DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);
app.use(express.json());

/* connection establishment */
app.get("/", (req, res, next) => {
  try {
    res.status(200).json({
      acknowledgement: true,
      message: "OK",
      description: "The request is OK and fetch successful request",
      data: "Truthstores E-Commerce server connection establish successfully",
    });
  } catch (err) {
    next(err);
  } finally {
    console.log(`URL: ${req.url} || Method: ${req.method}`);
  }
});

/* export application */
module.exports = app;

/**
 * How to fix: "error fsevents@2.0.7: The platform "linux" is incompatible with this module."
 * https://stackoverflow.com/questions/57082249/how-to-fix-error-fsevents2-0-7-the-platform-linux-is-incompatible-with-thi
 */