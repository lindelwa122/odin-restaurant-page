import home from "../routes/home";
// import menu from "../routes/menu";

const navbar = () => {
  const div = () => ({
    tagName: "div",
    options: {
      innerHTML: "PeanutButter Cookies",
      style: {
        color: "#f9faf8",
        fontFamily: "'Dancing Script', cursive",
        fontSize: "24px",
        fontWeight: 700,
      }
    },
  });

  const ul = () => {
    const li = (content, id) => ({
      tagName: "li",
      options: {
        innerHTML: content,
        router: {
          id: id,
          name: "navigation",
          to: "menu",
        }
      },
    });

    return {
      tagName: "ul",
      children: [li("Home", "home"), li("Menu", "menu"), li("Contacts", "contacts")],
      options: {
        style: {
          display: "flex",
          gap: "15px",
          listStyle: "none",
          margin: 0,
          padding: 0,
          cursor: "pointer",
        }
      }
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
