import React from "react";
import ReactDOM from "react-dom";
import PrimaryButton from "./components/Button"


const App = () => {
    return (
        <PrimaryButton>Hello</PrimaryButton>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"))

