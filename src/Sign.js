import './App.css';
import styled from "styled-components";
import { AccountBox } from './components/accountBox';
import './Display.scss';
import React from 'react';
import { FaBehance, FaDribbble } from 'react-icons/fa';
import { IoMailOutline } from 'react-icons/io5';
import { IconContext } from 'react-icons';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Display.scss';
import Footer from './components/Footer';


const MainSignDisplay = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
  width: 100%;
    background: rgba(113,89,142,1);
    background: linear-gradient(90deg, rgba(113,89,142,1) 0%, rgba(175,173,196,1)  100%);
`;

const AppContainer = styled.div`
  // padding-top: 100px;
  width: 100%;
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
`;

let easeing = [0.6, -0.05, 0.01, 0.99];

const stagger = {
    animate: {
        transition: {
            delayChildren: 0.2,
            staggerChildren: 0.1,
            staggerDirection: 1
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

function Sign() {
    return (
        <MainSignDisplay>
            <motion.div initial='initial' animate='animate'>
                <motion.header variants={stagger}>
                    <motion.div className='logo_wrapper' variants={header}><Link to="/" className='menu2'><em className='logo'>cypher</em><span>xium</span></Link></motion.div>
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
                        <motion.span className='menu header_align_menu' variants={header}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </motion.span>
                    </motion.div>
                </motion.header>
            </motion.div>
            <motion.div initial={{ x: 200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: .5, delay: 0.8 }}>
                <AppContainer>
                    <AccountBox />
                </AppContainer>
            </motion.div>
            <Footer />
        </MainSignDisplay>
    );
}

export default Sign;
