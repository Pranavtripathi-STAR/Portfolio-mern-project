import React from "react";
import "./About.css";
import myPhoto from "../../assets/images/myPhoto.jpg";
const About = () => {
  return (
    <>
<div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                src={myPhoto}
                alt="profile_pic"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
                I am an aspiring Software Developer with a strong interest in Web Development and AI/ML.
                I have a solid foundation in C and JavaScript.
                Currently, I am strengthening my skills in Java and Data Structures & Algorithms.
                I have built a full-stack project, StudyNotion, gaining experience in frontend and backend development.
                I am also learning AI and Machine Learning using Python and related tools.
                I am a quick learner, disciplined, and passionate about solving problems.
                My goal is to build impactful solutions and grow as a developer.
              </p>
            </div>
          </div>
        </div>

    </>
  );
};

export default About;
