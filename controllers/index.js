const getAll = require("./getAllContacts");
const getById = require("./getByIdContact");
const add = require("./addContact");
const updateById = require("./updateByidContact");
const removeById = require("./removeByIdContact");

module.exports = {
  getAll,
  getById,
  add,
  updateById,
  removeById,
};