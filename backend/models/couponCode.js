const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
const couponCodeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your coupon code name"],
    unique: true,
  },
  value: {
    type: Number,
    required: true,
  },
  minAmount: {
    type: Number,
  },
  maxAmount: {
    type: Number,
  },
  shop: {
    type: Object,
    required: true,
  },
  selectedProduct: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

//Export the model
module.exports = mongoose.model("CouponCode", couponCodeSchema);
