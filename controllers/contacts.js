const contactsOptions = require("../../nodejs-homework-rest-appi/models/contacts");
const { contactsSchema } = require("../../nodejs-homework-rest-appi/schemas");

// POST request
const addContact = async (req, res, next) => {
  try {
    const { error } = contactSchema.validate(req.body);
    if (error) {
      res.status(400).json({
        status: "error",
        code: 400,
        message: "missing required name field",
      });
      return;
    }
    const newContact = await contactsOperations.addContact(req.body);
    res.status(201).json({
      status: "success",
      code: 201,
      data: { result: newContact },
    });
  } catch (error) {
    next(error);
  }
};

// GET request
const getAllContacts = async (req, res, next) => {
  try {
    const contacts = await contactsOperations.listContacts();
    res.json({
      status: "success",
      code: 200,
      data: { result: contacts },
    });
  } catch (error) {
    next(error);
  }
};

//GetId
const getByIdContact = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const contact = await contactsOperations.getContactById(contactId);
    if (!contact) {
      res.status(404).json({
        status: "error",
        code: 404,
        message: "Not found",
      });
      return;
    }
    res.json({
      status: "success",
      code: 200,
      data: { result: contact },
    });
  } catch (error) {
    next(error);
  }
};

const updateByIdContact = async (req, res, next) => {
  try {
    const { error } = contactSchema.validate(req.body);
    if (error) {
      res.status(400).json({
        status: "error",
        code: 400,
        message: "missing fields",
      });
      return;
    }
    const { contactId } = req.params;
    const updatedContact = await contactsOperations.updateContact(
      contactId,
      req.body
    );
    if (!updatedContact) {
      res.status(404).json({
        status: "error",
        code: 404,
        message: "Not found",
      });
      return;
    }
    res.json({
      status: "success",
      code: 200,
      data: { result: updatedContact },
    });
  } catch (error) {
    next(error);
  }
};

//delete contact by ID
const removeByIdContact = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const removedContact = await contactsOperations.removeContact(contactId);
    if (!removedContact) {
      res.status(404).json({
        status: "error",
        code: 404,
        message: "Not found",
      });
      return;
    }
    res.json({
      status: "success",
      code: 200,
      message: "contact deleted",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllContacts,
  getByIdContact,
  addContact,
  updateByIdContact,
  removeByIdContact,
};
