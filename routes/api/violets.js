const express = require("express");
const { auth, ctrlWrapper } = require("../../middlewares");
const { violets: ctrl } = require("../../controllers");

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getAll));

router.post("/", auth, ctrlWrapper(ctrl.add));

module.exports = router;
