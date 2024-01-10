import React from "react";
import aboutImg from "../assets/bg_img.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const About = () => {
  // Define a function to prevent default behavior
  const preventDefaultClick = (e) => {
    e.preventDefault();
  };

  return (
    <div className="about" id="about">
      <div className="about-img">
        <div className="thumbnail">
          <img src={aboutImg} alt="" />
        </div>
      </div>

      {/**About Section */}
      <div className="about-content">
        <div className="section-title">
          <h2 className="title gg">About Me</h2>
          <p className="description">
          Hi there! I'm Mirza Sahid Baig, a fourth-year BTech student at Silicon Institute of Technology, specializing in Computer Science and Engineering. As a dedicated full-stack developer, I'm passionate about building robust web applications that bring ideas to life and solve complex challenges.I thrive on continuous learning and am always eager to take on new projects.
          </p>
        </div>
        {/**tabs */}
        <div className="tabs-area">
          <Tabs>
            <TabList className="tab-style">
              <Tab className="tabs">Education & Certification</Tab>
              <Tab className="tabs">Awards</Tab>
              <Tab className="tabs">Interest</Tab>
            </TabList>

            <TabPanel>
              <div className="single-tab-content">
                <ul>
                  <li>
                    <a href="/" onClick={preventDefaultClick}>
                      BTech In CSE<span>-Silicon Institute Of Technology,BBSR</span>
                    </a>
                    2024
                  </li>
                  <li>
                    <a href="/" onClick={preventDefaultClick}>
                      Higher Secondar<span>-Stewart School,BBSR</span>
                    </a>
                    2020
                  </li>
                  <li>
                    <a href="/" onClick={preventDefaultClick}>
                      Matriculation<span>-Stewart School,BBSR</span>
                    </a>
                    2018
                  </li>
                </ul>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="single-tab-content">
                <ul>
                  <li>
                    <a href="/" onClick={preventDefaultClick}>
                      Best Performance<span>- Syllogist Internship</span>
                    </a>
                    2022
                  </li>
                  <li>
                    <a href="/" onClick={preventDefaultClick}>
                      Best Performance<span>-CodeMate Internship</span>
                    </a>
                    2023
                  </li>
                </ul>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="single-tab-content">
                <ul>
                <li>
                <a href="/" onClick={preventDefaultClick}>
                  Web Design<span></span>
                </a>
                ReactJS,NodeJs,etc..
              </li>
                  <li>
                    <a href="/" onClick={preventDefaultClick}>
                      User experience Design <span></span>
                    </a>
                    Tailwind Css,BootStrap,etc..
                  </li>

                  <li>
                    <a href="/" onClick={preventDefaultClick}>
                      Cooding<span></span>
                    </a>
                    Leetcode, Hackerrank, etc.
                  </li>
                </ul>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default About;
