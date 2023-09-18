const express = require("express");
const app = express();
const morgan = require("morgan");
const ErrorHandler = require("./utils/ErrorHandler");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");

// Apply morgan middleware
app.use(morgan("dev"));

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use("/", express.static("uploads"));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

//config
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({
    path: "config/.env",
  });
}

//import routes
const user = require("./controller/user");
const shop = require("./controller/shop");

app.use("/api/v2/user", user);
app.use("/api/v2/shop", shop);

//ErrorHandling
app.use(ErrorHandler);

module.exports = app;
