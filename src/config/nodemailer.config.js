const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD_APPLICATION_GMAIL,
  },

});

transporter.use('compile', hbs({
  viewEngine: {
    partialsDir: 'src/views',
    layoutsDir: 'src/views',
    defaultLayout: false,
  },
  viewPath: 'src/views',
  extName: '.hbs',
}));

module.exports = { transporter };
