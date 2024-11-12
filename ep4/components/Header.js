import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {

    const [btnNameReact, setBtnName] = useState("Login");

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src= {LOGO_URL} />
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                    <button onClick={() => { 
                       btnNameReact ==="Login" ? setBtnName("Logout") : setBtnName("Login");
                    }
                } className="login-btn">{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;