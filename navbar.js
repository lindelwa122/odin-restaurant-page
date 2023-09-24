const navbar = () => {
  const div = () => {
    return {
      tagName: "div",
      options: {
        innerHTML: "PeanutButter Cookies",
      },
    };
  };

  const ul = () => {
    const li = (content) => {
      return {
        tagName: "li",
        options: {
          innerHTML: content,
        },
      };
    };

    return {
      tagName: "ul",
      children: [li("Home"), li("Menu"), li("Contacts")],
    };
  };

  return {
    tagName: "nav",
    children: [div(), ul()]
  }
};

export default navbar;
