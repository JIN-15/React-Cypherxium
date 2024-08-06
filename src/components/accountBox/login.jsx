import React, { useContext } from "react";
import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton } from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

export function LoginForm(props) {

const {switchToSignup} = useContext(AccountContext);

    return (
        <BoxContainer>
            <FormContainer>
                <Input type="email" placeholder="E-mail" />
                <Input type="password" placeholder="Password" />
            </FormContainer>
            <Marginer direction="vertical" margin={10} />
            <MutedLink href="#">Forgot Password?</MutedLink>
            <Marginer direction="vertical" margin="1em" />
            <SubmitButton type="submit">Sign-In</SubmitButton>
            <Marginer direction="vertical" margin="1em" />
            <MutedLink href="#">Don't have Account? <BoldLink href="#" onClick={switchToSignup}>Sign-Up</BoldLink></MutedLink>
        </BoxContainer>
    );
}