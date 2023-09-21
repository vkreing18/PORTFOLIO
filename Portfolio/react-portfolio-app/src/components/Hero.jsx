import React, { useEffect } from 'react';

const Hero = () => {
  const handleDownloadResume = () => {
    const pdfUrl = '../../public/MIRZA SAHID BAIG RESUME .pdf';
    const anchor = document.createElement('a');
    anchor.style.display = 'none';
    anchor.href = pdfUrl;
    anchor.download = 'resume.pdf';
    anchor.target = '_blank'; 
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };
  

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
            <button className="btn resumebtn" onClick={handleDownloadResume} download>
              Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
