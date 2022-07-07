import React from 'react';
import  { NavLink } from 'react-router-dom';


const Header= () =>{
    return(
        <div className="header">
            {/* <a href="#0">Home</a> */}
            {/* <Link className='navlink' to="signin">SIGN UP</Link> */}
         
            
            <NavLink to="/">HOME</NavLink>
     
            <NavLink to="about-us">ABOUT US</NavLink>
            <NavLink to="Contact">Contact Us</NavLink>
            <NavLink to="indivisualcart">CART</NavLink>
            <NavLink to="reachus">Reach Us</NavLink>
            <NavLink to="contactfrom">User Rating</NavLink>
            <NavLink to="product">All Product</NavLink>
            <NavLink to="shoes">Story</NavLink>
            <NavLink to="laptop">Study</NavLink>
            <NavLink to="signin">Sign In</NavLink>
            <NavLink to="Signup">Sign Up</NavLink>
           
            {/* <a href="#0">Contact</a>
            <a href="#0">About</a> */}
        </div>
    )
}




export default Header;

