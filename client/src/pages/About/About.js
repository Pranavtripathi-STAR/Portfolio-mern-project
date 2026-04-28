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
                 Hello, my name is Pranav Tripathi. I am an aspiring Software Developer with a strong interest in Web Development and Artificial Intelligence/Machine Learning.
                 I have a good foundation in programming languages like C and JavaScript, and I am currently strengthening my skills in Java along with Data Structures and Algorithms.
                 I have worked on a full-stack project called StudyNotion, which helped me gain practical experience in frontend and backend development. Currently,
                 I am also learning AI and Machine Learning using Python and related tools. I am a quick learner, disciplined, and passionate about solving problems.
                 I am looking for opportunities where I can apply my skills, learn continuously, and grow as a developer.
              </p>
            </div>
          </div>
        </div>

    </>
  );
};

export default About;
