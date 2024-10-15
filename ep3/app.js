import React from "react";
import ReactDOM from "react-dom/client";



const heading = React.createElement("h1", {id: "heading"}, "Namaste react" );

const jsxHeading = <h1 id = "heading">Namaste React using JSX</h1>

console.log(heading);
console.log(jsxHeading)

const HeadingComponent = () => (
    <div id="container">
        <h1 className="heading">functional Component</h1>;
    </div> 
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HeadingComponent />);
