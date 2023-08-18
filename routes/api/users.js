const express = require("express");
const router = express.Router();

const { users: user } = require("../../controllers");
const { auth } = require("../../middlewares");

router.post("/register", user.register);

router.post("/login", user.login);

router.post("/logout", auth, user.logout);

router.get("/current", auth, user.getCurrent);

router.patch("/", auth, user.updateAfterRemoveUser);

module.exports = router;