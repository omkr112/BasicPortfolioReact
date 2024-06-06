import React from 'react';

const Contact = () => {
  return (
    <section className="contact-section"> {/* Add the class to the section */}
      <h2>Contact</h2>
      <p>Contact me for any Inquiries</p>
      <form className="contact-form"> {/* Add the class to the form */}
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" />
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
