import './App.css';
import React from 'react';
import Display from './Display';
import styled from "styled-components";


const MainDisplayContainer = styled.div`
  width: 100%;
  background: rgba(113,89,142,1);
  background: linear-gradient(90deg, rgba(113,89,142,1) 0%, rgba(175,173,196,1)  100%);
  // padding-bottom: 50px;
`;
function LandingPage() {
    return (
        <MainDisplayContainer>
            <Display />
        </MainDisplayContainer>
    );
}

export default LandingPage;
