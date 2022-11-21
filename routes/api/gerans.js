const express = require("express");
const { auth, ctrlWrapper } = require("../../middlewares");
const { gerans: ctrl } = require("../../controllers");

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getAllGerans));

router.get("/owner", ctrlWrapper(ctrl.getGeransByOwner));

router.post("/", ctrlWrapper(ctrl.addGeran));

router.get("/:id", ctrlWrapper(ctrl.getGeranById));

router.put("/:id", ctrlWrapper(ctrl.updateGeranById));

router.patch("/:id/active", ctrlWrapper(ctrl.updateGeranActiveById));

router.delete("/:id", ctrlWrapper(ctrl.removeGeranById));

module.exports = router;
