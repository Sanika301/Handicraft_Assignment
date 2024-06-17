import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Footer from './Footer';
import Header from './Header';
import './Contact.css';

export const Contact = () => {
  const form = useRef();
  const [formValues, setFormValues] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const validateForm = () => {
    const { user_name, user_email, message } = formValues;
    const newErrors = {};

    if (!user_name.trim()) {
      newErrors.name = 'Name is required';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!user_email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(user_email.trim())) {
      newErrors.email = 'Invalid email address';
    }

    if (!message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    emailjs
      .sendForm('service_j184ma7', 'template_h2tj769', form.current, {
        publicKey: 'JIFpmpxwXtZQbplis',
      })
      .then(
        () => {
          setSuccessMessage('Your message has been sent successfully!');
          setFormValues({
            user_name: '',
            user_email: '',
            message: ''
          });
          setErrors({});
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div>
      <Header />
      <div className='contact'>
        <form className='form' ref={form} onSubmit={sendEmail}>
          <div className='form-sect'>
            <label>Name</label>
            <input
              className='form-input'
              type="text"
              name="user_name"
              value={formValues.user_name}
              onChange={handleInputChange}
            />
            {errors.name && <p className='error-message'>{errors.name}</p>}
          </div>
          <div className='form-sect'>
            <label>Email</label>
            <input
              className='form-input'
              type="email"
              name="user_email"
              value={formValues.user_email}
              onChange={handleInputChange}
            />
            {errors.email && <p className='error-message'>{errors.email}</p>}
          </div>
          <div className='form-sect'>
            <label>Message</label>
            <textarea
              className='form-input'
              name="message"
              rows={5}
              cols={8}
              value={formValues.message}
              onChange={handleInputChange}
            />
            {errors.message && <p className='error-message'>{errors.message}</p>}
          </div>
          <div className='form-sect'>
            <input className='btn' type="submit" value="Send" />
          </div>
        </form>
        {successMessage && <p className='success-message'>{successMessage}</p>}
      </div>
      <div className='contact-desc'>
        <h1 className='about-title'>Join Our Community</h1>
        <p className='about-sub-desc'>Sign up for our newsletter to receive updates on new arrivals, exclusive offers, and behind-the-scenes stories from our artisans. Follow us on social media to stay connected and be inspired by the creativity of our community.</p>
      </div>
      <div className='contact-desc'>
        <h1 className='about-title'>Thank You for Visiting</h1>
        <p className='about-sub-desc'>We are thrilled to share our love for handmade crafts with you. Enjoy exploring our collection and finding the perfect pieces that speak to you.</p>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
