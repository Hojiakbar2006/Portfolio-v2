export const reProject = (state = [], action) => {
  switch (action.type) {
    case "PRODUCT":
      return action.payload;
    default:
      return state;
  }
};

export const acProject = (data) => {

  return {
    type: "PRODUCT",
    payload: data,
  };
};
