import React from 'react'
import { Link } from 'react-router-dom'
import { Slide } from "react-awesome-reveal";
import icon1 from "../../images/icons/feature-icon-1.svg";
import icon2 from "../../images/icons/feature-icon-4.svg";
import icon3 from "../../images/icons/feature-icon-5.svg";

const Features = [
  {
    title: "Consulting",
    des: "We help executives optimize cybersecurity and IT infrastructure to reduce costs and maximize efficiency.",
    icon: icon1,
    width: "99%",
    duration: 1000,
  },
  {
    title: "Training",
    des: "We provide live, tailored cybersecurity training—virtual or in-person—designed for specific organizational departments.",
    icon: icon2,
    width: "100%",
    duration: 1200,
  },
  {
    title: "E-Learning",
    des: "Our 10-week program enhances C-level leaders' cybersecurity expertise, empowering informed business decisions.",
    icon: icon3,
    width: "100%",
    duration: 1400,
  },
];

const About3 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="about about--style3">
            {/* <div className="aboutThumb3">
                <img src={about1} alt="Gainioz About" />
            </div>
            <div className="container">
                <div className="row align-items-end justify-content-between">
                    <div className="col-lg-6 mb-30">
                        <div className="aboutContent aboutContent--style2">
                            <div className="sectionTitle mb-20">
                                <span className="sectionTitle__small">
                                    <i className="fa-solid fa-heart btn__icon"></i>
                                    about foundation
                                </span>
                                <h2 className="sectionTitle__big">what have we done with
                                    your help</h2>
                            </div>
                            <p className="aboutContent__text">
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                                alteration in some form,
                                by injected humour, or randomised words which don't look even slightly believable. If you are going to
                                use a passage Lorem of
                                Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle There are many
                                variations of
                                passages
                            </p>
                            <span className="aboutContent__quote">join our Action and everyone can help</span>
                            <div className="aboutContent__buttons">
                                <Link onClick={ClickHandler} to="/donation-listing" className="btn btn--styleOne btn--secondary it-btn">
                                    <span className="btn__text">donate now</span>
                                    <i className="fa-solid fa-heart btn__icon"></i>
                                    <span className="it-btn__inner">
                                        <span className="it-btn__blobs">
                                            <span className="it-btn__blob"></span>
                                            <span className="it-btn__blob"></span>
                                            <span className="it-btn__blob"></span>
                                            <span className="it-btn__blob"></span>
                                        </span>
                                    </span>
                                    <svg className="it-btn__animation" xmlns="http://www.w3.org/2000/svg" version="1.1">
                                        <defs>
                                            <filter>
                                                <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10">
                                                </feGaussianBlur>
                                                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo">
                                                </feColorMatrix>
                                                <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
                                            </filter>
                                        </defs>
                                    </svg>
                                </Link>
                                <Link onClick={ClickHandler} to="/volunteers" className="btn btn--styleOne btn--primary it-btn">
                                    <span className="btn__text">became a volenteer</span>
                                    <i className="fa-solid fa-heart btn__icon"></i>
                                    <span className="it-btn__inner">
                                        <span className="it-btn__blobs">
                                            <span className="it-btn__blob"></span>
                                            <span className="it-btn__blob"></span>
                                            <span className="it-btn__blob"></span>
                                            <span className="it-btn__blob"></span>
                                        </span>
                                    </span>
                                    <svg className="it-btn__animation" xmlns="http://www.w3.org/2000/svg" version="1.1">
                                        <defs>
                                            <filter>
                                                <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10">
                                                </feGaussianBlur>
                                                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo">
                                                </feColorMatrix>
                                                <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
                                            </filter>
                                        </defs>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="aboutThumb aboutThumb--style3">
                            <div className="aboutThumb__text">
                                <span className="aboutThumb__text__title">..Since..</span>
                                <span className="aboutThumb__text__year">1998</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="services services--style3">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mx-auto">
                            <div className="sectionTitle text-center mb-65">
                                <span className="sectionTitle__small justify-content-center">
                                    <i className="fa-solid fa-shield btn__icon"></i>
                                    Do you require our expert help?
                                </span>
                                <h2 className="sectionTitle__big">Here is how we can help</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row gx-35 pt-5">
                        {Features.map((features, fitem) => (
                            <div className="col-lg-4 col-md-6 col-12" key={fitem}>
                                <Slide direction='up' triggerOnce={'false'} duration={features.duration}>
                                    <div>
                                        <div className="keyFeatureBlock keyFeatureBlock--style4 mb-30">
                                            <div className="keyFeatureBlock__left">
                                                <span className="keyFeatureBlock__icon">
                                                    <img src={features.icon} alt="Gainioz Feature_Icon" />
                                                </span>
                                            </div>
                                            <div className="keyFeatureBlock__content">
                                                <h3 className="keyFeatureBlock__heading">
                                                    <Link onClick={ClickHandler} className="keyFeatureBlock__heading__link" to="/service">
                                                        {features.title}
                                                    </Link>
                                                </h3>
                                                <p className="keyFeatureBlock__text">{features.des}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Slide>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About3;