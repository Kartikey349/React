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

const styleCard = {
    backgroundColor: "#f0f0f0"
}

//const RestaurentCard = ({resName, cuisines}) => destructuring
//const {resName, cuisines} = props;
const RestaurentCard = (props) => {
    console.log(props)
    return(
        <div className="res-card" style = {styleCard}>
            <img className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/17/c213682d-bfa3-4047-8fa7-3a0cc00674c9_79748.jpg" />
            <h3>{props.resName}</h3>
            <h4>{props.cuisine}</h4>
            <h4>4.3 stars</h4>
            <h4>30 mintues</h4>
        </div>
    )
}



const Body = () => {
    return(<div className="body">
        <div className="search">Search</div>
        <div className="res-container">
            <RestaurentCard resName= "Domino's pizza" cuisine= "Italian, Indian" />
            <RestaurentCard resName= "KFC" cuisine="burger, fastfood" />
        </div>
    </div>)
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(<AppLayout />)