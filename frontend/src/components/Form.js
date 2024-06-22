import React, { useState } from 'react';
import axios from 'axios';
import './Formstyles.css';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/send', formData);
      alert('Message sent successfully');
    } catch (error) {
      console.error('There was an error sending the email:', error);
      alert('Failed to send message');
    }
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label>Your Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        <label>Subject</label>
        <input type="text" name="subject" value={formData.subject} onChange={handleChange} required />
        <label>Message</label>
        <textarea rows="6" name="message" placeholder="Type your message here" value={formData.message} onChange={handleChange} required />
        <button className="btn" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
