import React from "react";
import "./Pages.css";
const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>
        We'd love to hear from you! Please use the form below to get in touch
        with us.
      </p>

      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Your message"
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-btn">
          Send Message
        </button>
      </form>

      <div className="contact-info">
        <h3>Other Ways to Reach Us</h3>
        <p>
          <strong>Email:</strong> info@techvoyage.com
        </p>
        <p>
          <strong>Phone:</strong> (123) 456-7890
        </p>
        <p>
          <strong>Address:</strong> 123 Tech Street, Silicon Valley, CA 94043
        </p>
      </div>
    </div>
  );
};

export default Contact;
