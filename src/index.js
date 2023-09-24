import generateContent from "./generateContent";
import { createStyleSheet } from "./generateContent";
import navbar from "./navbar";
import hero from "./heroSection";
import informationSection from "./informationSection";
import officeHours from "./officeHoursSection";
import "normalize.css";

const DOM = {
  tagName: "div",
  children: [navbar(), hero(), informationSection(), officeHours()]
}

generateContent(DOM);

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
