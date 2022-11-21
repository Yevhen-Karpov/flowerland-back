const { Schema, model } = require("mongoose");

const violetSchema = new Schema(
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
    price: {
      type: String,
      min: 1,
    },
    active: {
      type: Boolean,
      default: true,
    },
    status: {
      type: String,
      enum: ["є в наявності", "немає в наявності", "під замовлення"],
      default: "є в наявності",
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

const Violet = model("violet", violetSchema);

module.exports = Violet;
