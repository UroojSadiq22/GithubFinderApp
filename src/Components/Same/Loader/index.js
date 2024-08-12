import React from "react";
import loaderGif from "../../Assests/WMDx.gif";
import Loaderstyle from "./loader.module.css";

const Loader = ({ fullScreen }) => {
  return (
    <div
      className={
        fullScreen
          ? Loaderstyle.loaderFullScreen // Full-screen loader
          : Loaderstyle.loaderInContainer // Loader in a specific area
      }
    >
      <img src={loaderGif} alt="Loading..." className={Loaderstyle.loader} />
    </div>
  );
};

export default Loader;
