import generateContent from "./module/generateContent";
import { createStyleSheet } from "./module/generateContent";
import home from "./routes/home";
import "normalize.css";

generateContent(home);

createStyleSheet.createCSSRule({
  "*": {
    boxSizing: "border-box"
  },

  "body": {
    fontFamily: "'Inter', sans-serif",
    fontSize: "18px",
  },

  ".hero-section h2": {
    color: "#f9faf8",
    fontSize: "48px",
    fontWeight: 900,
  },

  ".hero-section p": {
    lineHeight: "30px",
  },
 
  ".information-section h2": {
    color:" #1f2937",
    fontSize: "36px",
    fontWeight: 900,
    marginTop: 0,
  },
});
