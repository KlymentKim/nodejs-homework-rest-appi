const getAll = require("./getAll");
const getById = require("./getById");
const addContact = require("./addContact");
const removeById = require("./removeById");
const updateById = require("./updateByid");
const updateStatusContact = require("./updateStatusContact");

module.exports = {
  getAll,
  getById,
  addContact,
  updateById,
  removeById,
  updateStatusContact,
};