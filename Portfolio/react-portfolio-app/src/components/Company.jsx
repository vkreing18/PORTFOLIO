import React, { useState } from "react";
import brand1 from '../assets/img_react.webp';
import brand2 from '../assets/img_node.webp';
import brand3 from '../assets/img_html.png';
import brand4 from '../assets/CSS3_logo.svg';
import brand5 from '../assets/img_javascript.webp';
import brand6 from '../assets/img_java.webp';
import brand7 from '../assets/Bootstrap_logo.svg';
import brand8 from '../assets/tailwind-css-.svg';
import brand9 from '../assets/firebase-logo.webp';

const Company = () => {
  const [clickedImage, setClickedImage] = useState(null);

  const handleImageClick = (index) => {
    setClickedImage(index === clickedImage ? null : index);
  };

  const brands = [
    { name: "REACT JS", image: brand1 },
    { name: "NODE JS", image: brand2 },
    { name: "HTML", image: brand3 },
    { name: "CSS", image: brand4 },
    { name: "JAVASCRIPT", image: brand5 },
    { name: "BOOTSTRAP", image: brand7 },
    { name: "TAILWIND CSS", image: brand8 },
    { name: "FIREBASE", image: brand9 },
    { name: "JAVA", image: brand6 },
  ];

  return (
    <div className="company-profile" id='company'>
      <div className="company-info" id="company">
        <h2>My Skills</h2>
        <p>With expertise in various technologies, I create digital experiences that leave a lasting impact.</p>
      </div>

      {/* brands  */}
      <div className="brands">
        <ul className="brand-list">
          {brands.map((brand, index) => (
            <li key={index}>
              <img
                src={brand.image}
                alt=""
                className={index === clickedImage ? "clicked" : ""}
                onClick={() => handleImageClick(index)}
              />
              <p>{brand.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Company;
