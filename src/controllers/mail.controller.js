const { transporter } = require('../config/nodemailer.config');

const mailController = {

  async send(req, res) {
    try {
      const {
        subject, to, template, dataTemplate,
      } = req.body;

      const mailOptions = {
        from: process.env.EMAIL,
        to,
        subject,
        template,
        context: { ...dataTemplate },
      };

      const info = await transporter.sendMail(mailOptions);
      return res.status(200).json({ message: 'Email enviado com sucesso!', info });
    } catch (error) {
      return res.status(500).json(error);
    }
  },

};

module.exports = mailController;
