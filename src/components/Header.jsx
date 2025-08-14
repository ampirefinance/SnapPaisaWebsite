import React, { useState, useEffect } from "react";
import "../css/Common.css";
import { NavLink, Link, useNavigate } from "react-router-dom";
import logo from "../images/logo.png";
import { getStorage } from "../Utils/common";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [eligibility, setEligibility] = useState(null); // To store eligibility status
  const navigate = useNavigate(); 

  useEffect(() => {
    const token = getStorage("token");
    const eligibilityStatus = getStorage("eligibility");

    if (token) {
      setIsLoggedIn(true);
    }

    if (eligibilityStatus) {
      setEligibility(eligibilityStatus);
    }
  }, []);

  function showNavbar(e) {
    const navbar = document.querySelector(".header_wrapper");
    const navList = document.querySelector(".nav_list");
    
    if (navbar && navList) {
      navList.classList.toggle("v-class");
      navbar.classList.toggle("h-nav");
      // Keep header z-index high at all times
      navbar.style.zIndex = "9999";
    }
  }

  // Function to close mobile navigation when item is clicked
  const closeMobileNav = () => {
    const navbar = document.querySelector(".header_wrapper");
    const navList = document.querySelector(".nav_list");
    
    if (navbar && navList) {
      navList.classList.add("v-class");
      navbar.classList.remove("h-nav");
    }
  }

  // Handle the "Dashboard" click event to navigate based on eligibility
  const handleDashboardClick = () => {
    if (eligibility === 1) {
      navigate("/my-dashboard/eligibility"); // Navigate to eligibility page if eligible
    } else {
      navigate("/my-dashboard"); // Navigate to the regular dashboard if not eligible
    }
  };

  return (
    <>
      <div className="header_wrapper">
        <nav>
          <div className="logo_wrapper">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <ul className="nav_list v-class">
          <li>
  <NavLink to="/home" onClick={closeMobileNav}>Home</NavLink>
</li>
<li>
  <NavLink to="/about-us" onClick={closeMobileNav}>About</NavLink>
</li>
<li>
  <NavLink to="/contact" onClick={closeMobileNav}>Contact</NavLink>
</li>
<div className="header-buttons">
<li>
  {isLoggedIn ? (
    <button
      className="apply_now_button_link"
      onClick={() => { closeMobileNav(); handleDashboardClick(); }}
    >
      Dashboard
    </button>
  ) : (
    <NavLink to="/apply-now" className="apply_now_button_link" onClick={closeMobileNav}>
      Apply Now
    </NavLink>
  )}
</li>

<li>
  <NavLink to="/repayloan" className="apply_now_button_link repay_loan_button" onClick={closeMobileNav}>
    Repay Loan
  </NavLink>
</li>
{/* <li>
  <NavLink to="#" className="apply_now_button_link repay_loan_button">
    Repay Loan
  </NavLink>
</li> */}
</div>

          </ul>
          <div className="burger" onClick={showNavbar}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
