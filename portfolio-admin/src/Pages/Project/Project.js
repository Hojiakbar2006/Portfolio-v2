import React from "react";
import "./Project.css";
import { ShowProject } from "../../Components/ShowCard/ShowProject";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


export function Project() {
  const data = useSelector((state)=>state.project)
  const navigate = useNavigate();
  return (
    <div id="Project">
      <div className="hedTitle">
        <h1>My Projects</h1>
        <button onClick={() => navigate("/addproject")}>Add New Project</button>
      </div>
      <ShowProject data={data} />
    </div>
  );
}
