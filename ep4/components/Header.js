import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../utils/useOnlineStatus";
import { UserContext } from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

    const [btnNameReact, setBtnName] = useState("Login");

    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);
    // console.log(loggedInUser);

    //selector
    const cartItems = useSelector((store)=> store.cart.items)

    return (
        <div className="flex justify-between items-center bg-pink-100 shadow-lg mb-4">
            <div className="logo-container">
                <img className="w-48 shadow-lg" src= {LOGO_URL} />
            </div>

            <div className="nav-items">
                <ul className="flex p-4 gap-4">
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
                    
                    <li><i className="fa-solid fa-cart-shopping"></i>({cartItems.length})</li>

                    <button onClick={() => { 
                       btnNameReact ==="Login" ? setBtnName(loggedInUser) : setBtnName("Login");
                    }
                } className="login-btn bg-green-600 p-2 rounded-sm text-white text-xs">{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;