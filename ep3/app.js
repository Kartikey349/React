import React from "react";
import ReactDOM from "react-dom/client";



const heading = React.createElement("h1", {id: "heading"}, "Namaste react" );

const Title = () => (<h1 id = "heading">Namaste React using JSX</h1>);

const title = (<h1 id = "heading">react element using JSX</h1>);

const num = 1000;

console.log(heading);
// console.log(jsxHeading)

const HeadingComponent = () => (
    <div id="container">
        <h1>{100 + 200}</h1>
        <h2>{num}</h2>
        {title}
        <Title />
        <h1 className="heading">functional Component</h1>
    </div> 
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HeadingComponent />);
