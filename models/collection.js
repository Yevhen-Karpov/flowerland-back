const { Schema, model } = require("mongoose");

const collectionSchema = new Schema(
  {
    imgUrl: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    // descr: {
    //   type: String,
    // },

    // active: {
    //   type: Boolean,
    //   default: true,
    // },
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

const Collection = model("collection", collectionSchema);

module.exports = Collection;
