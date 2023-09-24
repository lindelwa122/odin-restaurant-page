import cookie1 from "../assets/images/cookie-001.jpg";
import cookie2 from "../assets/images/cookie-002.jpg";
import cookie3 from "../assets/images/cookie-003.jpg";
import cookie4 from "../assets/images/cookie-004.jpeg";

const info = (imgSrc, altText, caption) => {
  const img = () => ({
    tagName: "img",
    options: {
      src: imgSrc,
      alt: altText,
      style: {
        cursor: "pointer",
        transition: "transform 1s",
        height: "100%",
        objectFit: "cover",
        width: "100%",
      }
    },
  });

  const imgWrapper = () => ({
    tagName: "div",
    options: {
      classList: ["img-wrapper"],
      style: {
        border: "5px solid #3882f6",
        borderRadius: "10px",
        height: "200px",
        width: "200px",
        overflow: "hidden",
      }
    },
    children: [img()]
  })

  const div = () => ({
    tagName: "div",
    options: {
      innerHTML: caption,
      classList: ["caption"],
    },
  });

  return {
    tagName: "div",
    options: {
      classList: ["info"],
      style: {
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }
    },
    children: [imgWrapper(), div()],
  };
};

const informationSection = () => {
  const h2 = () =>( {
    tagName: "h2",
    options: {
      innerHTML: "Some Of Our Finest Cookies",
    }
  });

  const content = () => ({
    tagName: "div",
    options: {
      classList: ["content"],
      style: {
        display: "flex"
      }
    },
    children: [
      info(
        cookie1,
        "cookie",
        "cool mint, sumptuous chocolate; an elegant and refreshing pairing"
      ),
      info(
        cookie2,
        "cookie",
        "velvety cocoa with rich chocolate chunks; irresistible melt-in-your-mouth delight"
      ),
      info(
        cookie3,
        "cookie",
        "indulgent hazelnut truffle; sophisticated chocolate decadence in a cookie"
      ),
      info(
        cookie4,
        "cookie",
        "caramel and mocha harmonize; rhapsody of sweetness and coffee"
      ),
    ],
  });

  return {
    tagName: "div",
    options: {
      classList: ["information-section"],
      style: {
        display: "flex",
        flexDirection: "column",
        height: "450px",
        justifyContent: "center",
        textAlign: "center",
        padding: "20px 150px"
      }
    },
    children: [h2(), content()],
  };
};

export default informationSection;
