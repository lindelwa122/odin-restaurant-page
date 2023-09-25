import navbar from "../components/navbar";
import menuComponent from "../components/menu";

const menu = {
  tagName: "div",
  children: [navbar(), menuComponent()],
};

export default menu;
