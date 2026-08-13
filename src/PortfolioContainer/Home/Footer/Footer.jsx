import React from 'react'
import './Footer.css'
import footerShape from '../../../assets/Home/shape-bg.png';

function Footer() {
    console.log(footerShape)
    return (
        <div className='footer-container'>
            <div className='footer-parent'>
                <div className="wave">
                    <svg
                        viewBox="0 0 1440 320"
                        preserveAspectRatio="none"
                    >
                        <path
                            fill="#f8f9fc"
                            d="M0,224L80,245.3C160,267,320,309,480,309.3C640,309,800,267,960,245.3C1120,224,1280,224,1360,224L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                        />
                    </svg>
                </div>

            </div>
        </div>
    )
}

export default Footer