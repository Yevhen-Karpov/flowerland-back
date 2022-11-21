const express = require("express");
const { ctrlWrapper } = require("../../middlewares");
const { violets: ctrl } = require("../../controllers");

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getAllViolets));

router.get("/owner", ctrlWrapper(ctrl.getVioletsByOwner));

router.post("/", ctrlWrapper(ctrl.addViolet));

router.get("/:id", ctrlWrapper(ctrl.getVioletById));

router.put("/:id", ctrlWrapper(ctrl.updateVioletById));

router.patch("/:id/active", ctrlWrapper(ctrl.updateVioletActiveById));

router.delete("/:id", ctrlWrapper(ctrl.removeVioletById));

module.exports = router;
