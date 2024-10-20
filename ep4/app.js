import React from "react";
import ReactDom from "react-dom/client";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://tse2.mm.bing.net/th?id=OIP.cW3C10wMDP5EpuYjdKow0gHaE8&pid=Api&P=0&h=180" />
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
        </div>
    )
}

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(<AppLayout />)