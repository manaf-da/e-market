const express = require("express");
const router = express.Router();
const CouponCode = require("../models/couponCode");
const Shop = require("../models/shop");
const CatchAsyncErrors = require("../middleware/catchAsyncError");
const ErrorHandler = require("../utils/ErrorHandler");
const { isSeller } = require("../middleware/auth");

/* create coupon code */
router.post(
  "/create-coupon-code",
  isSeller,
  CatchAsyncErrors(async (req, res, next) => {
    try {
      const isCouponCodeExist = await CouponCode.findOne({
        name: req.body.name,
      });

      if (!isCouponCodeExist !== 0) {
        return next(new ErrorHandler("Coupon code already exists! ", 400));
      }
      const couponCode = await CouponCode.create(req.body);
      res.status(201).json({
        success: true,
        couponCode,
      });
    } catch (error) {
      return next(new ErrorHandler(error, 400));
    }
  })
);

/* Get a single coupon of a shop */

router.get(
  "/get-coupon/:id",
  isSeller,
  CatchAsyncErrors(async (req, res, next) => {
    try {
      const couponCode = await CouponCode.find({
        shop: { _id: req.params.id },
      });
      res.status(201).json({
        success: true,
        couponCode,
      });
    } catch (error) {
      return next(new ErrorHandler(error, 400));
    }
  })
);

module.exports = router;
