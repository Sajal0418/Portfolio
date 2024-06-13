// Form.js

import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import "./Formstyles.css";

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        to_name: 'Receiver Name', // Replace with receiver's name or email
        subject: formData.subject,
        message_html: formData.message
      };

      await emailjs.send(
        'service_your_service_id', // Replace with your EmailJS service ID
        'template_your_template_id', // Replace with your EmailJS template ID
        templateParams,
        'user_your_user_id' // Replace with your EmailJS user ID
      );

      alert('Email sent successfully!');
      // Optionally, reset form fields after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email. Please try again later.');
    }
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label>Your Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label>Subject</label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
        <label>Message</label>
        <textarea
          rows="6"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Type your message here"
          required
        ></textarea>
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
