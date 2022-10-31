const { Schema, model } = require("mongoose");

const achimeneSchema = new Schema(
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
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Achimene = model("achimene", achimeneSchema);

module.exports = Achimene;
