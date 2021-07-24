import styled from "styled-components"
import { typeScale } from "../utils"
import {applyStyleModifiers} from "styled-components-modifiers"

const BUTTON_MODIFIERS = {
    small: () => `
      font-size: ${typeScale.helperText};
      padding: 8px;
    `,
    large: () => `
      font-size: ${typeScale.header5};
      padding: 16px 24px;
    `,
    warning: ({theme}) => `
      background: none;
      color: ${theme.status.warningColor};

      &:hover, &:focus {
      background-color: ${theme.status.warningColorHover};
      outline: 3px solid ${theme.status.warningColorHover};
      outline-offset: 2px;
      border: 2px solid transparent;
      }

      &:active {
       background-color: ${theme.status.warningColorActive};
      }
    `,
    primaryButtonWarning: ({theme}) => `
      background-color: ${theme.status.warningColor};
      color: ${theme.textColorInverted};
    `,
    secondaryButtonWarning: ({theme}) => `
      border: 2px solid ${theme.status.warningColor};
    `,
  };

const Button = styled.button`
    padding: 12px 24px;
    font-size: ${typeScale.paragraph};
    border-radius: 8px;
    min-width: 100px;
    cursor: pointer;
    font-family: ${props => props.theme.primaryFont};
    transition: background-color 0.2s linear, color 0.2s linear;

    &:hover{
        background-color: ${props => props.theme.primaryHoverColor};
        color: ${props => props.theme.textColorOnPrimary};
    }

    &:focus{
        outline: 3px solid ${props => props.theme.primaryHoverColor};
        outline-offset: 2px;
    }

    &:active{
        background-color: ${props => props.theme.primaryActiveColor}
    }
`

export const PrimaryButton = styled(Button)`
    background-color: ${props => props.theme.primaryColor};
    border:none;
    color: white;

    &:disabled{
        background-color: ${props => props.theme.disabled};
        color: ${props => props.theme.textOnDisabled};
        cursor: not-allowed;
    }
    ${applyStyleModifiers(BUTTON_MODIFIERS)};
`

export const SecondaryButton = styled(Button)`
   background: none;
   border: 2px solid ${props => props.theme.primaryColor};
   color: ${props => props.theme.primaryColor};

   &:disabled{
        background: none;
        border-color: ${props => props.theme.disabled};
        color: ${props => props.theme.textOnDisabled};
        cursor: not-allowed;
    }
    ${applyStyleModifiers(BUTTON_MODIFIERS)};
`

export const TertiaryButton = styled(Button)`
   background: none;
   border: none;
   color: ${props => props.theme.primaryColor};

   &:disabled{
        background: none;
        color: ${props => props.theme.textOnDisabled};
        cursor: not-allowed;
    }
    ${applyStyleModifiers(BUTTON_MODIFIERS)};
`