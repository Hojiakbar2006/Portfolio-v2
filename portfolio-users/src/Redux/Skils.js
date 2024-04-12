export const reSkils = (
  state = {
    technical: [
      { id: 1, name: "react js", grade: 80 },
      { id: 2, name: "JavaScript", grade: 55 },
      { id: 3, name: "Python", grade: 45 },
      { id: 4, name: "Django", grade: 40 },
    ],
    professional: [
        { id: 1, name: "Communication", grade: 85 },
        { id: 2, name: "Team work", grade: 40 },
        { id: 3, name: "Project management", grade: 70 },
        { id: 4, name: "Creativity", grade: 60 },
    ],
  },
  action
) => {
  switch (action.type) {
    case "SKILS":
      return action.paylod;
    default:
      return state;
  }
};
  
  export const acSkils = (paylod) => {
    return {
      type: "SKILS",
      paylod,
    };
  };