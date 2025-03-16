import React from 'react';
import { Link } from "react-router-dom";
import vlntr1 from '../../images/utilites/volunteer-thumb1.jpg'
import vlntr2 from '../../images/users/volunteer-user1.jpg'
import vlntr3 from '../../images/users/volunteer-user2.jpg'
import vlntr4 from '../../images/users/volunteer-user3.jpg'
import vlntr5 from '../../images/users/volunteer-user4.jpg'
import vlntr6 from '../../images/users/volunteer-user5.jpg'
import vlntr7 from '../../images/users/volunteer-user6.jpg'

const CtaSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
      <div className="volunteer pt-130">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-30">
              <div className="volunteerUser">
                <div className="volunteerUser__box">
                  <div className="volunteerUser__thumb">
                    <img src={vlntr1} alt="Gainioz volunteer" />
                  </div>
                  <div className="volunteerUser__profile">
                    <ul>
                      <li>
                        <Link onClick={ClickHandler} to="/donation-listing">
                          <img src={vlntr2} alt="Gainioz" />
                        </Link>
                      </li>
                      <li>
                        <Link onClick={ClickHandler} to="/donation-listing">
                          <img src={vlntr3} alt="Gainioz" />
                        </Link>
                      </li>
                      <li>
                        <Link onClick={ClickHandler} to="/donation-listing">
                          <img src={vlntr4} alt="Gainioz" />
                        </Link>
                      </li>
                      <li>
                        <Link onClick={ClickHandler} to="/donation-listing">
                          <img src={vlntr5} alt="Gainioz" />
                        </Link>
                      </li>
                      <li>
                        <Link onClick={ClickHandler} to="/donation-listing">
                          <img src={vlntr6} alt="Gainioz" />
                        </Link>
                      </li>
                      <li>
                        <Link onClick={ClickHandler} to="/donation-listing">
                          <img src={vlntr7} alt="Gainioz" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-30">
              <div className="aboutContent aboutContent--style3">
                <div className="sectionTitle mb-20">
                  <span className="sectionTitle__small">
                    <i className="fa-solid fa-shield btn__icon"></i>
                    careers
                  </span>
                  <h2 className="sectionTitle__big">Join Our Team</h2>
                </div>
                <span className="aboutContent__quote text-uppercase">
                  Synergy &nbsp;&nbsp;|&nbsp;&nbsp; Resilience
                  &nbsp;&nbsp;|&nbsp;&nbsp; Authentic
                </span>
                <p className="aboutContent__text">
                  Bourne Technology is a leading cyber security organization
                  geared to bring cyber security forefront through assurance and
                  sustainable business practices.
                </p>
                <div className="aboutContent__buttons">
                  <Link
                    onClick={ClickHandler}
                    className="btn btn--styleOne btn--black it-btn"
                    to="#"
                  >
                    <span className="btn__text">Search for Openings</span>
                    <i className="fa-solid fa-magnifying-glass btn__icon"></i>
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
      </div>
    );
}

export default CtaSection;