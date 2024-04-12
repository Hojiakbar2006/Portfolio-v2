import React from "react";
import "./AppBar.css";
import { NavLink, useNavigate } from "react-router-dom";
import signOut from "../../Assets/Icons/signout.svg";
import visible from "../../Assets/Icons/Visible blue.svg";
import { useSelector } from "react-redux";

export function AppBar({ data, openNav, setOpenNav, openApp, setOpenApp }) {
  const navigate = useNavigate();
  const feedback = useSelector((state) => state.feedback);

  const unread = feedback.filter((item)=>item.unread === 1)
  

  return (
    <>
      <div
        className={
          openNav || openApp ? "NavContainer openCard" : "NavContainer"
        }
        onClick={() => {
          setOpenNav(false);
          setOpenApp(false);
        }}
      ></div>

      <div className={openNav ? "NavBar openNav" : "NavBar"}>
        <div className="AppBar">
          <div className="profile">
            <figure>
              <img src="./my-logo.png" alt="" />
            </figure>
            <p>Hojiakbar Nasriddinov</p>
          </div>
          <div className="nav-link">
            {data.map((item, index) => {
              return (
                <NavLink
                  key={index}
                  to={item.routName}
                  style={{ display: item.style }}
                >
                  {item.name}
                </NavLink>
              );
            })}
          </div>
        </div>
        <NavLink>
          <img src={signOut} alt="" /> Sign out
        </NavLink>
      </div>

      <div className={openApp ? "notifCenter openNotif" : "notifCenter"}>
        <button onClick={() => navigate("/message")}>
          You have {unread.length} new message
        </button>
        <div className="btn-group">
          {unread.map((item) => {
            return (
              <button
                key={item.id}
                onClick={() => navigate(`message/view/${item.id}`)}
              >
                <div>
                  <p>{item.name}</p>
                  <p>{item.phone}</p>
                </div>
                <img src={visible} alt="" />
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
