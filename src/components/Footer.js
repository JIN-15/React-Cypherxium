import './Footer.scss';
import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaGithub, FaDiscord } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { motion } from 'framer-motion';

const easeing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
    initial: {
        y: 60,
        opacity: 0,
        transition: {
            duration: 0.6, ease: easeing
        }
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6, ease: easeing
        }
    }
};


const Footer = () => {

    return (
        <motion.footer className='footer' initial='initial' animate='animate'>
            <motion.div className='footer_content' variants={fadeInUp}>
                <div className='footer_logo'>
                    <em className='logo'>cypher</em><span>xium</span>
                </div>
                <div className='footer_links'>
                    <a href='#home' className='footer_link footer2'>Home</a>
                    <a href='#about' className='footer_link footer2'>About</a>
                    <a href='#services' className='footer_link footer2'>Services</a>
                    <a href='#contact' className='footer_link footer2'>Contact</a>
                </div>
                <div className='footer_social'>
                    <IconContext.Provider value={{ color: "#fff", size: "20px" }}>
                        <a href='https://www.facebook.com/profile.php?id=100037185180713' className='social_icon' target='_blank' rel='noopener noreferrer'>
                            <FaFacebookF />
                        </a>
                        <a href='https://x.com/AliHass76361768' className='social_icon' target='_blank' rel='noopener noreferrer'>
                            <FaTwitter />
                        </a>
                        <a href='https://www.linkedin.com/in/ali-hassan-08b306226' className='social_icon' target='_blank' rel='noopener noreferrer'>
                            <FaLinkedinIn />
                        </a>
                        <a href='https://www.instagram.com/i_alihassan_15/' className='social_icon' target='_blank' rel='noopener noreferrer'>
                            <FaInstagram />
                        </a>
                        <a href='https://github.com/jin-15' className='social_icon' target='_blank' rel='noopener noreferrer'>
                            <FaGithub />
                        </a>
                        <a href='https://discord.com/users/jin_k15' className='social_icon' target='_blank' rel='noopener noreferrer'>
                            <FaDiscord />
                        </a>

                    </IconContext.Provider>
                </div>
                <div className='footer_newsletter'>
                    <h3>Subscribe:</h3>
                    <div className='newsletter_form'>
                        <input type='email' placeholder='Enter your email' />
                        <button type="submit" className="btn_footer">Subscribe</button>
                    </div>
                </div>
            </motion.div>
            <motion.div className='footer_bottom' variants={fadeInUp}>
                <div className='footer_bottom_left'>
                    <a href='#privacy' className='footer2'>Privacy Policy</a>
                    <a href='#contact' className='footer2'>Contact Us</a>
                </div>
                <div className='footer_bottom_right'>
                    <p>&copy; {new Date().getFullYear()} CypherXium. All rights reserved.</p>
                    <p className='footer_name'>&copy; By Ali Hassan Software Engineer.</p>
                </div>
            </motion.div>
            <motion.div className='footer_bottom'>
                <a href="#top" class="back-to-top">Back to Top</a>
            </motion.div>
        </motion.footer>

    );
}

export default Footer;