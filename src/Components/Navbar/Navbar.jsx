import "./Navbar.css"
import { Link } from "react-router-dom";
import Logo from "/assets/Image/Logo.png"
import Carticon from "/assets/Image/Carticon.png"
import React, { useState } from 'react';
import CartSidebar from "../CartSidebar/CartSidebar"
import useProductStore from '../../Store/useProductStore';

function Navbar(){
  // const [isCartOpen, setIsCartOpen] = useState(false);

  const { isCartOpen, closeCart } = useProductStore();

    return(
        <nav>
            <div id="logodiv">
            <img src={Logo} />
            <h1>Furniro</h1>
            </div>

            <ul id="ulnav">
            <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Shope">Shope</Link>
          </li>
          <li id="contact">
            <Link to="/Contact">Contact</Link>
          </li>
           
            </ul>

            <div>
            {/* <img src={Carticon} onClick={() => setIsCartOpen(!isCartOpen)} />
            {isCartOpen && <CartSidebar onClose={() => setIsCartOpen(false)} />} */}
            
            <img src={Carticon} onClick={() => useProductStore.setState({ isCartOpen: !isCartOpen })} />
        {isCartOpen && <CartSidebar onClose={closeCart} />}
            </div>
        </nav>
    )
}

export default Navbar