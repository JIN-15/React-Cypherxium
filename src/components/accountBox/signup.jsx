import React, { useContext } from "react";
import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton } from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

export function SignupForm(props) {
const { switchToSignin } = useContext(AccountContext);

    return (
        <BoxContainer>
            <FormContainer>
                <Input type="text" placeholder="Full Name" />
                <Input type="email" placeholder="E-mail" />
                <Input type="password" placeholder="Password" />
                <Input type="password" placeholder="Confirm Password" />
            </FormContainer>
            <Marginer direction="vertical" margin={5} />
            <SubmitButton type="submit">Sign-Up</SubmitButton>
            <MutedLink>Already have Account? <BoldLink href="#" onClick={switchToSignin}>Sign-In</BoldLink></MutedLink>
            {/* <Marginer direction="vertical" margin={"1em"} /> */}
        </BoxContainer>
    );
}