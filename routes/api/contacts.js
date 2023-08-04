const express = require('express')

const router = express.Router();


const { contacts: use } = require("../../controllers");

router.get("/", use.getAllContacts);

router.get("/:contactId", use.getbyIdContact);

router.post("/", use.add);

router.delete("/:contactId", use.removeById);

router.put("/:contactId", use.updateById);

module.exports = router;



// router.get('/', async (req, res, next) => {
//   res.json({ message: 'template message' })
// })

// router.get('/:contactId', async (req, res, next) => {
//   res.json({ message: 'template message' })
// })

// router.post('/', async (req, res, next) => {
//   res.json({ message: 'template message' })
// })

// router.delete('/:contactId', async (req, res, next) => {
//   res.json({ message: 'template message' })
// })

// router.put('/:contactId', async (req, res, next) => {
//   res.json({ message: 'template message' })
// })
