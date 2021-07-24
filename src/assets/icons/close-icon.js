import React from "react";
import styled from "styled-components";

const CloseIconWrapper = styled.svg`
    width: 100%;
    height: 100%;
`

export const CloseIcon = () => {
    return(
        <CloseIconWrapper>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 60" x="0px" y="0px">
            <g data-name="Application, Close">
                <path d="M25.41,24l11.3,11.29-1.42,1.42L24,25.41,12.71,36.71l-1.42-1.42L22.59,24,11.29,12.71l1.42-1.42L24,22.59l11.29-11.3,1.42,1.42Z" />
            </g>
            <text
                x="0"
                y="63"
                fill="#000000"
                font-size="5px"
                font-weight="bold"
                font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
            >
                Created by Rahman Haryanto
            </text>
            <text
                x="0"
                y="68"
                fill="#000000"
                font-size="5px"
                font-weight="bold"
                font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
            >
                from the Noun Project
            </text>
        </svg>;
    </CloseIconWrapper>
    )
}




