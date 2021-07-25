## `npm install styled-components`

## `npm install styled-components-modifier`

## `npm install react-spring`


## Styled Components, Theme, State, Theme Provider, Utilities

<table>
<tr>
<th>Index.js</th>
<th>Button.js</th>
<th>Primary Button</th>
<th>Button Modifiers</th>
</tr>
<tr>
 <td>
   
````
   import { PrimaryButton } from "./components";
   import {ThemeProvider} from "styled-components"
   import {darkTheme, defaultTheme} from "./utils"
   
   const [useDarkTheme, setUseDarkTheme] = useState(false);
   
   <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
     <PrimaryButton 
      modifiers={["small", "warning", "primaryButtonWarning"]}>
      Hello
    </PrimaryButton>;
   </ThemeProvider>
   
````
   
</td>
<td>

````
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
````

</td>
  <td>

````
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
````

</td>
  <td>

````
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
````

</td>
</tr>
</table>

* **Theme Provider :**
````
import {ThemeProvider} from "styled-components"

<ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
  <PrimaryButton> Hello </PrimaryButton>
</ThemeProvider>
````

* **Styled Components Dynamic Props :**
````
export const PrimaryButton = styled(Button)`
  background-color: ${props => props.theme.primaryColor};
`
````

* **State(hover, active, focus) :**

````
&:hover{
  background-color: ${props => props.theme.primaryHoverColor};
  color: ${props => props.theme.textColorOnPrimary};
}
````

* **Button Modifier :**
````
import {applyStyleModifiers} from "styled-components-modifiers"
import { typeScale } from "../utils"


const BUTTON_MODIFIERS = {
    small: () => `
      font-size: ${typeScale.helperText};
      padding: 8px;
    `
  };


export const PrimaryButton = styled(Button)`
    ${applyStyleModifiers(BUTTON_MODIFIERS)};
`


<PrimaryButton modifiers={["small", "warning", "primaryButtonWarning"]}>
  Hello
</PrimaryButton>;

````

## React Spring

````
import { useSpring, animated, config } from "react-spring"

const animation = useSpring({
   opacity: showModal ? 1 : 0,
   transform: showModal ? `translateY(0)` : `translateY(-200%)`,
   config: config.slow
 })
 
<animated.div style={animation}>
  <div>...</div>
</animated.div>
````

