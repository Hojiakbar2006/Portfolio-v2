import React from "react";
import "./FeedBack.css";
import { ShowMessage } from "../../Components/ShowCard/ShowMessage";
import { useSelector } from "react-redux";
import axios from "axios";

export function FeedBack() {
  const feedback = useSelector((state) => state.feedback);
  const unread = feedback.filter((item) => item.unread === 1);

  return (
    <div id="feedBack">
      <h1>Feedbacks clear</h1>
      <ShowMessage data={feedback} />
    </div>
  );
}
