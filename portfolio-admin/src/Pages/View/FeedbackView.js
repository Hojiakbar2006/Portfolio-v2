import React, { useEffect, useState } from "react";
import "./View.css";
import { useLocation } from "react-router-dom";
import axios from "axios";

export function FeedbackView() {
  const Location = useLocation();
  const id = Location.pathname.split("/").pop();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/v1/feedbacks/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .patch(`http://127.0.0.1:8000/api/v1/feedbacks/${id}/`, {
        unread: 0,
      })
      .then((res) => {
        console.log(res.status); // Access HTTP status code
      })
      .catch((err) => {
        console.log(err.response.status); // Access HTTP status code in error response
      });
  }, [id]);

  return (
    <div id="messageView">
      <h1>
        {data.name} {data.surname}
      </h1>
      <h2>{data.email}</h2>
      <h2>{data.phone}</h2>
      <h2>{data.sent_date}</h2>
      <p>{data.message}</p>
    </div>
  );
}
