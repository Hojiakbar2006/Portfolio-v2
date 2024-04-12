import React from "react";
import {Link, useLocation } from "react-router-dom";
import "./Appbar.css";

import home from "../../Assets/Icon/Home.svg";
import about from "../../Assets/Icon/About.svg";
import skils from "../../Assets/Icon/Skils.svg";
import project from "../../Assets/Icon/Project.svg";
import team from "../../Assets/Icon/Team.svg";
import feedback from "../../Assets/Icon/feedback.svg"
import back from "../../Assets/Icon/back.svg";
import { motion } from "framer-motion";

export function Appbar() {
  const locate = useLocation().pathname.split("/")[1];

  return (
    <>
      {locate === "learn-more" ? (
        <motion.div
          className="back-to-team"
          initial={{ y: 200 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/team">
            <img src={back} alt="icon" />
            <span>Back</span>
          </Link>
        </motion.div>
      ) : (
        <>
          <div
            id="app-bar"
            style={locate === "learn-more" ? { width: 120 } : {}}
            className={locate===""?"bottom":""}
          >
            <Link to="/">
              <img src={home} alt="icon" />
              <span>Home</span>
            </Link>
            <Link to="/about">
              <img src={about} alt="icon" />
              <span>About me</span>
            </Link>
            <Link to="/skils">
              <img src={skils} alt="icon" />
              <span>Experience</span>
            </Link>
            <Link to="/project">
              <img src={project} alt="icon" />
              <span>Portfolio</span>
            </Link>
            <Link to="/team">
              <img src={team} alt="icon" />
              <span>Team</span>
            </Link>
            <Link to="/feedback">
              <img src={feedback} alt="icon" />
              <span>Feedback</span>
            </Link>
            <div id="companion" className={locate}></div>
          </div>
          {/* <motion.div
            className="menu"
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: -10, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="icon-card">
              <div className="icon">
                <span></span>
                <span></span>
              </div>
            </div>
            <h2>TOP</h2>
          </motion.div> */}
        </>
      )}
    </>
  );
}
