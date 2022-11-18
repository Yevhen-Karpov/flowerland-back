const getAllGerans = require("./getAllGerans");
const addGeran = require("./addGeran");
const getGeranById = require("./getGeranById");
const updateGeranById = require("./updateGeranById");
const removeGeranById = require("./removeGeranById");
const getGeransByOwner = require("./getGeransByOwner");
const updateGeranActiveById = require("./updateGeranActiveById");

module.exports = {
  getAllGerans,
  addGeran,
  getGeranById,
  updateGeranById,
  removeGeranById,
  getGeransByOwner,
  updateGeranActiveById,
};
