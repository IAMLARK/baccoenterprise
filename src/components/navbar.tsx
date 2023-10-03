import React, {useState} from "react";
import '../navbar.css'
import home from "./home";


function Navbar() {
  const [active, setactive] = useState("nav_menu");
   
  const [toggleIcon, setToggleIcon] = useState("nav_toggler");

   const navToggle = () => {
      active === 'nav_menu' ? setactive('nav_menu nav_active')
      :setactive("nav_menu");
  
      //  toggleicon

     toggleIcon === 'nav_toggler'
    ? setToggleIcon('nav_toggler toggle')
     : setToggleIcon('nav_toggler');

    }; 
  
  return (
    
    <nav className="nav">
      <a href="#" className="nav_brand">
        BACCOENTERPRISE
      </a>

      {/* creating the list of items to appear in the navbar */}
      <ul className={active}>
        <li className="nav_item">
          <a href="#" className="nav_link">
            Home
          </a>
        </li>
        <li className="nav_item">
          <a href="#" className="nav_link">
            About Us
          </a>
        </li>
        <li className="nav_item">
          <a href="#" className="nav_link">
            Contact Us
          </a>
        </li>
        <li className="nav_item">
          <a href="#" className="nav_link">
            Portfolio
          </a>
        </li>
      </ul>
      <div onClick={navToggle}  className={toggleIcon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  
  );
}

export default Navbar;
