const express = require("express");
const { auth, ctrlWrapper } = require("../../middlewares");
const { collections: ctrl } = require("../../controllers");

const router = express.Router();

router.get("/", auth, ctrlWrapper(ctrl.getAll));

// router.get("/owner", ctrlWrapper(ctrl.getCollectionsByOwner));

router.post("/", auth, ctrlWrapper(ctrl.add));

router.delete("/:id", auth, ctrlWrapper(ctrl.removeById));

module.exports = router;
