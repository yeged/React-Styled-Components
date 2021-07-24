import React, {useState} from "react";
import ReactDOM from "react-dom";
import {ThemeProvider} from "styled-components"
import {PrimaryButton, SecondaryButton, TertiaryButton, SignUpModal} from "./components";
import {darkTheme, defaultTheme} from "./utils"

const App = () => {

    const [useDarkTheme, setUseDarkTheme] = useState(false);

    return (
        <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
        <button
          style={{ margin: "0 16px 24px", padding: "8px", background: "none" }}
          onClick={() => setUseDarkTheme(true)}
        >
          Dark theme
        </button>
        <button
          style={{ margin: "0 16px 24px", padding: "8px", background: "none" }}
          onClick={() => setUseDarkTheme(false)}
        >
          Default theme
        </button>
        <div
          style={{
            background: useDarkTheme
              ? defaultTheme.primaryColor
              : darkTheme.primaryColor,
            width: "100vw",
            height: "90vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
         <SignUpModal />
         </div>
       </ThemeProvider>
    //       <PrimaryButton modifiers={["small", "warning", "primaryButtonWarning"]}>
    //         Hello
    //       </PrimaryButton>
    //       <SecondaryButton modifiers={["large", "warning", "secondaryButtonWarning"]}>
    //         Hello World
    //       </SecondaryButton>
    //       <TertiaryButton>Hellow Fellas</TertiaryButton>
       
    )
}

ReactDOM.render(<App/>, document.getElementById("root"))

