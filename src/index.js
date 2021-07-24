import React from "react";
import ReactDOM from "react-dom";
import PrimaryButton, {SecondaryButton, TertiaryButton} from "./components/Button"


const App = () => {
    return (
        <div>
            <PrimaryButton disabled>Hello</PrimaryButton>
            <SecondaryButton disabled>Hello World</SecondaryButton>
            <TertiaryButton disabled>Hellow Fellas</TertiaryButton>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"))

