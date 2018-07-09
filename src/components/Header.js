import React from 'react';
import videosrc from "../video.mp4";

const Header = () => {
  return (
    <div className="landing-viewport">
      <video className="landing-viewport__video" playsInline autoPlay loop muted>
        <source src={videosrc}/>
      </video>
    </div>
  );
};

export default Header;