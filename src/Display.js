import './Display.scss';
import React from 'react';
import { FaBehance, FaDribbble } from 'react-icons/fa';
import { IoMailOutline, IoChevronForwardCircle, IoStar } from 'react-icons/io5';
import { IconContext } from 'react-icons';
import Card from './components/card';
import { motion } from 'framer-motion';
import Footer from './components/Footer';
import { Link } from 'react-router-dom';

let easeing = [0.6, -0.05, 0.01, 0.99];

const stagger = {
    animate: {
        transition: {
            delayChildren: 0.2,
            staggerChildren: 0.1,
            staggerDirection: 1
        }
    }
}

const fadInUp = {
    initial: {
        y: -60,
        opacity: 0,
        transition: {
            duration: 0.5, ease: easeing
        }
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            delay: 0.4,
            ease: easeing
        }
    }
};

const transition = { duration: 0.9, ease: [0.6, 0.01, -0.05, 0.9] };

const firstName = {
    initial: {
        y: -20,
    },
    animate: {
        y: 0,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.03,
            staggerDirection: -1
        }
    }
}

const lastName = {
    initial: {
        y: -20,
    },
    animate: {
        y: 0,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.03,
            staggerDirection: 1
        }
    }
}

const letter = {
    initial: {
        y: 400,
    },
    animate: {
        y: 0,
        transition: {
            duration: 0.9,
            ...transition
        }
    }
}

const btnGroup = {
    initial: {
        y: -60,
        opacity: 0,
        transition: { duration: 0.5, ease: easeing }
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: easeing
        }
    }
};

const star = {
    initial: {
        y: 60,
        opacity: 0,
        transition: { duration: 0.7, ease: easeing }
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: easeing
        }
    }
};

const header = {
    initial: {
        y: -60,
        opacity: 0,
        transition: { duration: 0.04, ease: easeing }
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: easeing
        }
    }
};

