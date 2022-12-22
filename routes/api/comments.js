const express = require("express");
const { auth, ctrlWrapper } = require("../../middlewares");
const { comments: ctrl } = require("../../controllers");

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getAllComments));

router.post("/", auth, ctrlWrapper(ctrl.addComment));

module.exports = router;
