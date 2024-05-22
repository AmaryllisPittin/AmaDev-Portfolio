require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
  const { name, email, but, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  });
  

  const mailOptions = {
    from: email,
    to: 'amaryllispittin@gmail.com',
    subject: but,
    text: `Nom: ${name}\n\nE-mail: ${email}\n\nMessage: ${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Une erreur est survenue lors de l\'envoi du message.');
    } else {
      console.log('Email envoyé: ' + info.response);
      res.send('Message envoyé avec succès.');
    }
  });
});

app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});

