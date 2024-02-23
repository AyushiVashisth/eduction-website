import React from "react";
import "../styles/AboutUs.css";
import Footer from "../components/Home/Footer";

const AboutUs = () => {
  return (
    <>
      <div className="about-us-container-section">
        <h1 className="section-heading">
          Welcome to Sindhu College of Education
        </h1>
        <div className="about-us-container">
          <div className="images-container">
            <img
              src="https://www.motherteresacollege.net/images/banner2.jpg"
              alt="Image1"
              className="image-item"
            />
            <img
              src="https://www.motherteresacollege.net/images/banner5.jpg"
              alt="Image2"
              className="image-item"
            />
            <img
              src="https://www.motherteresacollege.net/images/banner4.jpg"
              alt="Image3"
              className="image-item"
            />
            <img
              src="https://www.motherteresacollege.net/images/banner3.jpg"
              alt="Image4"
              className="image-item"
            />
          </div>

          <div className="content-container">
            <div className="content-item">
              <h2 className="content-heading">About Us</h2>
              <p className="content-text">
                Sindhu College of Education is dedicated to providing dynamic
                and competent primary and secondary school teachers. Our mission
                is to work for 'Social, Cultural & Spiritual' upliftment and
                uphold national and global standards in education.
              </p>
            </div>
            <hr className="divider" />
            <div className="content-item">
              <h2 className="content-heading">Faculty</h2>
              <p className="content-text">
                Our college has a team of well-qualified and devoted teachers
                with M.Ed. and Doctorate degrees in various specializations. The
                college is headed by experienced and expert H.O.D. and
                principal.
              </p>
            </div>
            <hr className="divider" />
            <div className="content-item">
              <h2 className="content-heading">Infrastructure and Campus</h2>
              <p className="content-text">
                Our sprawling and impressive campus is housed in a newly
                constructed, aesthetic, and ultra-modern building.
              </p>
            </div>
            <hr className="divider" />
            <div className="content-item">
              <h2 className="content-heading">Admission Information</h2>
              <p className="content-text">
                Admission for D. El. Ed. requires an intermediate or equivalent
                qualification with a minimum of 50% marks. Minimum age for
                admission is 17 years as of 1st July.
              </p>
            </div>
            <hr className="divider" />
            <div className="content-item">
              <h2 className="content-heading">From The Desk Of President</h2>
              <p className="content-text">
                "Teachers are considered as nation builders who work in a
                respectful manner for the upliftment and refinement of our
                society..."
              </p>
            </div>
            <hr className="divider" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
