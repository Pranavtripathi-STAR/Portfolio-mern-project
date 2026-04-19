import React from "react";
import "./Menus.css";
import { Link } from "react-scroll";
import myPhoto from "../../assets/images/myPhoto.jpg";
import {
  FcAbout,
  FcBiotech,
  FcBusinessContact,
  FcHome,
  FcPortraitMode,
  FcReadingEbook,
  FcVideoProjector,
} from "react-icons/fc";

const Menus = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          {/* Profile Image */}
          <div className="navbar-profile-pic">
            <img src={myPhoto} alt="profile pic" />
          </div>

          {/* Menu Items */}
          <div className="nav-items">
            <div className="nav-item">

              <div className="nav-link">
                <Link to="home" smooth={true} offset={-100} duration={100}>
                  <FcHome /> Home
                </Link>
              </div>

              <div className="nav-link">
                <Link to="about" smooth={true} offset={-100} duration={100}>
                  <FcAbout /> About
                </Link>
              </div>

              <div className="nav-link">
                <Link to="education" smooth={true} offset={-100} duration={100}>
                  <FcReadingEbook /> Education
                </Link>
              </div>

              <div className="nav-link">
                <Link to="techstack" smooth={true} offset={-100} duration={100}>
                  <FcBiotech /> Tech Stack
                </Link>
              </div>

              <div className="nav-link">
                <Link to="projects" smooth={true} offset={-100} duration={100}>
                  <FcVideoProjector /> Projects
                </Link>
              </div>

              <div className="nav-link">
                <Link to="work" smooth={true} offset={-100} duration={100}>
                  <FcPortraitMode /> Work Experience
                </Link>
              </div>

              <div className="nav-link">
                <Link to="contact" smooth={true} offset={-100} duration={100}>
                  <FcBusinessContact /> Contact
                </Link>
              </div>

            </div>
          </div>
        </>
      ) : (
        <>
          <div className="nav-items">
            <div className="nav-item">

              <div className="nav-link">
                <Link to="home" smooth={true} offset={-100} duration={100}>
                  <FcHome />
                </Link>
              </div>

              <div className="nav-link">
                <Link to="about" smooth={true} offset={-100} duration={100}>
                  <FcAbout />
                </Link>
              </div>

              <div className="nav-link">
                <Link to="education" smooth={true} offset={-100} duration={100}>
                  <FcReadingEbook />
                </Link>
              </div>

              <div className="nav-link">
                <Link to="techstack" smooth={true} offset={-100} duration={100}>
                  <FcBiotech />
                </Link>
              </div>

              <div className="nav-link">
                <Link to="projects" smooth={true} offset={-100} duration={100}>
                  <FcVideoProjector />
                </Link>
              </div>

              <div className="nav-link">
                <Link to="work" smooth={true} offset={-100} duration={100}>
                  <FcPortraitMode />
                </Link>
              </div>

              <div className="nav-link">
                <Link to="contact" smooth={true} offset={-100} duration={100}>
                  <FcBusinessContact />
                </Link>
              </div>

            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Menus;