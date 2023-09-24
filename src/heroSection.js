const hero = () => {
  const left = () => ({
    tagName: "div",
    options: {
      classList: ["right"],
      innerHTML: `
        <h2>From Our Oven To Your Heart</h2>
        <p>Embracing Generations With Peanut Butter Love: Sharing our culinary legacy since 1828, where every cookie carries a taste of tradition and a dash of old-world charm.</p>
      `
    }
  });

  const right = () => {
    const img = () => ({
      tagName: "img",
      options: {
        src: "",
        alt: "Our first restaurant building",
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
    },
    children: [left(), right()],
  };
};

export default hero;
