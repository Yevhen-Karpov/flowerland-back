const express = require("express");
const { auth, ctrlWrapper } = require("../../middlewares");
const { gerans: ctrl } = require("../../controllers");

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getAll));

router.post("/", auth, ctrlWrapper(ctrl.add));

router.get("/:id", ctrlWrapper(ctrl.getById));

router.put("/:id", ctrlWrapper(ctrl.updateById));

router.delete("/:id", ctrlWrapper(ctrl.removeById));

module.exports = router;
