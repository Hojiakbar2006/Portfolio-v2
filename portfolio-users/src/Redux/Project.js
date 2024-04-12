export const reProject = (state = [], action) => {
  switch (action.type) {
    case "PRODUCT":
      return action.payload;
    default:
      return state;
  }
};

export const acProject = (data) => {
  const paylod = [];
  data.map((item, index) => {
    if (item.visible) {
      paylod.push({
        id: item.id,
        title: item.title,
        description: item.description,
        image: item.image,
        github_url: item.github_url,
        demo_url: item.demo_url,
        delay: index / 5,
      });
    }
    return null;
  });

  return {
    type: "PRODUCT",
    payload: paylod,
  };
};
