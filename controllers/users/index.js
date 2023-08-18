const register = require("./register");
const login = require("./login");
const getCurrent = require("./getCurrent");
const logout = require("./logout");
const updateAfterRemoveUser = require("./updateAfterRemoveUser");

module.exports = {
  register,
  login,
  logout,
  getCurrent,
  updateAfterRemoveUser,
};