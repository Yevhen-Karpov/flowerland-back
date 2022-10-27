const express = require("express");
const { auth, ctrlWrapper } = require("../../middlewares");
// const { gerans: ctrl } = require("../../controllers");

const { collections: ctrl } = require("../../controllers");

const router = express.Router();

// router.get("/", ctrlWrapper(ctrl.getAllGerans));

// router.get("/owner", ctrlWrapper(ctrl.getGeransByOwner));

// router.post("/", auth, ctrlWrapper(ctrl.addGeran));

// router.get("/:id", ctrlWrapper(ctrl.getGeranById));

// router.put("/:id", ctrlWrapper(ctrl.updateGeranById));

// router.delete("/:id", ctrlWrapper(ctrl.removeGeranById));

router.get("/", ctrlWrapper(ctrl.getAll));

router.get("/owner", ctrlWrapper(ctrl.getByOwner));

router.post("/", auth, ctrlWrapper(ctrl.add));

router.get("/:id", ctrlWrapper(ctrl.getById));

router.put("/:id", ctrlWrapper(ctrl.updateById));

router.delete("/:id", ctrlWrapper(ctrl.removeById));

module.exports = router;
