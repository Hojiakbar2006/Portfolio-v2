import React from "react";
import "./Project.css";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";


export default function Project() {
const data = useSelector((state) => state.project);

  return (
    <div id="project">
      <motion.div
        className="head"
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
      >
        <h3>Get to know</h3>
        <h1>My Portfolio</h1>
      </motion.div>

      <div className="main">
        {data.map((item, i) => {
          return (
            <motion.div
              className="box"
              key={i}
              initial={{ x: 300, opacity: 0 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: { duration: 0.4, delay: item.delay },
              }}
            >
              <figure className="img-box">
                <img src={item.image} alt="img" />
              </figure>
              <div className="content">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <div className="btns">
                  <a className="btn" href={item.demo_url} target="blank">
                    Demo
                  </a>
                  <a className="btn" href={item.github_url} target="blank">
                    Github
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
