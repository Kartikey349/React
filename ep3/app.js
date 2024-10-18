import react from "react";
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

// const heading = React.createElement('div', {id: "heading"},
//     [
//         React.createElement('h1',{}, "hello there"),
//         React.createElement('h1',{}, "hello there"),
//         React.createElement('h1',{}, "hello there")
//     ]
// )

// const heading = (
//     <div id = "main">
//         <h1 id = "heading">hello there from jsx</h1>
//         <h1>hello there from jsx</h1>
//         <h1>hello there from jsx</h1>
//     </div>
// );

// const Heading = () => (
//     <div id = "main">
//         {heading}
//          <h1>hello there</h1>
//          <h1>hello there</h1>
//          <h1>hello there</h1>
//      </div>
// )

// const Header = () => (
//     <div id = "header">
//         <nav>
//             <img src="icon.png" />
//             <input type="text" placeholder = 
//             "type something" />
//             <img src="./profile.png" alt="" className="img-profile" />
//         </nav>
//     </div>
// );

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HeadingComponent />);
