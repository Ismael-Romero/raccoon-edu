import React from "react";
import ReactDom from "react-dom/client";

import Header from "./components/teacher/tc_header";
import Aside from "./components/teacher/tc_aside";
import Main from "./components/teacher/tc_main";

const App = () => {
    return(
        <>
            <Header />
            <Aside />
            <Main />
        </>
    );
}
export default App;