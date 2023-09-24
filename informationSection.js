const info = (imgSrc, altText, caption) => {
  const img = () => {
    return {
      tagName: "img",
      options: {
        src: imgSrc,
        alt: altText,
      },
    };
  };

  const div = () => {
    return {
      tagName: "div",
      options: {
        innerHTML: caption,
        classList: ["caption"],
      },
    };
  };

  return {
    tagName: "div",
    options: {
      classList: ["info"],
    },
    children: [img(), div()],
  };
};

const informationSection = () => {
  const h2 = () => {
    return {
      tagName: "h2",
      options: {
        innerHTML: "Some Of Our Finest Cookies",
      },
    };
  };

  const content = () => {
    return {
      tagName: "div",
      options: {
        classList: ["content"],
      },
      children: [
        info(
          "",
          "cookie",
          "cool mint, sumptuous chocolate; an elegant and refreshing pairing"
        ),
        info(
          "",
          "cookie",
          "velvety cocoa with rich chocolate chunks; irresistible melt-in-your-mouth delight"
        ),
        info(
          "",
          "cookie",
          "indulgent hazelnut truffle; sophisticated chocolate decadence in a cookie"
        ),
        info(
          "",
          "cookie",
          "caramel and mocha harmonize; rhapsody of sweetness and coffee"
        ),
      ],
    };
  };

  return {
    tagName: "div",
    options: {
      classList: ["information-section"],
    },
    children: [h2(), content()],
  };
};

export default informationSection;
