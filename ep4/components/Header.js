import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../utils/useOnlineStatus";

const Header = () => {

    const [btnNameReact, setBtnName] = useState("Login");

    const onlineStatus = useOnlineStatus();

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src= {LOGO_URL} />
            </div>

            <div className="nav-items">
                <ul>
                    <li>
                        Online status: {onlineStatus? "✅" : "🔴"}
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>

                    <li>
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    
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