const navbar = () => {
  const div = () => ({
    tagName: "div",
    options: {
      innerHTML: "PeanutButter Cookies",
    },
  });

  const ul = () => {
    const li = (content) => ({
      tagName: "li",
      options: {
        innerHTML: content,
      },
    });

    return {
      tagName: "ul",
      children: [li("Home"), li("Menu"), li("Contacts")],
    };
  };

  return {
    tagName: "nav",
    children: [div(), ul()],
    options: {
      style: {
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#1f2937",
        color: "#e5e7eb",
        padding: "20px 150px"
      }
    }
  };
};

export default navbar;
