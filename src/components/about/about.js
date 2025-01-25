import React from 'react'
import { Link } from 'react-router-dom'
import about1 from '../../images/man/man-with-globe.jpg'
import mask from '../../images/shapes/mask-shape2.svg'

import shape1 from '../../images/shapes/shield-shape3.svg'
import shape2 from '../../images/shapes/shield-shape4.svg'
import shape3 from '../../images/shapes/love-shape5.svg'
import shape4 from '../../images/shapes/mask-shape3.svg'

import FeaturesSection from '../FeaturesSection/FeaturesSection';

const About = (props) => {


    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
      <section className="about">
        <img
          className="about__shape about__shape--one"
          src={shape1}
          alt="Bour Shape"
        />
        <img
          className="about__shape about__shape--two"
          src={shape2}
          alt="BourneTech Shape"
        />
        <img
          className="about__shape about__shape--three"
          src={shape3}
          alt="BourneTech Shape"
        />
        <div className="aboutArea aboutArea--padding position-relative">
          <img
            className="mask-aboutBack wow animate__fadeInLeft animate__animated"
            data-wow-duration="1200ms"
            data-wow-delay="300ms"
            src={shape4}
            alt="BourneTech Shape"
          />
          <div
            className="mask mask--about wow animate__fadeInLeft animate__animated"
            data-wow-duration="1200ms"
            data-wow-delay="200ms"
          >
            <img src={about1} alt="BourneTech Shape" className="mask__thumb" />
            <img className="mask__overlay" src={mask} alt="BourneTech Shape" />
          </div>
          <div className="container">
            <div className="row justify-content-end">
              <div className="col-lg-6 mb-30">
                <div className="aboutContent">
                  <div className="sectionTitle mb-20">
                    <span className="sectionTitle__small">
                      <i className="fa-solid fa-shield-alt btn__icon"></i>
                      About Bourne Technology
                    </span>
                    <h2 className="sectionTitle__big">
                      Sustainable & Assured Cybersecurity
                    </h2>
                  </div>
                  <p className="aboutContent__text">
                    Bourne Technology blends innovation with responsibility to
                    build secure digital foundations. Committed to
                    sustainability, we provide tailored cybersecurity solutions
                    that protect businesses worldwide while upholding ethical
                    practices. With global expertise and local assurance, we
                    empower organizations with cutting-edge security for a
                    resilient digital future.
                  </p>
                  <span className="aboutContent__quote">
                    We can help your business grow securely and sustainably.
                  </span>
                  <Link
                    onClick={ClickHandler}
                    className="btn btn--styleOne btn--black it-btn"
                    to="/about"
                  >
                    <span className="btn__text">Find out more</span>
                    {/* <i className="fa-solid fa-users btn__icon"></i> */}
                    <span className="it-btn__inner">
                      <span className="it-btn__blobs">
                        <span className="it-btn__blob"></span>
                        <span className="it-btn__blob"></span>
                        <span className="it-btn__blob"></span>
                        <span className="it-btn__blob"></span>
                      </span>
                    </span>
                    <svg
                      className="it-btn__animation"
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                    >
                      <defs>
                        <filter>
                          <feGaussianBlur
                            in="SourceGraphic"
                            result="blur"
                            stdDeviation="10"
                          ></feGaussianBlur>
                          <feColorMatrix
                            in="blur"
                            mode="matrix"
                            values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7"
                            result="goo"
                          ></feColorMatrix>
                          <feBlend
                            in2="goo"
                            in="SourceGraphic"
                            result="mix"
                          ></feBlend>
                        </filter>
                      </defs>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FeaturesSection />
      </section>
    );
}

export default About;