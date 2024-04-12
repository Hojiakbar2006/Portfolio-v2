import React from "react";
import "./NavBar.css";
import menuBtn from "../../Assets/Icons/menuBtn.png";
import message from "../../Assets/Icons/message.png";

export function NavBar({ setOpenNav, setOpenApp }) {
  return (
    <div id="AppBar">
      <button className="menuBtn" onClick={() => setOpenNav(true)}>
        <img src={menuBtn} alt="" />
      </button>
      <div className="itemCard">
        <img
          className="messageBtn"
          width="40px"
          src={message}
          alt=""
          onClick={() => setOpenApp(true)}
        />
      </div>
    </div>
  );
}
