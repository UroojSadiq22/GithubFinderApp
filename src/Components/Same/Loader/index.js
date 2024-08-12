import React from 'react';
import loaderGif from '../../Assests/WMDx.gif'; // Import your loader GIF
import Loaderstyle from './loader.module.css'; // Import CSS for the loader styling

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
