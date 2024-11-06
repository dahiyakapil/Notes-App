import React from "react";
import LeftSide from "../LeftSIde/LeftSide";
import StyleMainPage from "./StylesMainPage.module.css";
import RightSide from "../RightSIde/RIghtSide";


const MainPage = () => {
  return (
    <>
      <div className={StyleMainPage.homePage}>
        <LeftSide />
      </div>

      <RightSide/>
    </>
  );
};

export default MainPage;
