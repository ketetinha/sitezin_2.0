const sgMail = require("@sendgrid/mail");
const { getMaxListeners } = require("../models/user");
const {MAIL_API_KEY} = require("../API");

sgMail.setApiKey(MAIL_API_KEY);

const welcomeEmail = (destinatario, nome) => {
  sgMail.send({
    to: destinatario,
    from: "lcasasbessa@gmail.com",
    subject: "Bem vindo ao ... INFERNO PORRA",
    text: `Obrigado por se registrar, ${nome}. Estamos felizes de ter voce em nossa comunidade...`  
  });
}

/* welcomeEmail("lcasasbessa@gmail.com", "Ketetinha"); */

module.exports = {
  welcomeEmail,
}