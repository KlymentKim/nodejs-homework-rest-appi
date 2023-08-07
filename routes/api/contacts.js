const express = require('express')

const router = express.Router();


const { contacts: use } = require("../../controllers");

router.get("/", use.getAllContacts);

router.get("/:contactId", use.getByIdContact);

router.post("/", use.addContact);

router.delete("/:contactId", use.removeByIdContact);

router.put("/:contactId", use.updateByIdContact);

module.exports = router;
