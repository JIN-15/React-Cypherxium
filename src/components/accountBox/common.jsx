// import React from "react";
import styled from "styled-components";

export const BoxContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
`;

export const FormContainer = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const MutedLink = styled.a`
    font-size: 12px;
    color:rgb(43, 6, 60);
    font-weight: 500;
    text-decoration: none;
    letter-spacing: 0.07em;
`;

export const BoldLink = styled.a`
    font-size: 13px;
    color: rgb(43, 6, 60);
    font-weight: 700;
    text-decoration: none;
    letter-spacing: 0.1em;
`;

export const Input = styled.input`
    width: 100%;
    height: 42px;
    outline: none;
    border: 1.5px solid  rgba(151,97,213,1);
    padding: 0px 10px;
    border-bottom: 2px solid transparent;
    border-radius: 10px;
    margin-bottom: 8px;
    font-size: 15px;
    transition: all 400ms ease-in-out;
    
    &::placeholder {
        rgba(113,89,142,1);
    }

    &:not(:last-of-type) {
        border-bottom: 2px solid rgba(200,200,200,0.4);
    }

    &:focus {
        outline: none;  
        border-bottom: 2px solid rgb(43, 6, 60);
    }
`;

export const SubmitButton = styled.button`
    width: 100%;
    padding: 11px 40%;
    font-size: 15px;
    font-weight: 600;
    border: none;
    border-radius: 100px 100px 100px 100px;
    cursor: pointer;
    color: #fff;
    transition: all, 240ms ease-in-out;
    background: rgb(43,6,60);
    background: linear-gradient(90deg, rgba(43,6,60,1) 43%, rgba(59,14,111,1) 75%);
    font-family: "Edu AU VIC WA NT Hand", cursive;
    margin-bottom: 17px;
    &:hover {
        filter: brightness(1.05);
    }
`;

