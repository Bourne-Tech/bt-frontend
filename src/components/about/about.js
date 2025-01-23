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
                      about bourne technology
                    </span>
                    <h2 className="sectionTitle__big">
                      We empower businesses with sustainable and assured cyber
                      defenses
                    </h2>
                  </div>
                  <p className="aboutContent__text">
                    At Bourne Technology, we merge innovation with
                    responsibility to create secure digital foundations for
                    businesses worldwide. Guided by our commitment to
                    sustainability, we bring cybersecurity to the forefront,
                    safeguarding what matters most while upholding ethical and
                    sustainable practices. With global expertise and local
                    assurance, our comprehensive suite of professional services
                    caters to diverse industries, ensuring tailored solutions
                    that protect and empower your business. By combining
                    cutting-edge security with sustainable strategies, we secure
                    your digital future with trust, precision, and purpose.
                  </p>
                  <span className="aboutContent__quote">
                    We can help your business grow securely and sustainably.
                  </span>
                  <Link
                    onClick={ClickHandler}
                    className="btn btn--styleOne btn--secondary it-btn"
                    to="/contact"
                  >
                    <span className="btn__text">Contact Us</span>
                    <i className="fa-solid fa-phone-alt btn__icon"></i>
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