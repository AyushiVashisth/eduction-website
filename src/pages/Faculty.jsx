import React from "react";
import "../styles/Faculty.css";
import Footer from "../components/Home/Footer";

const Faculty = () => {
  return (
    <>
      <div className="faculty">
        <h2>Faculty Information</h2>
        <h3>D. L. Ed. Department Faculty List</h3>
        <div className="faculty-grid">
          <div className="faculty-card">
            <img
              src="https://www.teacherhorizons.com/advice/wp-content/uploads/Teaching-CV-Photograph.jpg"
              alt="Faculty"
            />
            <div className="name">Smt. Rani Kumari</div>
            <div className="overlay">
              <p style={{ fontWeight: "bold", marginBottom: "5px" }}>
                <strong>Name:</strong> Smt. Rani Kumari
              </p>
              <p>
                <strong>Post:</strong> Head of the Department
              </p>
              <p>
                <strong>Qualification:</strong> M.A. (Sociology) M.Ed.
              </p>
            </div>
          </div>
          <div className="faculty-card">
            <img
              src="https://www.teacherhorizons.com/advice/wp-content/uploads/Teaching-CV-Photograph.jpg"
              alt="Faculty"
            />
            <div className="name"> Shri Vikram Vikas</div>
            <div className="overlay">
              <p>
                <strong>Name:</strong> Shri Vikram Vikas
              </p>
              <p>
                <strong>Post:</strong> Assistant Professor
              </p>
              <p>
                <strong>Qualification:</strong> M.Com., M.Ed.
              </p>
            </div>
          </div>
          <div className="faculty-card">
            <img
              src="https://www.teacherhorizons.com/advice/wp-content/uploads/Teaching-CV-Photograph.jpg"
              alt="Faculty"
            />
            <div className="name">Smt. Rani Kumari</div>
            <div className="overlay">
              <p>
                <strong>Name:</strong> Smt. Rajni Kumari
              </p>
              <p>
                <strong>Post:</strong> Assistant Professor
              </p>
              <p>
                <strong>Qualification:</strong> M.A (History), M.A.
              </p>
            </div>
          </div>
          <div className="faculty-card">
            <img
              src="https://www.teacherhorizons.com/advice/wp-content/uploads/Teaching-CV-Photograph.jpg"
              alt="Faculty"
            />
            <div className="name">Shri Sunil Dutt Mishra</div>
            <div className="overlay">
              <p>
                <strong>Name:</strong> Shri Sunil Dutt Mishra
              </p>
              <p>
                <strong>Post:</strong> Assistant Professor
              </p>
              <p>
                <strong>Qualification:</strong> M.A., M., P.Ed.
              </p>
            </div>
          </div>
          <div className="faculty-card">
            <img
              src="https://www.teacherhorizons.com/advice/wp-content/uploads/Teaching-CV-Photograph.jpg"
              alt="Faculty"
            />
            <div className="name">Shri Ramesh Chandra Singh</div>
            <div className="overlay">
              <p>
                <strong>Name:</strong> Shri Ramesh Chandra Singh
              </p>
              <p>
                <strong>Post:</strong> Assistant Professor
              </p>
              <p>
                <strong>Qualification:</strong> Ten the M0A0
              </p>
            </div>
          </div>
          <div className="faculty-card">
            <img
              src="https://www.teacherhorizons.com/advice/wp-content/uploads/Teaching-CV-Photograph.jpg"
              alt="Faculty"
            />
            <div className="name">Mr. Rajkumar</div>
            <div className="overlay">
              <p>
                <strong>Name:</strong> Mr. Rajkumar
              </p>
              <p>
                <strong>Post:</strong> Assistant Professor
              </p>
              <p>
                <strong>Qualification:</strong> M.A., M., P.Ed.
              </p>
            </div>
          </div>
          <div className="faculty-card">
            <img
              src="https://www.teacherhorizons.com/advice/wp-content/uploads/Teaching-CV-Photograph.jpg"
              alt="Faculty"
            />
            <div className="name">Mr. Akhilesh Minn</div>
            <div className="overlay">
              <p>
                <strong>Name:</strong> Mr. Akhilesh Minn
              </p>
              <p>
                <strong>Post:</strong> Assistant Professor
              </p>
              <p>
                <strong>Qualification:</strong> M.A. Fine Arts, M.A. (Sociology)
                M.A.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Faculty;
