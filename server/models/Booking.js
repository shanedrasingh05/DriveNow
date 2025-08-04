import mongoose from "mongoose";

const { Schema } = mongoose;

const bookingSchema = new Schema(
  {
    car: {
      type: Schema.Types.ObjectId,
      ref: "Car",
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    pickupDate: {
      type: Date,
      required: true,
    },
    returnDate: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "confirmed", "cancelled"],
      default: "pending",
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;


// import mongoose from "mongoose";
// const { ObjectId } = mongoose.Schema.Types;

// const bookingSchema = new mongoose.Schema(
//   {
//     car: {
//       type: Schema.Types.ObjectId,
//       ref: "Car",
//       required: true,
//     },
//     user: {
//       type: Schema.Types.ObjectId,
//       ref: "User",
//       required: true,
//     },
//     owner: {
//       type: Schema.Types.ObjectId,
//       ref: "User",
//       required: true,
//     },
//     pickupDate: {
//       type: Date,
//       required: true,
//     },
//     returnDate: {
//       type: Date,
//       required: true,
//     },
//     status: {
//       type: String,
//       enum: ["pending", "confirmed", "cancelled"],
//       default: "pending",
//     },
//     price: {
//       type: Number,
//       required: true,
//     },
//   },
//   { timestamps: true }
// );

// const Booking = mongoose.model('Booking', bookingSchema)
// export default Booking;
