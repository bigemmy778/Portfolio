// This component will simply bring the two sections together:
// Left side → Contact information
// Right side → Contact form

import React from "react";
import "./Contact.css";

// Import the left side component
import ContactInfo from "./ContactInfo";

// Import the right side form
import ContactForm from "./ContactForm";

// import arrow
import { HiArrowUp } from "react-icons/hi";

// import framer motion
import { motion } from "framer-motion";

function Contact() {
  return (
    // Main contact section
    <motion.section
    initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: false, amount: 0.1 }}  
    className="contact" id="contact">

      {/* Section Heading */}
      <div className="section-heading">

        <h2>Contact Me</h2>

        <p>Let's Keep In Touch</p>

        {/* Orange line underneath the heading */}
        <div className="heading-line">
          <span></span>
        </div>

      </div>

      {/* Container that holds the two columns */}
      <div className="contact-container">

        {/* Left Side */}
        <ContactInfo />

        {/* Right Side */}
        <ContactForm />

      </div>
      <div className="arrow-con">

      </div>
{/* Back To Top Button */}

<a
  href="#home"
  className="back-to-top"
  aria-label="Back to top"
>
  <HiArrowUp />
</a>
    </motion.section>
  );
}

export default Contact;