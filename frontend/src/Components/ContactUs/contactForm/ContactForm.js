import React, { useState } from 'react';
import '../ContactUs.css'

export default function ContactForm() {
  // State variables to store form values and errors
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({});

  // Function to handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to validate form fields
  const validateForm = () => {
    const errors = {};

    // Name validation
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }

    // Phone validation
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/i.test(formData.phone.trim())) {
      errors.phone = 'Please enter a valid 10-digit phone number';
    }

    // Email validation
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email.trim())) {
      errors.email = 'Please enter a valid email address';
    }

    // Message validation
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }

    setFormErrors(errors);

    // Return true if there are no errors, false otherwise
    return Object.keys(errors).length === 0;
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Submit form data
      console.log('Form submitted:', formData);
      // You can send the form data to your backend or perform other actions here
    }
  };

  return (
    <div className="contact-form-container">
        <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} className='form-container'>
        <div>
          <label htmlFor="name" className='label-for-input'>Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {formErrors.name && <span>{formErrors.name}</span>}
        </div>
        <div>
          <label htmlFor="phone"  className='label-for-input'>Phone</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          {formErrors.phone && <span>{formErrors.phone}</span>}
        </div>
        <div>
          <label htmlFor="email"  className='label-for-input'>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {formErrors.email && <span>{formErrors.email}</span>}
        </div>
        <div>
          <label htmlFor="message"  className='label-for-input'>Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {formErrors.message && <span>{formErrors.message}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
