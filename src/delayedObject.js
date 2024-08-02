import { getData } from "./fetchdata";
import { editData } from "./fetchdata";
import { animationIn } from "./animate";
import { displayHome } from "./main";
const openElement = () => {
    animationIn('firstContainer1',1000);
  };
const downloadData = () => {
    getData(editData);
  };
const minimizeButton = () => {
    displayHome("display");
}
  export { downloadData};
  export { openElement };
  export { minimizeButton};