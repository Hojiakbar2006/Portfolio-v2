export const reFeedback = (state = [], action) => {
  switch (action.type) {
    case "FEEDBACK":
      return action.payload;
    default:
      return state;
  }
};

export const acFeedback = (data) => {
  return {
    type: "FEEDBACK",
    payload: data,
  };
};
