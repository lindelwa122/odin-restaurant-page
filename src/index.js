import generateContent from "./generateContent";
import navbar from "../navbar";
import hero from "../heroSection";
import informationSection from "../informationSection";

const DOM = {
  tagName: "div",
  children: [navbar(), hero(), informationSection()]
}

generateContent(DOM);
