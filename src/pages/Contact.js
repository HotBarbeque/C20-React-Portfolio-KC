import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => {
  const validateForm = (event) => {
    event.preventDefault();

    const emailInput = document.getElementById("email");
    const emailValue = emailInput.value;

    if (!emailInput.checkValidity()) {
      const errorElement = document.createElement("p");
      errorElement.className = "error";
      errorElement.textContent = "Please enter a valid email address.";
      emailInput.insertAdjacentElement("afterend", errorElement);
      emailInput.focus();
    } else {
      // Form submission logic here
      console.log("Form submitted!");
    }
  };

  return (
    <Main
      title="Contact"
      description="Contact Kyle Curry via email @ kyry.curry@gmail.com"
    >
      <article className="post" id="contact">
        <header>
          <div className="title">
            <h2>
              <Link to="/contact">Contact</Link>
            </h2>
          </div>
        </header>
        <div className="email-at">
          <p>Feel free to get in touch. You can email me at:</p>
          <p>kyry.curry@gmail.com</p>
        </div>
        <div>
          <h3>Contact Form</h3>
          <form onSubmit={validateForm}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <br />

            <label htmlFor="email">Email Address:</label>
            <input type="email" id="email" name="email" required />

            <br />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="5" required></textarea>

            <br />

            <input type="submit" value="Submit" />
          </form>
        </div>
        <ContactIcons />
      </article>
    </Main>
  );
};

export default Contact;