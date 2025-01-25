import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom'
import { Fade, Slide } from "react-awesome-reveal";
import map from '../../images/shapes/shapes2.svg'
import icon1 from '../../images/icons/feature-icon-1.svg'
import icon2 from "../../images/icons/feature-icon-4.svg";
import icon3 from '../../images/icons/feature-icon-5.svg'
// import DonationListSection from '../DonationListSection/DonationListSection';

const Features = [
  {
    title: "Consulting",
    des: "We help executives optimize cybersecurity and IT infrastructure to reduce costs and maximize efficiency.",
    icon: icon1,
    width: "99%",
    duration: 1000,
    featureLink: "/service",
  },
  {
    title: "Training",
    des: "We provide live, tailored cybersecurity training—virtual or in-person—designed for specific organizational departments.",
    icon: icon2,
    width: "100%",
    duration: 1200,
    featureLink: "/service",
  },
  {
    title: "E-Learning",
    des: "Our 10-week program enhances C-level leaders' cybersecurity expertise, empowering informed business decisions.",
    icon: icon3,
    width: "100%",
    duration: 1400,
    featureLink: "/service",
  },
];


const FeaturesSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }


    return (
      <div className="featureArea pt-70">
        <div className="featureArea__map">
          <img src={map} alt="Bourne Map" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="keyFeatureBox mb-30">
                <div className="row">
                  {Features.map((features, fitem) => (
                    <div
                      className="col-lg-4 wow animate__fadeInLeft"
                      key={fitem}
                    >
                      <Slide
                        direction="left"
                        triggerOnce={"false"}
                        duration={features.duration}
                      >
                        <div>
                          <div className="keyFeatureBlock mb-30">
                            <div className="keyFeatureBlock__left">
                              <span className="keyFeatureBlock__icon">
                                <img
                                  src={features.icon}
                                  alt="Bourne Feature_Icon"
                                />
                              </span>
                            </div>
                            <div className="keyFeatureBlock__content">
                              <h3 className="keyFeatureBlock__heading">
                                <Link
                                  onClick={ClickHandler}
                                  className="keyFeatureBlock__heading__link"
                                  to="/service"
                                >
                                  {features.title}
                                </Link>
                              </h3>
                              <p className="keyFeatureBlock__text">
                                {features.des}
                              </p>
                            </div>
                            <div
                              className="keyFeatureBlock__skill skill-bar"
                              style={{ width: features.width }}
                            >
                              <span className="keyFeatureBlock__skill__bar"></span>
                            </div>
                          </div>
                          <div className="d-flex justify-content-center align-items-center">
                            <div className="mb-3 col-lg-6">
                              <Link
                                onClick={ClickHandler}
                                className="btn btn--styleOne btn--black it-btn"
                                to={features.featureLink}
                              >
                                <span className="btn__text">Learn More</span>
                                <span className="it-btn__inner">
                                  <span className="it-btn__blobs">
                                    <span className="it-btn__blob"></span>
                                    <span className="it-btn__blob"></span>
                                    <span className="it-btn__blob"></span>
                                    <span className="it-btn__blob"></span>
                                  </span>
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </Slide>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="donnerArea pt-70 pb-95">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="donnerAreaContent text-center mb-30">
                  <Fade direction="up" triggerOnce={"false"} duration={1200}>
                    <div>
                      <h2
                        className="donnerAreaContent__bigTitle wow animate__fadeInUp"
                        data-wow-duration="1200ms"
                        data-wow-delay="200ms"
                      >
                        <span className="donnerAreaContent__bigTitle__number">
                          12
                        </span>
                        <span className="donnerAreaContent__bigTitle__text">
                          Years
                        </span>
                      </h2>
                    </div>
                  </Fade>
                  <Fade direction="up" triggerOnce={"false"} duration={1400}>
                    <div>
                      <h3
                        className="donnerAreaContent__heading text-uppercase wow animate__fadeInUp"
                        data-wow-duration="1200ms"
                        data-wow-delay="300ms"
                      >
                        of excellence with a proven track record.
                      </h3>
                    </div>
                  </Fade>
                  <Fade direction="up" triggerOnce={"false"} duration={1600}>
                    <div>
                      <Link
                        onClick={ClickHandler}
                        className="btn btn--styleOne btn--black it-btn wow animate__fadeInUp"
                        data-wow-duration="1200ms"
                        data-wow-delay="400ms"
                        to="/about"
                      >
                        <span className="btn__text">Learn More</span>
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
                  </Fade>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <DonationListSection /> */}
      </div>
    );
}

export default FeaturesSection;