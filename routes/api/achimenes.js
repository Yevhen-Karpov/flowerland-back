const express = require("express");
const { auth, ctrlWrapper } = require("../../middlewares");
const { achimenes: ctrl } = require("../../controllers");

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getAllAchimenes));

router.get("/owner", ctrlWrapper(ctrl.getAchimenesByOwner));

router.post("/", auth, ctrlWrapper(ctrl.addAchimene));

router.get("/:id", ctrlWrapper(ctrl.getAchimenById));

router.put("/:id", ctrlWrapper(ctrl.updateAchimenById));

router.delete("/:id", ctrlWrapper(ctrl.removeAchimeneById));

module.exports = router;
