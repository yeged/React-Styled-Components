import React from "react";
import ReactDOM from "react-dom";
import PrimaryButton, {SecondaryButton, TertiaryButton} from "./components/Button"


const App = () => {
    return (
        <div>
            <PrimaryButton>Hello</PrimaryButton>
            <SecondaryButton>Hello World</SecondaryButton>
            <TertiaryButton>Hellow Fellas</TertiaryButton>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"))

