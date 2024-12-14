import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import Dashboard from "./Ig2/IntersestGroup2";
import styles from "./InterestGroups.module.css";
import fvimg from "./assets/fvimg.png";
import { useState } from "react";

const InterestGroups = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselItems = [
    {
      title: "Title 1",
      date: "Date",
      time: "Time",
      location: "Location",
    },
    {
      title: "Title 2",
      date: "Date",
      time: "Time",
      location: "Location",
    },
    {
      title: "Title 3",
      date: "Date",
      time: "Time",
      location: "Location",
    },
    {
      title: "Title 3",
      date: "Date",
      time: "Time",
      location: "Location",
    },
    {
      title: "Title 3",
      date: "Date",
      time: "Time",
      location: "Location",
    },
    {
      title: "Title 3",
      date: "Date",
      time: "Time",
      location: "Location",
    },
    // Add more items as needed
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselItems.length) % carouselItems.length
    );
  };

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.contentSide}>
          <h1 className={styles.title}>Web Development</h1>

          <p className={styles.description}>
            Ever wondered how web development works? Learn everything about how
            all your get lectures from A to Z. Direct student's work management
            system along with scheduling and time save lectures. Our development
            team has taken care and understand your needs to providing better
            data functionalities.
          </p>

          <div className={styles.offerInfo}>
            <span className={styles.highlight}>Offers From:</span> Display Till
            All Sit Record Lobby
            <br />
            <span className={styles.highlight}>Last Week Record:</span> Today
            And Till Storage Week
          </div>

          <button className={styles.primaryButton}>Discover More</button>
        </div>

        <div className={styles.imageSide}>
          <div className={styles.heroImage}>
            <img
              src={fvimg}
              alt="Web Development Illustration"
              className={styles.mainImage}
            />
          </div>
        </div>

        <div>
          <h3 className={styles.learningTitle}>Community Partners</h3>

          <div className={styles.partnersContainer}>
            <div className={styles.partnersSection}>
              <div className={styles.partnersTrack}>
                <div className={styles.partnerLogos}>
                  <div className={styles.partnerLogo}>PTGBIGAMERS</div>
                  <div className={styles.partnerLogo}></div>
                  <div className={styles.partnerLogo}></div>
                  <div className={styles.partnerLogo}></div>
                  <div className={styles.partnerLogo}></div>
                  <div className={styles.partnerLogo}></div>
                  <div className={styles.partnerLogo}></div>
                  <div className={styles.partnerLogo}></div>
                </div>
                <div className={styles.partnerLogos}>
                  <div className={styles.partnerLogo}>PTGBIGAMERS</div>
                  <div className={styles.partnerLogo}></div>
                  <div className={styles.partnerLogo}></div>
                  <div className={styles.partnerLogo}></div>
                  <div className={styles.partnerLogo}></div>
                  <div className={styles.partnerLogo}></div>
                  <div className={styles.partnerLogo}></div>
                  <div className={styles.partnerLogo}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Learning Circles Section */}
        <div className={styles.learningCircles}>
          <h3 className={styles.learningTitle}>Learning Circles</h3>

          <div className={styles.carouselContainer}>
            <button
              className={`${styles.carouselButton} ${styles.prevButton}`}
              onClick={prevSlide}
            >
              ‹
            </button>

            <div className={styles.carouselTrack}>
              {carouselItems.map((item, index) => (
                <div
                  key={index}
                  className={`${styles.carouselCard} ${
                    index === currentSlide ? styles.activeCard : ""
                  }`}
                >
                  <h4 className={styles.cardTitle}>{item.title}</h4>
                  <p className={styles.cardText}>
                    In aliquip aute consequatur integer suscipit vehixuld oats.
                  </p>

                  <div className={styles.cardDetails}>
                    <div className={styles.detailItem}>
                      <span className={styles.icon}>📅</span>
                      <span>{item.date}</span>
                    </div>
                    <div className={styles.detailItem}>
                      <span className={styles.icon}>⏰</span>
                      <span>{item.time}</span>
                    </div>
                    <div className={styles.detailItem}>
                      <span className={styles.icon}>📍</span>
                      <span>{item.location}</span>
                    </div>
                  </div>

                  <button className={styles.joinNowButton}>Join Now</button>
                </div>
              ))}
            </div>

            <button
              className={`${styles.carouselButton} ${styles.nextButton}`}
              onClick={nextSlide}
            >
              ›
            </button>
          </div>
        </div>
      </div>
      <Dashboard />
      <Footer />
    </>
  );
};

export default InterestGroups;
