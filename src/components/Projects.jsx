import React, { useEffect, useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [visibleProjects, setVisibleProjects] = useState(3);

  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div className="company-profile">
      <div className="company-info" id="project">
        <h2>My Latest Project</h2>
        <p>
        Explore some of the exciting projects I've had the privilege to work on. Each project represents a unique journey where I combined creativity and technical expertise to deliver outstanding results.
        </p>
      </div>

      <div className="projects">
        {projects.slice(0, visibleProjects).map((project) => (
          <div key={project.id} className="cards j">
            <div>
              <div className="card-overlay"></div>
              <div className="card-info">
              <h4>{project.title}</h4>
                <p>{project.category}</p>
                <button className="btn-outline"><a className="LinkText" href={project.live}>Link</a></button>
                <button className="btn-outline"  style={{marginLeft:'5px'}}><a className="LinkText" href={project.git}>Git</a></button>
              </div>
              <div className="card-image">
                <img src={project.image} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {visibleProjects < projects.length && (
        <div>
          <button className="btn" onClick={() => setVisibleProjects(visibleProjects + 3)}>
            See More
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;
