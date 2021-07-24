import React from "react";
import ReactDOM from "react-dom";
import PrimaryButton, {SecondaryButton, TertiaryButton} from "./components/Button"


const App = () => {
    return (
        <div>
            <PrimaryButton modifiers={["small", "warning", "primaryButtonWarning"]}>Hello</PrimaryButton>
            <SecondaryButton modifiers={["large", "warning", "secondaryButtonWarning"]} >Hello World</SecondaryButton>
            <TertiaryButton>Hellow Fellas</TertiaryButton>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"))

