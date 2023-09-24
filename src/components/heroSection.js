import restaurantImage from "./restaurant-image.jpeg";

const hero = () => {
  const left = () => ({
    tagName: "div",
    options: {
      classList: ["right"],
      innerHTML: `
        <h2>From Our Oven To Your Heart</h2>
        <p>Embracing Generations With Peanut Butter Love: Sharing our culinary legacy since 1828, where every cookie carries a taste of tradition and a dash of old-world charm.</p>
      `,
      style: {
        maxWidth: "500px"
      }
    }
  });

  const right = () => {
    const img = () => ({
      tagName: "img",
      options: {
        src: restaurantImage,
        alt: "Our first restaurant building",
        style: {
          height: "330px",
        }
      },
    });

    return {
      tagName: "div",
      options: {
        classList: ["right"],
      },
      children: [img()],
    };
  };

  return {
    tagName: "div",
    options: {
      classList: ["hero-section"],
      style: {
        alignItems: "center",
        display: "flex",
        height: "450px",
        justifyContent: "space-between",
        backgroundColor: "#1f2937",
        color: "#e5e7eb",
        padding: "20px 150px",
      }
    },
    children: [left(), right()],
  };
};

export default hero;
