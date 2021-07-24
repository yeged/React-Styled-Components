import styled from "styled-components"

const Button = styled.button`
    padding: 12px 24px;
    font-size: 1rem;
    border-radius: 8px;
    min-width: 100px;
    cursor: pointer;
    font-family: "Roboto Mono", monospace;
`

const PrimaryButton = styled(Button)`
    background-color: red;
    border:none;
    color: white;
`

export const SecondaryButton = styled(Button)`
   background: none;
   border: 2px solid red;
   color: red;
`

export const TertiaryButton = styled(Button)`
   background: none;
   border: none;
   color: red;

`

export default PrimaryButton;