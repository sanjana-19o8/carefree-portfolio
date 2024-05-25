import React, { useState } from "react";
import "./style.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { logotext } from "../content_option";
import Themetoggle from "../components/themetoggle";

const Headermain = () => {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle("ovhidden");
  };

  return (
    <>
      <header className="fixed-top site__header">
        <div className="d-flex align-items-center justify-content-between">
          <Link className="navbar-brand nav_ac" to="/">
            {logotext}
          </Link>
          <div className="d-flex align-items-center">
            {/* <Themetoggle /> */}
            <button className="menu__button  nav_ac" onClick={handleToggle}>
              {!isActive ? <VscClose /> : <VscGrabber />}
            </button>
          </div>
        </div>

        <div className={`site__navigation ${!isActive ? "menu__opend" : "menu__closed"}`}>
          <ul className="the_menu fixed_top">
            <li className="menu_item">
              <Link onClick={handleToggle} to="/contact" className="mx-3">Contact</Link>
            </li>
            <li className="menu_item">
              <Link onClick={handleToggle} to="/about" className="mx-3">About</Link>
            </li>
            <li className="menu_item">
              <Link onClick={handleToggle} to="/portfolio" className="mx-3"> Portfolio</Link>
            </li>
            <li className="menu_item ">
              <Link onClick={handleToggle} to="/" className="mx-3">Home</Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Headermain;
