import React from "react";
import "./Style.css";

import deleteIcon from "../../Assets/Icons/Delete.svg";
import visible from "../../Assets/Icons/Visible.svg";
import hidden from "../../Assets/Icons/Hidden.svg";
import axios from "axios";

export function ShowProject({ data }) {
  return (
    <div id="tabCard">
      <table border="1px">
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Name</th>
            <th>About</th>
            <th>Operation</th>
            <th>Visible</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr key={item.id}>
                <th>{item.id}</th>
                <th className="figure">
                  <img width="100%" src={item.image} alt="" />
                </th>
                <th>{item.title}</th>
                <th>{item.description}</th>
                <th>
                  <a href="#">
                    <img
                      style={{ cursor: "pointer" }}
                      src={deleteIcon}
                      alt=""
                      onClick={() => {
                        axios
                          .delete(
                            `http://127.0.0.1:8000/api/v1/projects/${item.id}/`
                          )
                          .catch((err) => {
                            console.log(err);
                          });
                      }}
                    />
                  </a>
                </th>
                <th>
                  <a href="#">
                    <img
                      style={{ cursor: "pointer" }}
                      src={item.visible ? visible : hidden}
                      alt=""
                      onClick={(e) => {
                        const status = item.visible ? 0 : 1;
                        axios
                          .patch(
                            `http://127.0.0.1:8000/api/v1/projects/${item.id}/`,
                            {
                              visible: status,
                            }
                          )
                          .catch((err) => {
                            console.log(err);
                          });
                      }}
                    />
                  </a>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
