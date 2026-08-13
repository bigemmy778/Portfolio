import React from 'react';
import './About.css'
import profile from "../../assets/Home/Felz.jpg";
import { motion } from "framer-motion";

// data for the highlights
const highlights = [
    "Responsive Frontend Development",
    "React & Next.js Applications",
    "JavaScript (ES6+) & TypeScript",
    "Redux Toolkit State Management",
    "REST API & Backend Integration",
    "Git & GitHub Collaboration",
    "Tracking activities & Perfomance",
];


function About() {
    return (
        < motion.section
        id="about"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.1 }}
       className="about">
            <div className="section-title">
                <h2>About Me</h2>
                <span>Why Choose Me?</span>
                <div className="title-line">
                    <span></span>
                </div>
            </div>

            <div className="about-card">
                <div className="about-image">
                    <img src={profile} alt="Profile" />
                </div>

                <div className="about-content">
                    <p>
                        I'm a passionate Frontend Developer specializing in React,
                        Next.js and modern JavaScript. I enjoy transforming UI designs
                        into fast, responsive and accessible web applications with clean
                        code and attention to detail.
                    </p>

                    <h3>Here are a Few Highlights:</h3>

                    <ul>
                        {highlights.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>

                    <div className="about-buttons">
                        <button className="hire-btn">
                            Hire Me
                        </button>

                        <a href="/resume.pdf" download>
                            <button className="resume-btn">
                                Get Resume
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            </motion.section>
    );
}

export default About