import generateContent from "./generateContent";
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
