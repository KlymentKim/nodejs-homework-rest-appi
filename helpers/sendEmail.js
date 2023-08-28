const dotenv = require("dotenv");
dotenv.config();
const { SENDGRID_API_KEY } = process.env;

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async (data) => {
  const mail = { ...data, from: "kim.kliment.kr@gmail.com" };
  try {
    sgMail.send(mail);
    return true;
  } catch (error) {
    throw error;
  }
};

module.exports = sendEmail;


