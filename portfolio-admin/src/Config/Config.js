import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { acProject } from "../Redux/Project";
import { acFeedback } from "../Redux/Feedback";

export function Config() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/v1/projects/", {
      })
      .then((res) => {
        dispatch(acProject(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/v1/feedbacks/", {
      })
      .then((res) => {
        dispatch(acFeedback(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch]);

  return null;
}
