import React from "react";
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring"
import { typeScale } from "../utils";
import { PrimaryButton } from "./Button"
import { Illustrations, CloseIcon } from "../assets";
import { configure } from "@testing-library/react";

const ModalWrapper = styled.div`
    width: 800px;
    height: 500px;
    box-shadow: 0 5px 16px rgb(0,0,0,0.2);
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    border-radius: 2px;
    background-color: ${props => props.theme.formElementBackground};
    color: ${props => props.theme.textOnFormElementBackground};
    background: ${props => props.theme.formElementBackground};
`

const SignUpHeader = styled.h4`
    font-size: ${typeScale.header4};
`

const SignUpText = styled.p`
    font-size: ${typeScale.paragraph};
    max-width: 70%;
    text-align: center;
`
const CloseModalButton = styled.button`
    cursor: pointer;
    background: none;
    border: none;
    position: absolute;
    top: 40px;
    right: 40px;
    width: 24px;
    height: 24px;
    padding: 0;
`


export const SignUpModal = ({showModal}) => {

    const animation = useSpring({
            opacity: showModal ? 1 : 0,
            transform: showModal ? `translateY(0)` : `translateY(-200%)`,
            config: config.slow
    })
    

    return(
        <animated.div style={animation}>
            <ModalWrapper>
                <img src={Illustrations.SignUp} alt="Sign up for an account!" />
                <SignUpHeader>Sign Up</SignUpHeader>
                <SignUpText>Sign up today to get access to all of our content and features!</SignUpText>
                <PrimaryButton>Sign Up</PrimaryButton>
                <CloseModalButton aria-label="Close modal">
                    <CloseIcon />
                </CloseModalButton>
            </ModalWrapper>
        </animated.div>
    )
}