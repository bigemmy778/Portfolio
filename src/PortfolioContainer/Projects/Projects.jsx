import { projects } from "./ProjectData";
import "./Projects.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

 function Projects() {

    return (

        <motion.section
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.1 }} 
         className="projects" id="projects">

            <div className="section-heading">

                <h2>Projects</h2>

                <p>Some Things I've Built</p>

                <div className="heading-line">
                    <span></span>
                </div>

            </div>

            <Swiper
                spaceBetween={30}
                modules={[Navigation, Pagination, Mousewheel]}
                slidesPerView={4}
                loop={true}
                grabCursor={true}
                simulateTouch={true}
                allowTouchMove={true}
                pagination={{ clickable: true }}
                breakpoints={{

                    320: {
                        slidesPerView: 1,
                    },

                    768: {
                        slidesPerView: 2,
                    },

                    1200: {
                        slidesPerView: 3,
                    }

                }}

            >

                {
                    projects.map(project => (

                        <SwiperSlide key={project.id}>

                            <div className="project-card">

                                <div className="project-image">

                                    <img src={project.image} alt={project.title} />

                                </div>

                                <div className="project-info">

                                    <h3>{project.title}</h3>

                                    <p>{project.description}</p>

                                    <div className="project-buttons">

                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noreferrer"
                                        >

                                            <button className="live-btn">

                                                Go Live

                                            </button>

                                        </a>

                                        <a
                                            href={project.github}
                                            target="_blank "
                                            rel="noreferrer"
                                        >

                                            <button className="github-btn">

                                                GitHub

                                            </button>

                                        </a>

                                    </div>

                                </div>

                            </div>

                        </SwiperSlide>

                    ))
                }

            </Swiper>

        </motion.section>

    )

}


export default Projects