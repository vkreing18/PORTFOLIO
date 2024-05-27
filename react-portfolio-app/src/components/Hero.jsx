import React, { useEffect } from 'react';
import pdf from "../../public/mirza.pdf"

const Hero = () => {
  useEffect(() => {
    return () => {
      const anchors = document.querySelectorAll('a[download]');
      anchors.forEach((anchor) => {
        document.body.removeChild(anchor);
      });
    };
  }, []);

  return (
    <div className='home'>
      <div className="bg_image">
        <div className="banner">
          <div>
            <p>Web Developer</p>
            <h2 className='title'>
              Hello, I'm <span>Sahid</span> Welcome to my portfolio.
            </h2>
            <a href={pdf} target='_blank' rel='nooreferrer'><button className="btn resumebtn" >
            Resume
          </button></a>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
