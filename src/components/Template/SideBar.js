import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.png`} alt="" />
      </Link>
      <header>
        <h2>Kyle Curry</h2>
        <p>
          <a href="mailto:kyry.curry@gmail.com">kyry.curry@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      {/* <h2>About</h2>
      <p>Hi, I&apos;m Kyle.</p>
      <p>My background is in the hospitality industry.
          I&apos;m a Full Stack Developer who is ready to work together and work hard.
      </p> */}
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Kyle Curry 2023.</p>
    </section>
  </section>
);

export default SideBar;
