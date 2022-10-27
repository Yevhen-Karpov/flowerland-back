const { Schema, model } = require("mongoose");

const flowerSchema = new Schema(
  {
    imgUrl: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    descr: {
      type: String,
    },

    active: {
      type: Boolean,
      default: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Flower = model("flover", flowerSchema);

module.exports = Flower;
