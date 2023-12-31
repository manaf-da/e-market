const express = require("express");
const path = require("path");
const fs = require("fs");
const router = express.Router();
const { upload } = require("../multer");
const jwt = require("jsonwebtoken");
const sendMail = require("../utils/sendMail");
const ErrorHandler = require("../utils/ErrorHandler");
const sendToken = require("../utils/jwtToken");
const catchAsyncErrors = require("../middleware/catchAsyncError");
const { isAuthenticated, isSeller } = require("../middleware/auth");
const Shop = require("../models/shop");
const sendShopToken = require("../utils/shopToken");

router.post("/create-shop", upload.single("file"), async (req, res, next) => {
  try {
    const { email } = req.body;
    const sellerEmail = await Shop.findOne({ email });
    if (sellerEmail) {
      const filename = req.file.filename;
      const filePath = `uploads/${filename}`;
      fs.unlink(filePath, (err) => {
        if (err) {
          return next(new ErrorHandler("Error deleting uploaded file", 500));
        } else {
          return next(new ErrorHandler("User already exists", 400));
        }
      });
    } else {
      const filename = req.file.filename;
      const fileUrl = path.join(filename);

      const seller = {
        name: req.body.name,
        email: email,
        password: req.body.password,
        avatar: fileUrl,
        address: req.body.address,
        phoneNumber: req.body.phoneNumber,
        zipCode: req.body.zipCode,
      };

      const activationToken = createActivationToken(seller);
      const activationUrl = `http://localhost:3000/seller/activation/${activationToken}`;
      try {
        await sendMail({
          email: seller.email,
          subject: "Activate your shop",
          message: `Hello ${seller.name}, please click on the link to activate your shop: ${activationUrl}`,
        });
        res.status(200).json({
          success: true,
          message: `Please check your email: ${seller.email} to activate your shop!`,
        });
      } catch (error) {
        return next(new ErrorHandler(error.message, 500));
      }
    }
  } catch (error) {
    return next(new ErrorHandler(error.message, 400));
  }
});

//create the activation token
const createActivationToken = (seller) => {
  return jwt.sign(seller, process.env.ACTIVATION_SECRET, {
    expiresIn: "5m",
  });
};

// activate user
router.post(
  "/activation",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const { activation_token } = req.body;

      const newSeller = jwt.verify(
        activation_token,
        process.env.ACTIVATION_SECRET
      );

      if (!newSeller) {
        return next(new ErrorHandler("Invalid token", 400));
      }
      const { name, email, password, avatar, zipCode, address, phoneNumber } =
        newSeller;

      let seller = await Shop.findOne({ email });

      if (seller) {
        return next(new ErrorHandler("User already exists", 400));
      }
      seller = await Shop.create({
        name,
        email,
        avatar,
        password,
        zipCode,
        address,
        phoneNumber,
      });

      sendShopToken(seller, 201, res);
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

//login shop

router.post(
  "/login-shop",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return next(
          new ErrorHandler("Please enter a valid email and password", 400)
        );
      }
      const user = await Shop.findOne({ email }).select("+password");
      if (!user) {
        return next(new ErrorHandler("User doesn't exist", 404));
      }
      const isPasswordValid = await user.comparePassword(password);
      if (!isPasswordValid) {
        return next(
          new ErrorHandler("Please provide the correct Information", 401)
        );
      }
      sendShopToken(user, 201, res);
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

//load user
router.get(
  "/getSeller",
  isSeller,
  catchAsyncErrors(async (req, res, next) => {
    try {
      const seller = await Shop.findById(req.seller._id);

      if (!seller) {
        return next(new ErrorHandler("User doesn't exists", 400));
      }

      res.status(200).json({
        success: true,
        seller,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

/* Logout shop */
router.get(
  "/logout",
  catchAsyncErrors(async (req, res, next) => {
    try {
      res.cookie("seller_token", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
      });
      res.status(201).json({
        success: true,
        message: "Log out Successfully",
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

/* Get shop Info */
router.get(
  "/get-shop-info/:id",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const shop = await Shop.findById(req.params.id);
      res.status(201).json({
        success: true,
        shop,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);
module.exports = router;
