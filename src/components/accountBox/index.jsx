import React, { useState } from "react";
import styled from "styled-components";
import { LoginForm } from "./login";
import { motion } from "framer-motion";
import { AccountContext } from "./accountContext";
import { SignupForm } from "./signup";

const BoxContainer = styled.div`
  width: 520px;
  min-height: 700px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background: rgb(175,173,196);
  background: linear-gradient(90deg, rgba(175,173,196,1) 0%, rgba(113,89,142,1) 100%);
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
`; 

const TopContainer = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 7em;
`;

const BackDrop = styled(motion.div)`
  width: 200%;
  height: 550px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  transform: rotate(60deg);
    top: -300px;
    left: -220px;
  background: rgb(43,6,60);
  background: linear-gradient(90deg, rgba(43,6,60,1) 43%, rgba(59,14,111,1) 75%);
`;

const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
`;

const HeaderText = styled.h2`
    font-size: 40px;
    font-weight: 600;
    color: #fff;
    z-index: 10;
    margin: 0;
`;

const SmallText = styled.h5`
    color: #fff; 
    font-weight: 500;
    font-size: 28px;
    z-index: 10;
    letter-spacing: 0.08em;
    margin: 0;
    margin-top: 15px;
    margin-right: 25px;
    margin-bottom: 15px;
    font-family: "Dancing Script", cursive;
`;

const backdropVariants = {
    expanded: {
        width: "230%",
        height: "1250px",
        borderRadius: "20%",
        transform: "rotate(60deg)"
    },
    collapsed: {
        width: "200%",
        height: "550px",
        borderRadius: "50%",
        transform: "rotate(150deg)"
    }
}

const expandingTransition = {
    type: "spring",
    duration: 2.3,
    stifness: 30,
}

const InnerContainer = styled.div`
    width: 100%;
    display: flex;
    padding: 0 3.0em;
    flex-direction: column;
`;


export function AccountBox(props) {
    const [isExpanded, setExpanded] = useState(false);
    const [active, setActive] = useState("signin");

    const playExpandingAnimation = () => {
        setExpanded(true);
        setTimeout(() => {
            setExpanded(false);
        }, expandingTransition.duration * 1000 - 1500);
    }

    const switchToSignup = () => {
        playExpandingAnimation();
        setTimeout(() => {
            setActive("signup");
        }, 400);
    }

    const switchToSignin = () => {
        playExpandingAnimation();
        setTimeout(() => {
            setActive("signin");
        }, 400);
    }

    const contextValue = { switchToSignup, switchToSignin };

    return (
        <AccountContext.Provider value={contextValue}>
            <BoxContainer>
                <TopContainer>
                    <BackDrop initial={false} animate={isExpanded ? "expanded" : "collapsed"} variants={backdropVariants} transition={expandingTransition} />
                    {active === "signin" && <HeaderContainer>
                        <HeaderText>Welcome</HeaderText>
                        <HeaderText>Back</HeaderText>
                        <SmallText>Please Sign-In to Continue!</SmallText>
                    </HeaderContainer>}
                    {active === "signup" && <HeaderContainer>
                        <HeaderText>Create</HeaderText>
                        <HeaderText>Account</HeaderText>
                        <SmallText>Please Sign-Up to Continue!</SmallText>
                    </HeaderContainer>}
                </TopContainer>
                <InnerContainer>
                    {active === "signin" && <LoginForm/>}
                    {active === "signup" && <SignupForm/>}
                </InnerContainer>
            </BoxContainer>
        </AccountContext.Provider>
    );
}
