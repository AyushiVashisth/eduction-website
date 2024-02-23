// LandingPage.js
import React, { useState, useEffect } from "react";
import { slideImageData } from "../../Utils/websiteDate.js";
import "../../styles/Home/LandingPage.css";

const LandingPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === slideImageData.length - 1 ? 0 : prevIndex + 1
      );
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  

  return (
    <div className="landing-page">
      <div className="slider-container">
        <img
          src={slideImageData[currentImageIndex].imageUrl}
          alt={slideImageData[currentImageIndex].altText}
          className="slider-image"
        />
      </div>

      <div className="description-container">
        <div className="left-side">
          <img
            src="https://i.ytimg.com/vi/NtfvEcByA54/hqdefault.jpg"
            alt="name"
            className="left-image"
          />
        </div>
        <div className="right-side">
          <h2>SINDHU COLLEGE OF EDUCATION</h2>
          <p>
            Teachers are considered as nation builders who work in a respectful
            manner for the upliftment The aim of education is the fulfillment of
            a person in all richness of their personality
          </p>
          <p>
            At SCI our goal is to chisel out the best in teacher trainees. Our
            focus is to provide a learning environment where our prospective
            teachers will develop an aptitude for teaching and acquire all
            teaching skills and temperament.
          </p>
          <p>
            We always wish to lay added emphasis on inculcating the spirit of
            service to society and developing a human attitude. To this end, we
            would strive to provide an optimum blend of academics with a rich
            educational exposure to our pupil-teachers so that they can become
            valuable assets to society.
          </p>
        </div>
      </div>

      <div class="section-container">
        <div class="section">
          <h3>AFFILIATION</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            blanditiis repellat consequatur exercitationem, placeat expedita
            atque earum iste in ex magni, corrupti non quis facilis ipsa
            necessitatibus libero fuga? Eveniet!
          </p>
          <p>
            NCTE Recognition: - Registration No.: F.NRC/NCTE/UP-2652/2015/126614
            Dates 19.10.2015
          </p>
        </div>
        <div class="section">
          <h3>TEACHING METHODOLOGY</h3>
          <p>
            An integrated teaching program covering both the theoretical &
            practical aspects effected by way of :-
          </p>
          <ul>
            <li>Lectures</li>
            <li>Exhibition</li>
            <li>Demonstration</li>
            <li>Audio-Visual aids</li>
            <li>Workshops / Seminars</li>
            <li>Practical Projects</li>
          </ul>
        </div>
        <div class="section principal-message">
          <h3>PRINCIPAL’S MESSAGE</h3>
          <img
            src="https://sceedu.in/assets/principal-jZhfmwil.png"
            alt="profile"
          />
          <p>
            “A teacher is a compass that activates the magnets of curiosity,
            knowledge, and wisdom in the pupils.” - Ever Garrison The success of
            any nation depends on the youth who further depends
          </p>
          <button>Read More +</button>
        </div>
      </div>

      <div class="why-siddhu-college">
        <h2>WHY SIDDHU COLLEGE?</h2>
        <div class="full-grid-container">
          <div class="grid-container">
            <div class="grid-item">
              <img
                src="https://www.satyameducation.in/images/icons/wi-fi.jpg"
                alt="wifi"
              />
              <p>Wifi Campus</p>
            </div>
            <div class="grid-item">
              <img
                src="https://www.satyameducation.in/images/icons/ac.jpg"
                alt="profile"
              />
              <p>In-house AC Hostel</p>
            </div>
            <div class="grid-item">
              <img
                src="https://www.satyameducation.in/images/icons/girl.jpg"
                alt="profile"
              />
              <p>Only for Girls</p>
            </div>
            <div class="grid-item">
              <img
                src="https://www.satyameducation.in/images/icons/placement.jpg"
                alt="profile"
              />
              <p>Placement Assistance</p>
            </div>
            <div class="grid-item">
              <img
                src="https://www.satyameducation.in/images/icons/personality-grooming.jpg"
                alt="profile"
              />
              <p>Personality Grooming Classes</p>
            </div>
            <div class="grid-item">
              <img
                src="https://www.satyameducation.in/images/icons/presentation.jpg"
                alt="profile"
              />
              <p>Presentation Skill Development</p>
            </div>
            <div class="grid-item">
              <img
                src="https://www.satyameducation.in/images/icons/educational-toure.jpg"
                alt="profile"
              />
              <p>Educational Tour</p>
            </div>
            <div class="grid-item">
              <img
                src="https://www.satyameducation.in/images/icons/research-projects.jpg"
                alt="profile"
              />
              <p>Research Projects</p>
            </div>
            <div class="grid-item">
              <img
                src="https://www.satyameducation.in/images/icons/time.jpg"
                alt="profile"
              />
              <p>Timely Examination</p>
            </div>
            <div class="grid-item">
              <img
                src="https://www.satyameducation.in/images/icons/merit.jpg"
                alt="profile"
              />
              <p>Admission on Merit Basis</p>
            </div>
          </div>
        </div>
      </div>

      <div class="videos-section">
        <h2>Videos</h2>
        <div class="video-grid">
          <div class="video-item">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/-Tso68N88sk"
              title="NAAC PEER TEAM VISIT - Satyam College of Education, Noida"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div class="video-item">
            <iframe
              width="1519"
              height="526"
              src="https://www.youtube.com/embed/Eg1EoJeMCmk"
              title="visit sindhu college of education"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div class="video-item">
            <iframe
              width="1519"
              height="526"
              src="https://www.youtube.com/embed/NtfvEcByA54?list=PLZJgoGjAhhuNJ720mEPfxzDnD51mPHgPv"
              title="Sindhu College Of Education Visit Farewell Celebration 🎊🎉 Village Sarua Bounsi ShyamBazar Banka"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div class="video-item">
            <iframe
              width="1519"
              height="526"
              src="https://www.youtube.com/embed/NW4o9Dtk74M?list=PLZJgoGjAhhuNJ720mEPfxzDnD51mPHgPv"
              title="Sindhu College Of Education Celebration 🎊 Welcome Freshers Student An Farewell Together"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div class="video-item">
            <iframe
              width="1519"
              height="526"
              src="https://www.youtube.com/embed/OIg4mjZ7Lr8?list=PLZJgoGjAhhuNJ720mEPfxzDnD51mPHgPv"
              title="Sindhu College Of Education Farewell Celebration 🎊🎉 #reels #sorts #viral #trending #bihar"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div class="video-item">
            <iframe
              width="1519"
              height="526"
              src="https://www.youtube.com/embed/xxEkjWVVd1A?list=PLZJgoGjAhhuNJ720mEPfxzDnD51mPHgPv"
              title="Mandar Hill Banka District Short #reels #sorts #viral #trending #trending #train #bihar"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>

      <div class="success-tools">
        <div class="tool">
          <img
            src="https://www.satyameducation.in/images/blog-img-1/22.jpg"
            alt="profile"
          />

          <h3>TOOLS FOR SUCCESS</h3>
          <p>
            To be successful in any field of life, we need to have certain
            qualities in ourselves. Some can be learnt, some are innate. In
            order to be successful
          </p>
          <div class="tool-details">
            <div class="date">February 22, 2024</div>
            <button class="read-more">Read More</button>
          </div>
        </div>
        <div class="tool">
          <img
            src="https://www.satyameducation.in/images/blog-img-1/22.jpg"
            alt="profile"
          />
          <h3>TOOLS FOR SUCCESS</h3>
          <p>
            To be successful in any field of life, we need to have certain
            qualities in ourselves. Some can be learnt, some are innate. In
            order to be successful
          </p>
          <div class="tool-details">
            <div class="date">February 22, 2024</div>
            <button class="read-more">Read More</button>
          </div>
        </div>
        <div class="tool">
          <img
            src="https://www.satyameducation.in/images/blog-img-1/22.jpg"
            alt="profile"
          />
          <h3>TOOLS FOR SUCCESS</h3>
          <p>
            To be successful in any field of life, we need to have certain
            qualities in ourselves. Some can be learnt, some are innate. In
            order to be successful
          </p>
          <div class="tool-details">
            <div class="date">February 22, 2024</div>
            <button class="read-more">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
