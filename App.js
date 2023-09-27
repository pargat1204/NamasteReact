import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => Object => HTML Element (render)
const heading = React.createElement("h1", {id: "heading"}, "Namaste React");

const Title = () => (
    <h1 className="head" tabIndex="5">
        Namaste React
    </h1>
);

const HeadingComponent = () => (
    <div id="container">
        <Title/>
        <h1 className="heading">Namaste React Functional Component</h1>
    </div>
);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);