function Display() {


    return (
        <motion.div initial='initial' animate='animate'>
            <motion.header variants={stagger}>
                <motion.div className='logo_wrapper menu2' variants={header}><em className='logo'>cypher</em><span>xium</span></motion.div>
                <motion.div className='menu_container' variants={stagger}>
                    <motion.span className='header_align' variants={header}>
                        <IconContext.Provider value={{ color: "rgb(43, 6, 60)", size: "24px", className: "icons_container" }}>
                            <div className='icon menu2'><FaBehance /></div>
                            <div className='icon menu2'><FaDribbble /></div>
                        </IconContext.Provider>
                    </motion.span>
                    <motion.span className='header_align' variants={header}>
                        <IconContext.Provider value={{ color: "rgb(43, 6, 60)", size: "26px", fontWeight: "10px" }}>
                            <div className='icon menu2'><IoMailOutline /></div>
                            <em className='mail_header menu2'>cypherxium@example.com</em>
                        </IconContext.Provider>
                    </motion.span>
                    <motion.span className='header_align' variants={header}>
                        <IconContext.Provider value={{ color: "rgb(43, 6, 60)", size: "26px", fontWeight: "10px" }}>
                        <Link to="/signin" className='sign_header menu2'>SignIn</Link>
                        </IconContext.Provider>
                    </motion.span>
                    <motion.span className='menu header_align_menu' variants={header}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </motion.span>
                </motion.div>
            </motion.header>

            <motion.div className='content_wrapper' initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3, ease: easeing }}>
                <div className='left_content_wrapper'>
                    <motion.h2>

                        <motion.span variants={firstName} initial="initial" animate="animate" className='first'>
                            <motion.span variants={letter}>D</motion.span>
                            <motion.span variants={letter}>e</motion.span>
                            <motion.span variants={letter}>s</motion.span>
                            <motion.span variants={letter}>i</motion.span>
                            <motion.span variants={letter}>g</motion.span>
                            <motion.span variants={letter}>n</motion.span>
                            <motion.span variants={letter} className='second'>F</motion.span>
                            <motion.span variants={letter}>o</motion.span>
                            <motion.span variants={letter}>c</motion.span>
                            <motion.span variants={letter}>u</motion.span>
                            <motion.span variants={letter}>s</motion.span>
                            <motion.span variants={letter}>e</motion.span>
                            <motion.span variants={letter}>d</motion.span>
                        </motion.span>

                        <motion.span variants={lastName} initial="initial" animate="animate" className='last'>
                            <motion.span variants={letter}>S</motion.span>
                            <motion.span variants={letter}>t</motion.span>
                            <motion.span variants={letter}>a</motion.span>
                            <motion.span variants={letter}>r</motion.span>
                            <motion.span variants={letter}>t</motion.span>
                            <motion.span variants={letter}>U</motion.span>
                            <motion.span variants={letter}>p,</motion.span>
                            <motion.span variants={letter} className='second'>F</motion.span>
                            <motion.span variants={letter}>o</motion.span>
                            <motion.span variants={letter}>r</motion.span>
                            <motion.span variants={letter} className='second'>S</motion.span>
                            <motion.span variants={letter}>t</motion.span>
                            <motion.span variants={letter}>a</motion.span>
                            <motion.span variants={letter}>r</motion.span>
                            <motion.span variants={letter}>t</motion.span>
                            <motion.span variants={letter}>U</motion.span>
                            <motion.span variants={letter}>p</motion.span>
                            <motion.span variants={letter}>s.</motion.span>
                        </motion.span>
                    </motion.h2>
                    <motion.p variants={fadInUp}>When, while lovely valley teems with vapor around meand <br /> meridian sun strikes the upper impenetrable.</motion.p>


                    <motion.div className='btn_group' variants={stagger}>
                        <motion.div className='btn btn_primary' variants={btnGroup} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Hire Me
                            <IconContext.Provider value={{ color: "#14da8f", size: "18px" }}>
                                <IoChevronForwardCircle />
                            </IconContext.Provider>
                        </motion.div>
                        <motion.div className='btn btn_secondary' variants={btnGroup} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Live Chat</motion.div>
                    </motion.div>


                    <motion.div className='review_container' variants={stagger}>
                        <motion.p className='total_review' variants={star}>64+ Reviews</motion.p>
                        <IconContext.Provider value={{ color: "#14da8f", size: "18px" }}>
                            <motion.span variants={star} whileHover={{ scale: 1.2, rotate: 180, borderRadius: '100%', cursor: 'pointer' }}><IoStar /></motion.span>
                            <motion.span variants={star} whileHover={{ scale: 1.2, rotate: 180, borderRadius: '100%', cursor: 'pointer' }}><IoStar /></motion.span>
                            <motion.span variants={star} whileHover={{ scale: 1.2, rotate: 180, borderRadius: '100%', cursor: 'pointer' }}><IoStar /></motion.span>
                            <motion.span variants={star} whileHover={{ scale: 1.2, rotate: 180, borderRadius: '100%', cursor: 'pointer' }}><IoStar /></motion.span>
                            <motion.span variants={star} whileHover={{ scale: 1.2, rotate: 180, borderRadius: '100%', cursor: 'pointer' }}><IoStar /></motion.span>
                            <motion.span variants={star} whileHover={{ scale: 1.2, rotate: 180, borderRadius: '100%', cursor: 'pointer' }}><IoStar /></motion.span>
                        </IconContext.Provider>

                        <motion.p className='more_Review' variants={star}>More Than 50+ people taking Services</motion.p>
                    </motion.div>

                </div>

                <motion.div className='right_content_wrapper home_img'>
                    <motion.img src={`${process.env.PUBLIC_URL}/images/1-bg.png`} alt='bg' initial={{ x: 200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: .5, delay: 0.8 }} />
                </motion.div>
            </motion.div>


            <Card />

            <Footer />
        </motion.div>
    );
}

export default Display;