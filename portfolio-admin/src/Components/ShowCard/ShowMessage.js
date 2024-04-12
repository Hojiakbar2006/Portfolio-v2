import React from "react";
import visible from "../../Assets/Icons/Visible.svg";
import { useNavigate } from "react-router-dom";

export function ShowMessage({ data }) {
  const navigate = useNavigate();
  return (
    <div id="tabCard">
      <table className="table" border='1px'>
        <thead className="title">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Email</th>
            <th>Message</th>
            <th>Phone</th>
            <th>See</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {data.map((item, i) => {
            return (
              <tr className="feedcard card" key={i}>
                <th>{item.id}</th>
                <th>{item.name}</th>
                <th>{item.surname}</th>
                <th>{item.email}</th>
                <th>{item.message}</th>
                <th>{item.phone}</th>
                <th>
                  <img
                    src={visible}
                    alt=""
                    onClick={() => navigate(`/message/view/${item.id}`)}
                    style={{ cursor: "pointer" }}
                  />
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
