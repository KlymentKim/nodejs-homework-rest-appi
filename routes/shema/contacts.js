const Joi = require("joi");
const contactsSheman = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.number().required(),
});
