import React from "react";
import { useState } from "react";
import "./App.css";
function App() {
    const [count, setCount] = useState(0);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", null,
            React.createElement("h1", null, "hi Mary"))));
}
export default App;
