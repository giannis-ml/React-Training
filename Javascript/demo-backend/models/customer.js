const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema(
  {
    customerId: {
      type: String,
      required: true,
      unique: true,
    },
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      required: true,
    },
    preferredBarber: {
      type: String,
      default: null,
    },
    visitHistory: {
      type: [
        {
          date: Date,
          service: String,
          barber: String,
          amount: Number,
        },
      ],
      default: [],
    },
    membershipStatus: {
      type: String,
      enum: ["Bronze", "Silver", "Gold", "Platinum"],
      default: "Bronze",
    },
    loyaltyPoints: {
      type: Number,
      default: 0,
    },
    medicalNotes: {
      type: String,
      default: "None",
    },
    address: {
      street: String,
      city: String,
      postalCode: String,
      country: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Customer", customerSchema);
