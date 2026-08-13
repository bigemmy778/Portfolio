import { useState } from "react";
import "./Resume.css";
import { resumeTabs } from "./ResumeData";
import { motion } from "framer-motion";

// the data displayed in skills section
const skills = [
  { name: "React", level: "80%" },
  { name: "Next.js", level: "70%" },
  { name: "JavaScript", level: "85%" },
  { name: "TypeScript", level: "82%" },
  { name: "Redux Toolkit", level: "65%" },
  { name: "Tailwind CSS", level: "85%" },
  { name: "Node.js", level: "75%" },
  { name: "MongoDB", level: "70%" },
  { name: "Express.js", level: "70%" },
  { name: "Vercel", level: "80%" },
];

function Resume() {
    // the state variable for the active row
  const [active, setActive] = useState(2);

  return (
    < motion.section
    initial={{ opacity: 0, y: 70 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: false, amount: 0.1 }} 
    className="resume" id="resume">

      <div className="resume-heading">
        <h2>Resume</h2>
        <span>My Formal Bio Details</span>

        <div className="heading-line">
          <span></span>
        </div>
      </div>

      <div className="resume-body">

        <aside className="resume-sidebar">

          <div
            className="slider"
            style={{
              transform: `translateY(${active * 72}px)`
            }}
          />

          {resumeTabs.map((tab) => (
            <div
              key={tab.id}
              className={`sidebar-item ${
                active === tab.id ? "active" : ""
              }`}
              onClick={() => setActive(tab.id)}
            >
              <span>{tab.icon}</span>

              <p>{tab.title}</p>
            </div>
          ))}
        </aside>

        <main className="resume-content">

          {active === 0 && (
            <div className="content-box">

              <h3>SSCE</h3>

              <small>2012 - 2018</small>

              <p>
                i am self taught dev. Being a self taught dev comes with having wealth of experiences (4years)

              </p>

            </div>
          )}

          {active === 1 && (
            <div className="content-box">

              <h3>Frontend Developer</h3>

              <small>Freelance</small>

              <p>
                Building responsive React &
                Next.js applications for clients.
              </p>
              
              <small>Freelance</small>
              <p>
                Tutor serious minded students who are just starting up their tech journey
              </p>

            </div>
          )}

          {active === 2 && (

            <div className="skills-grid">

              {skills.map((skill) => (

                <div className="skill" key={skill.name}>

                  <div className="skill-header">

                    <span>{skill.name}</span>

                    <span>{skill.level}</span>

                  </div>

                  <div className="progress">

                    <div
                      className="progress-fill"
                      style={{ width: skill.level }}
                    />

                  </div>

                </div>

              ))}

            </div>

          )}

          {active === 3 && (

            <div className="content-box">

              <h3>Projects</h3>

              <ul>
                <li>Event Booking Platform</li>
                <li>Personal Portfolio</li>
                <li>E-commerce UI</li>
                <li>Restaurant Landing Page</li>
              </ul>

            </div>

          )}

          {active === 4 && (

            <div className="content-box">

              <h3>Interests</h3>

              <p>
                UI Design • Open Source • Reading •
                Music • Football • Problem Solving
              </p>

            </div>

          )}

        </main>

      </div>

    </motion.section>
  );
}

export default Resume