import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import './Profile.css';

function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                            {/* bootstrap icons */}
                        <a href='https://www.facebook.com/emmanuel.adekoya.9634'>
                            <i className='fa fa-facebook-square'></i>
                        </a>
                        <a href="mailto:yourname@gmail.com"
                        >
                            <i className='fa fa-google-plus-square'></i>
                        </a>
                        <a href='https://www.instagram.com/felz_zx/?hl=en'>
                            <i className='fa fa-instagram'></i>
                        </a>
                        <a href='https://wa.me/2349155011860"
                            target="_blank"
                            rel="noopener noreferrer'>
                            <i className='fa fa-whatsapp'></i>
                        </a>
                        </div>
                    </div>


                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {" "}
                            Hello, I'm <span className='highlighted-text'>Obaoluwafela</span>
                        </span>
                    </div>
                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            {" "}
                            <h1>
                                {""}
                                <TypeAnimation
                                    sequence={[
                                        'Ethusiastic Dev 😁',
                                        1000,
                                        'Frontend Developer 💻',
                                        1000,
                                        'React Developer 📲',
                                        1000,
                                        'Next.js Developer 🌐',
                                        1000,
                                        'Full-stack Developer 🔜',
                                        1000,
                                    ]}
                                    speed={50}
                                    repeat={Infinity}
                                />
                            </h1>
                            <span className='profile-role-tagline'>
                                Knack of building applications with front and back end operations.
                            </span>
                        </span>
                    </div>
                    <div className='profile-options'>
                        <button className='btn primary-btn'>
                            {""}
                            Hire Me {" "}
                        </button>

                        <a href='FelaCv.pdf' download='FelaCv.pdf'>
                            <button className='btn highlighted-btn'>
                                Get Resume
                            </button>
                        </a>
                    </div>
                </div>
                <div className='profile-picture'>

                    <div className='profile-picture-background'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile