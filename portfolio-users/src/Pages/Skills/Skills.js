import React from "react";
import "./Skills.css";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

export default function Skills() {
  const data = useSelector((state) => state.skils);
  const technical = [];
  const professional = [];

  data.technical.map((item, index) => {
    technical.push({
      id: item.id,
      name: item.name,
      grade: item.grade,
      delay: index / 4,
    });
    return null;
  });
  data.professional.map((item, index) => {
    professional.push({
      id: item.id,
      name: item.name,
      grade: item.grade,
      delay: index / 4,
    });
    return null;
  });

  return (
    <motion.div id="skills">
      <motion.div
        className="head"
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
      >
        <h4>What skils i have</h4>
        <h1>My Experience</h1>
      </motion.div>
      <div className="main">
        <div className="technical">
          <h2 className="tit">Technical</h2>

          {technical.map((item) => {
            return (
              <motion.div
                className="box"
                key={item.id}
                initial={{ x: -300, opacity: 0 }}
                animate={{
                  x: 0,
                  opacity: 1,
                  transition: { duration: 0.4, delay: item.delay },
                }}
              >
                <div className="title">
                  <h4>{item.name}</h4>
                  <h4>{item.grade}</h4>
                </div>
                <div className="progress">
                  <motion.span
                    animate={{
                      width: `${item.grade}%`,
                      transition: { duration: 0.5, delay: item.delay + 1 },
                    }}
                  ></motion.span>
                </div>
              </motion.div>
            );
          })}
        </div>
        <div className="professional">
          <h2 className="tit">Professional</h2>
          {professional.map((item) => {
            return (
              <motion.div
                className="card"
                key={item.id}
                initial={{ x: 300, opacity: 0 }}
                animate={{
                  x: 0,
                  opacity: 1,
                  transition: { duration: 0.4, delay: item.delay },
                }}
              >
                <motion.div
                  className="circle"
                  animate={{
                    background: `conic-gradient(white ${
                      item.grade * 3.6
                    }deg, #00000090 0deg)`,
                    transition: { duration: 0.5, delay: item.delay + 1 },
                  }}
                >
                  <span>{item.grade}%</span>
                </motion.div>
                <div className="text">{item.name}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
      <button className="btn">What I Do !!!</button>
    </motion.div>
  );
}
