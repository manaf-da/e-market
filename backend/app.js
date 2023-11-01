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

// Config
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({
    path: "config/.env",
  });
}

// Import routes
const user = require("./controller/user");
const shop = require("./controller/shop");
const product = require("./controller/product");
const event = require("./controller/event");
const coupon = require("./controller/couponCode");

app.use("/api/v2/user", user);
app.use("/api/v2/shop", shop);
app.use("/api/v2/product", product);
app.use("/api/v2/event", event);
app.use("/api/v2/coupon", coupon);

// Error handling middleware (should come last)
app.use((err, req, res, next) => {
  if (err instanceof ErrorHandler) {
    res.status(err.statusCode).json({
      success: false,
      message: err.message,
    });
  } else {
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

module.exports = app;
