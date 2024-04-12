export const reAlert = (
  state = { open: false, message: "", type: "" },
  action
) => {
  switch (action.type) {
    case "ALERT":
      return action.payload;
    default:
      return state;
  }
};

export const acAlert = (alertVisible) => {
  return {
    type: "ALERT",
    payload: alertVisible,
  };
};
