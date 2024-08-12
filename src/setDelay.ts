import displayFunction from "./displayFunction";
import fetchData from "./fetchData";
import editData from "./editData";
import animationInOut from "./animationInOut";

const setDelay = (callback: () => void, time: number): void => {
    setTimeout(() => {
      console.log("delayed");
      callback();
    }, time);
  };
  
  const openElement = (): void => {
    animationInOut.animationIn('firstContainer1', 1000);
  };
  
  const downloadData = (): void => {
    fetchData.getData(editData.editData);
  };
  
  const minimizeButton = (): void => {
    displayFunction.displayHome();
  };

  export default { setDelay, openElement, downloadData, minimizeButton };