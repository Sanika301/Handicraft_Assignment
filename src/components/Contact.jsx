import {React,useRef} from 'react'
import emailjs from '@emailjs/browser';
import Footer from './Footer'
import Header from './Header'
import './Contact.css'

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_j184ma7', 'template_h2tj769', form.current, {
        publicKey: 'JIFpmpxwXtZQbplis',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div>
      <Header/>
      <div className='contact'>
      <form className='form' ref={form} onSubmit={sendEmail}>
        <div className='form-sect'>
        <label>Name</label>
        <input className='form-input' type="text" name="user_name" />
        </div>
        <div className='form-sect'>
        <label>Email</label>
        <input className='form-input' type="email" name="user_email" />
        </div>
        <div className='form-sect'>
           <label>Message</label>
           <textarea className='form-input' name="message" />
        </div>
     <div className='form-sect'>
     <input className='btn' type="submit" value="Send" />
     </div>
      </form>
      </div>
      <div className='contact-desc'>
      <h1 className='about-title'>Join Our Community</h1>
      <p className='about-sub-desc'>Sign up for our newsletter to receive updates on new arrivals, exclusive offers, and behind-the-scenes stories from our artisans. Follow us on social media to stay connected and be inspired by the creativity of our community.</p>
      </div>
      <div className='contact-desc'>
      <h1 className='about-title'>Thank You for Visiting</h1>
      <p className='about-sub-desc'>We are thrilled to share our love for handmade crafts with you. Enjoy exploring our collection and finding the perfect pieces that speak to you.</p>
      </div>
      <Footer/>
    </div>
  );
};


export default Contact