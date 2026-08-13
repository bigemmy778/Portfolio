import React from "react";
import { SiGmail } from "react-icons/si";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

// Import your contact image
import contactImage from "../../assets/image/Contact.jpg";

function ContactInfo() {
  return (
    // Left side of the contact section
    <div className="contact-info">

      {/* Main Heading */}
      <h2>
        Get In Touch <span>👋</span>
      </h2>

      {/* Short introduction */}
      <p className="contact-text">
        Have a project in mind or looking for a frontend developer?
        I'd love to hear from you. Feel free to reach out through
        any of my social platforms or simply send me a message using
        the contact form.
      </p>

      {/* Social Icons */}
      <div className="contact-socials">

        <a
          href="https://www.facebook.com/emmanuel.adekoya.9634"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookF />
        </a>

        <a
          href="https://github.com/bigemmy778?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="mailto:yourname@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
      <SiGmail color="" size={22} />
        </a>

        <a
          href="https://www.instagram.com/felz_zx/?hl=en"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </a>

        <a
          href="https://wa.me/2349155011860"
          target="_blank"
          rel="noreferrer"
        >
          <FaWhatsapp />
        </a>

      </div>

      {/* Decorative Image */}
      <div className="contact-image">

        <img
          src={contactImage}
          alt="Contact Illustration"
        />

      </div>

    </div>
  );
}

export default ContactInfo;