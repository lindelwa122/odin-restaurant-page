import navbar from "../components/navbar";
import hero from "../components/heroSection";
import informationSection from "../components/informationSection";
import officeHours from "../components/officeHoursSection";

const home = {
  tagName: "div",
  children: [navbar(), hero(), informationSection(), officeHours()],
};

export default home;
