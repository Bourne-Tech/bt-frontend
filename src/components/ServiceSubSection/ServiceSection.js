import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../images/stories/cyberSecurityConsulting.jpg";
import img2 from "../../images/stories/securityAwarenessTraining.jpg";
import img3 from "../../images/stories/eLearning.jpg";

import Services from "../../components/about3/about3";

const ServiceSection = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <div>
      <Services />

      <section className="joinSection position-relative overflow-hidden">
        <div className="serviceSectionLeft">
          <img src={img1} alt="BourneTech" />
        </div>
        <div className="container">
          <div className="row justify-content-end">
            <div className="col-lg-6">
              <div className="joinContent">
                <div className="row justify-content-end">
                  <div className="col-10">
                    <div className="sectionTitle mb-20">
                      <span className="sectionTitle__small justify-content-end">
                        <i className="fa-solid fa-shield btn__icon"></i>
                        Cyber Security Consulting
                      </span>
                    </div>
                  </div>
                </div>
                <p className="joinContent__text">
                  Our expert consultants work closely with executives and
                  business leaders to refine technology architecture and
                  strengthen cybersecurity strategies. By conducting
                  comprehensive assessments and delivering tailored solutions,
                  we help organizations establish a resilient security
                  foundation through a holistic, business-driven approach. Our
                  services are designed to meet your unique needs, offering
                  solutions such as risk assessments, policy development and
                  implementation, cloud integration strategies, and network
                  architecture enhancements.
                  <br />
                  <br />
                  Let’s fortify your security posture together — schedule a
                  consultation!
                  <br />
                  <br />
                  <b>
                    Top Features: ✓ Risk Governance ✓ Foundation building ✓ IT
                    architectural design
                  </b>
                </p>
                <Link
                  onClick={ClickHandler}
                  to="/contact"
                  className="btn btn--styleOne btn--black it-btn"
                >
                  <span className="btn__text">Schedule a call now</span>
                  <i className="fa-solid fa-phone btn__icon"></i>
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
      </section>
      <section className="joinSection position-relative overflow-hidden">
        <div className="serviceSectionRight">
          <img src={img2} alt="BourneTech" />
        </div>
        <div className="container ms-0">
          <div className="row justify-content-start">
            <div className="col-lg-6">
              <div className="joinContent text-start">
                <div className="row justify-content-start">
                  <div className="col-10">
                    <div className="sectionTitle mb-20">
                      <span className="sectionTitle__small justify-content-start">
                        <i className="fa-solid fa-key btn__icon"></i>
                        Security Awareness Training
                      </span>
                    </div>
                  </div>
                </div>
                <p className="joinContent__text">
                  Our cybersecurity awareness training stands apart with live,
                  instructor-led sessions—delivered in-house or
                  virtually—customized for specific business units. This
                  tailored approach ensures maximum retention and fosters a
                  culture of risk awareness across your organization. We offer
                  flexible training schedules, including quarterly, semi-annual,
                  and annual sessions, with specialized programs for both
                  technical and non-technical teams. Empower your workforce with
                  the knowledge to stay secure.
                  <br />
                  <br />
                  Schedule your training session today!
                  <br />
                  <br />
                  <b>
                    Top Features: ✓ Risk aware culture ✓ Live Instructor ✓
                    Target to audience
                  </b>
                </p>
                <Link
                  onClick={ClickHandler}
                  to="/contact"
                  className="btn btn--styleOne btn--black it-btn"
                >
                  <span className="btn__text">Schedule a call now</span>
                  <i className="fa-solid fa-phone btn__icon"></i>
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
      </section>
      <section className="joinSection position-relative overflow-hidden">
        <div className="serviceSectionLeft">
          <img src={img3} alt="BourneTech" />
        </div>
        <div className="container">
          <div className="row justify-content-end">
            <div className="col-lg-6">
              <div className="joinContent">
                <div className="row justify-content-end">
                  <div className="col-10">
                    <div className="sectionTitle mb-20">
                      <span className="sectionTitle__small justify-content-end">
                        <i className="fa-solid fa-laptop btn__icon"></i>
                        E-Learning
                      </span>
                    </div>
                  </div>
                </div>
                <p className="joinContent__text">
                  Our exclusive 10-week online cybersecurity course is designed
                  for C-suite executives, whether you're new to technology or
                  have prior experience. This program builds confidence in
                  making informed IT and cybersecurity decisions that impact
                  your organization’s success. With a maximum of seven attendees
                  per cohort, we provide personalized training and mentorship
                  tailored to your industry’s needs. Throughout the program,
                  you’ll gain insights into industry standards, cybersecurity
                  fundamentals, and best practices, while engaging in hands-on
                  projects that can be directly implemented within your company.
                  <br /><br />
                  Take control of your organization’s cybersecurity
                  future—enroll today!
                  <br /><br />
                  <b>Top Features: ✓ Optimization ✓ Mentorship ✓ Customizable approach</b>
                </p>
                <Link
                  onClick={ClickHandler}
                  to="/contact"
                  className="btn btn--styleOne btn--black it-btn"
                >
                  <span className="btn__text">Schedule a call now</span>
                  <i className="fa-solid fa-heart btn__icon"></i>
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
      </section>
    </div>
  );
};

export default ServiceSection;
