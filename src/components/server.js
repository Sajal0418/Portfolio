const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USERNAME, // Your Gmail email address
    pass: process.env.EMAIL_PASSWORD // Your Gmail password or app-specific password
  }
});

// POST endpoint for sending email
app.post('/send-email', async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USERNAME,
      to: 'sajaljaisw9@gmail.com', // Receiver's email address (can also be dynamic based on form input)
      subject: subject,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    // Send email
    await transporter.sendMail(mailOptions);
    console.log('Email sent:', mailOptions);
    res.sendStatus(200); // Send success response to the client
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error sending email. Please try again later.'); // Send error response to the client
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
