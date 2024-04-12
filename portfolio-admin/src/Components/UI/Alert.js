import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { acAlert } from "../../Redux/Alert";
import "./style.css";

export function Alert() {
  const alert = useSelector((state) => state.alert);
  const dispatch = useDispatch();
  const [clas, setClas] = useState("");

  useEffect(() => {
    switch (alert.type) {
      case "success":
        setClas("success");
        break;
      case "error":
        setClas("error");
        break;
      case "info":
        setClas("info");
        break;
      default:
        setClas("");
    }
  }, [clas, alert]);

  return (
    <div className={alert.open ? `alert open ${clas}` : "alert"}>
      {alert.message}
      <span onClick={() => dispatch(acAlert({ open: false }))}>X</span>
    </div>
  );
}
