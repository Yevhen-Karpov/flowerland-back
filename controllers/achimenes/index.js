const getAllAchimenes = require("./getAllAchimenes");
const addAchimene = require("./addAchimene");
const getAchimenById = require("./getAchimenById");
const updateAchimenById = require("./updateAchimeneById");
const removeAchimeneById = require("./removeAchimeneById");
const getAchimenesByOwner = require("./getAchimenesByOwner");
const updateAchimeneActiveById = require("./updateAchimeneActiveById");

module.exports = {
  getAllAchimenes,
  addAchimene,
  getAchimenById,
  updateAchimenById,
  removeAchimeneById,
  getAchimenesByOwner,
  updateAchimeneActiveById,
};
