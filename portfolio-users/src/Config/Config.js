import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { acProject } from "../Redux/Project";

export function Config() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/v1/projects/", {
        header: {
          token: "token",
        },
      })
      .then((res) => {
        dispatch(acProject(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch]);

  return null;
}
