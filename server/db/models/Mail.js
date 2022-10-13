const Sequelize = require("sequelize");
const db = require("../db");

const SALT_ROUNDS = 5;

const Mail = db.define("mail", {
  encodedMail: {
    type: Sequelize.JSON
},
  subject: {
    type: Sequelize.STRING
  },
  sendTo: {
    type: Sequelize.STRING
  }
});

module.exports = Mail;
