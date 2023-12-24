// import React , {useState} from 'react'
// import { Link } from 'react-router-dom';
// import './Header.css';

// const Header = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const closeMobileMenu = () => {
//     setIsMobileMenuOpen(false);
//   };

//   return (
//     <>
//       <div className="navbar-fixed">
//         <div className="navBar">
//           <div className="hamburger" onClick={toggleMobileMenu}>
//             <div className="line"></div>
//             <div className="line"></div>
//             <div className="line"></div>
//           </div>
//          <Link to='/'>
//          <div className="jscop" id="jscop">
//             JSCOP
//           </div>
//          </Link>
//           <div
//             className={`navbar-items ${isMobileMenuOpen ? "mobilemenu" : ""}`}
//           >
//             <a onClick={closeMobileMenu}>
//             <Link to='/'>Home</Link>
//             </a>
//             <a onClick={closeMobileMenu}>
//             <Link to='/team'>Team</Link>
//             </a>
//             <a onClick={closeMobileMenu}>
//             <Link to='/gallery'>Gallery</Link>
//             </a>
//             <a onClick={closeMobileMenu}>
//             <Link to='/contact'>Contact us</Link>
//             </a>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Header;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <div className="navbar-fixed">
        <div className="navBar">
          <div className="hamburger" onClick={toggleMobileMenu}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <div className="jscop" id="jscop">
            JSCOP
          </div>
          <div
            className={`navbar-items ${isMobileMenuOpen ? "mobilemenu" : ""}`}
          >
            <a onClick={closeMobileMenu}>
              <Link to="/">Home</Link>
            </a>
            <a onClick={closeMobileMenu}>
              <Link to="/team">Team</Link>
            </a>
            <a onClick={closeMobileMenu}>
              <Link to="/gallery">Gallery</Link>
            </a>
            <a onClick={closeMobileMenu}>
              <Link to="/contact">Contact us</Link>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
