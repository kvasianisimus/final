import React from "react";
import { useState } from "react";
import ProjectTemplate from "../../Components/ProjectTemplate/ProjectTemplate";
import "./Projects.scss";

import weather from "../../assets/weather.png";
import airPods from "../../assets/AirPods.png";
import crypto from "../../assets/crypto.png";
import clock from "../../assets/clock.png";
import bootstrap from "../../assets/bootstrap.png";

const Projects = () => {
  const [tags] = useState(['React', 'HTML', 'CSS', 'API']);
  const [tags2] = useState(['HTML', 'CSS', 'JS']);
  const [tags3] = useState(['React', 'HTML', 'CSS', 'API', 'VITE']);
  const [tags4] = useState(['HTML', 'CSS']);
  const [tags5] = useState(['BOOTSTRAP']);
  

  return (
    <div className="projects-wrapper">
      <div></div>

      <ProjectTemplate
        projectName="Weather"
        projectDesc="Project Description"
        tags={tags}
        img={weather}
      />

      <ProjectTemplate
        projectName="AirPods"
        projectDesc="Project Description"
        tags={tags2}
        img={airPods}
      />

      <ProjectTemplate
        projectName="Crypto"
        projectDesc="Project Description"
        tags={tags3}
        img={crypto}
      />

      <ProjectTemplate
        projectName="Clock"
        projectDesc="Project Description"
        tags={tags4}
        img={clock}
      />

      <ProjectTemplate
        projectName="MEDI Bootstrap"
        projectDesc="Project Description"
        tags={tags5}
        img={bootstrap}
      />

      <div></div>
    </div>
  );
};

export default Projects;
