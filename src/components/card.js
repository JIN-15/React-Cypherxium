import React from 'react'
import { IoMailOutline, IoChevronForward, IoApps, IoNotifications, IoPieChart, IoNewspaper, IoCard, IoColorFill } from 'react-icons/io5';
import { IconContext } from 'react-icons';
import { motion } from 'framer-motion';

const container = {
    show: {
        transition: {
            staggerChildren: 0.2
        }
    }
}

const item = {
    hidden: {
        opacity: 0,
        y: 50
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            ease: 'easeInOut',
            duration: .5
        }
    }
};

const hoverEffect = {
    whileHover: {
        scale: 1.5,
        rotate: 180,
        borderRadius: "60%"
    },
    whileTap: {
        scale: .8,
        rotate: 180,
        borderRadius: "60%"
    },
}

function Card() {
    return (
        <motion.div className='service_container'>
            <div className='title_wrapper'>
                <motion.span className='service_title'
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: .5, delay: 1.2 }}>
                    Our Services
                </motion.span>
                <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: .5, delay: 1 }}>
                    Save Time Managing Social Media
                    <br />For Your Business
                </motion.h2>
            </div>
            <motion.div className='service_card' variants={container} initial="hidden" exit="exit" whileInView="show" viewport={{once:false}}>
                <motion.div className='card' variants={item}>
                    <motion.span className='service_icon' style={{ backgroundColor: "#ddfbf9" }} variants={hoverEffect} whileHover="whileHover" whileTap="whileTap">
                        <IconContext.Provider value={{ color: "#14da8f", size: "22px" }}>
                            <IoMailOutline />
                        </IconContext.Provider>
                    </motion.span>
                    <h3>Ui/Ux Design <br />For Mobile & Web</h3>
                    <a href='www.example.com'>
                        <span>Learn More</span>
                        <IconContext.Provider value={{ color: "rgb(43, 6, 60)", size: "18px" }}>
                            <IoChevronForward />
                        </IconContext.Provider>
                    </a>
                </motion.div>

                <motion.div className='card' variants={item}>
                    <motion.span className='service_icon' style={{ backgroundColor: "#e7daf8" }} variants={hoverEffect} whileHover="whileHover" whileTap="whileTap">
                        <IconContext.Provider value={{ color: "#5700cf", size: "22px" }}>
                            <IoApps />
                        </IconContext.Provider>
                    </motion.span>
                    <h3>Web & Mobile <br />App Development</h3>
                    <a href='www.example.com'>
                        <span>Learn More</span>
                        <IconContext.Provider value={{ color: "rgb(43, 6, 60)", size: "18px" }}>
                            <IoChevronForward />
                        </IconContext.Provider>
                    </a>
                </motion.div>

                <motion.div className='card' variants={item}>
                    <motion.span className='service_icon' style={{ backgroundColor: "#ffede6" }} variants={hoverEffect} whileHover="whileHover" whileTap="whileTap">
                        <IconContext.Provider value={{ color: "#ff8559", size: "22px" }}>
                            <IoColorFill />
                        </IconContext.Provider>
                    </motion.span>
                    <h3>Illustration Design <br />Flat 3D & More</h3>
                    <a href='www.example.com'>
                        <span>Learn More</span>
                        <IconContext.Provider value={{ color: "rgb(43, 6, 60)", size: "18px" }}>
                            <IoChevronForward />
                        </IconContext.Provider>
                    </a>
                </motion.div>

                <motion.div className='card' variants={item}>
                    <motion.span className='service_icon' style={{ backgroundColor: "#ffe1e9" }} variants={hoverEffect} whileHover="whileHover" whileTap="whileTap">
                        <IconContext.Provider value={{ color: "#fa3970", size: "22px" }}>
                            <IoNewspaper />
                        </IconContext.Provider>
                    </motion.span>
                    <h3>Strategy & Product <br />Management</h3>
                    <a href='www.example.com'>
                        <span>Learn More</span>
                        <IconContext.Provider value={{ color: "rgb(43, 6, 60)", size: "18px" }}>
                            <IoChevronForward />
                        </IconContext.Provider>
                    </a>
                </motion.div>

                <motion.div className='card' variants={item}>
                    <motion.span className='service_icon' style={{ backgroundColor: "#dcedff" }} variants={hoverEffect} whileHover="whileHover" whileTap="whileTap">
                        <IconContext.Provider value={{ color: "#56a8f4", size: "22px" }}>
                            <IoPieChart />
                        </IconContext.Provider>
                    </motion.span>
                    <h3>Customer Wordpress <br />Design & Development</h3>
                    <a href='www.example.com'>
                        <span>Learn More</span>
                        <IconContext.Provider value={{ color: "rgb(43, 6, 60)", size: "18px" }}>
                            <IoChevronForward />
                        </IconContext.Provider>
                    </a>
                </motion.div>

                <motion.div className='card' variants={item}>
                    <motion.span className='service_icon' style={{ backgroundColor: "#dbf9ed" }} variants={hoverEffect} whileHover="whileHover" whileTap="whileTap">
                        <IconContext.Provider value={{ color: "rgb(43, 6, 60)", size: "22px" }}>
                            <IoCard />
                        </IconContext.Provider>
                    </motion.span>
                    <h3>Digital Marketing <br />& Management</h3>
                    <a href='www.example.com'>
                        <span>Learn More</span>
                        <IconContext.Provider value={{ color: "rgb(43, 6, 60)", size: "18px" }}>
                            <IoChevronForward />
                        </IconContext.Provider>
                    </a>
                </motion.div>

                <motion.div className='card' variants={item}>
                    <motion.span className='service_icon' style={{ backgroundColor: "#fffada" }} variants={hoverEffect} whileHover="whileHover" whileTap="whileTap">
                        <IconContext.Provider value={{ color: "#f1df11", size: "22px" }}>
                            <IoNotifications />
                        </IconContext.Provider>
                    </motion.span>
                    <h3>Branding Design <br />(Logo & Packaging)</h3>
                    <a href='www.example.com'>
                        <span>Learn More</span>
                        <IconContext.Provider value={{ color: "rgb(43, 6, 60)", size: "18px" }}>
                            <IoChevronForward />
                        </IconContext.Provider>
                    </a>
                </motion.div>

                <motion.div className='card dark' variants={item}>
                    <img src={`${process.env.PUBLIC_URL}/images/atom.png`} alt="line" className='line' variants={hoverEffect} whileHover="whileHover" whileTap="whileTap"/>
                    <h2>+ 4 <br />More...</h2>
                    <a href='www.example.com'>
                        <span>View More...</span>
                        <span className='service_icon' style={{ backgroundColor: "rgb(218, 217, 235)" }}>
                            <IconContext.Provider value={{ color: "rgb(43, 6, 60)", size: "28px" }}>
                                <IoChevronForward />
                            </IconContext.Provider>
                        </span>
                    </a>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Card;