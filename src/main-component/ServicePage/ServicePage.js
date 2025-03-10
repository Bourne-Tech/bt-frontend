import React, { Fragment } from "react";
// import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";
// import img1 from "../../images/stories/cyberSecurityConsulting.jpg";
// import img2 from "../../images/stories/securityAwarenessTraining.jpg";
// import img3 from "../../images/stories/eLearning.jpg";

import ServiceSection from "../../components/ServiceSubSection/ServiceSection";


const ServicePage = (props) => {

  // const ClickHandler = () => {
  //   window.scrollTo(10, 0);
  // };

  return (
    <Fragment>
      <Header hclass={"header--styleFour"} />
      <main className="main">
        <PageTitle pageTitle={"Our Services"} pagesub={"Services"} />

        {/* <section className="stories pt-100 pb-20">
          <div className="container">
            <div className="row">
              <div className="col-lg-11">
                <div className="serviceDetailsContent">
                  <h2 className="serviceDetailsContent__heading mb-45 text-uppercase">
                    Cyber Security Consulting
                  </h2>
                </div>
              </div>
              <div className="col-lg-4 mb-30">
                <div className="innerWrapperSidebar">
                  <div className="sidebarWidget">
                    <div className="sidebarTitle">
                      <h5 className="sidebarTitle__heading text-uppercase mb-30">
                        Direct Contact us
                      </h5>
                    </div>
                    <Link
                      onClick={ClickHandler}
                      className="btn btn--styleOne btn--black it-btn"
                      to="/contact"
                    >
                      <span className="btn__text">Schedule A Call Now</span>
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

              <div className="col-lg-8 mb-30">
                <div className="innerWrapper">
                  <div className="donationDetails storiesDetails">
                    <div className="donationDetails__header mb-45">
                      <figure className="thumb mb-45">
                        <img src={img1} alt="BourneTech" />
                      </figure>
                    </div>
                    <p className="donationDetails__text storiesDetails__text storiesDetails__text--first mb-30">
                      Our expert consultants collaborate directly with
                      executives and business leaders to enhance technology
                      architecture and fortify cybersecurity strategies. Through
                      comprehensive scoping and tailored solutions, we help
                      organizations build a robust security foundation with a
                      holistic, business-driven approach.
                    </p>
                    <p className="donationDetails__text mb-30">
                      Our services are customized to fit your unique business
                      needs. We offer a wide range of solutions, including risk
                      assessments, policy development and implementation, cloud
                      integration strategies, network architecture enhancements,
                      and more.
                    </p>
                    <p className="donationDetails__text mb-30">
                      Let’s strengthen your security posture together. Contact
                      us today to schedule a consultation!
                    </p>
                    <h4 className="donationDetails__heading mb-25">
                      Top Features
                    </h4>
                    <ul>
                      <li>✓ Risk Governance </li>
                      <li>✓ Foundation building</li>
                      <li>✓ IT architectural design</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="stories pt-20 pb-20">
          <div className="container">
            <div className="row">
              <div className="col-lg-11">
                <div className="serviceDetailsContent">
                  <h2 className="serviceDetailsContent__heading mb-45 text-uppercase">
                    Security Awareness Training
                  </h2>
                </div>
              </div>

              <div className="col-lg-8 mb-30">
                <div className="innerWrapper">
                  <div className="donationDetails storiesDetails">
                    <div className="donationDetails__header mb-45">
                      <figure className="thumb mb-45">
                        <img src={img2} alt="BourneTech" />
                      </figure>
                    </div>
                    <p className="donationDetails__text storiesDetails__text storiesDetails__text--first mb-30">
                      Our cybersecurity awareness training stands apart with
                      live, instructor-led sessions—delivered in-house or
                      virtually—customized for specific business units. This
                      tailored approach ensures maximum retention and fosters a
                      culture of risk awareness across your organization.
                    </p>
                    <p className="donationDetails__text mb-30">
                      We offer flexible training schedules, including quarterly,
                      semi-annual, and annual sessions, with specialized
                      programs for both technical and non-technical teams.
                      Empower your workforce with the knowledge to stay secure.
                      Schedule your training session today!
                    </p>
                    <p className="donationDetails__text mb-30">
                      Schedule your training session today!
                    </p>
                    <h4 className="donationDetails__heading mb-25">
                      Top Features
                    </h4>
                    <ul>
                      <li>✓ Risk aware culture</li>
                      <li>✓ Live Instructor</li>
                      <li>✓ Target to audience</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-30">
                <div className="innerWrapperSidebar">
                  <div className="sidebarWidget">
                    <div className="sidebarTitle">
                      <h5 className="sidebarTitle__heading text-uppercase mb-30">
                        Direct Contact us
                      </h5>
                    </div>
                    <Link
                      onClick={ClickHandler}
                      className="btn btn--styleOne btn--black it-btn"
                      to="/contact"
                    >
                      <span className="btn__text">Schedule A Call Now</span>
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
        </section>
        <section className="stories pt-20 pb-20">
          <div className="container">
            <div className="row">
              <div className="col-lg-11">
                <div className="serviceDetailsContent">
                  <h2 className="serviceDetailsContent__heading mb-45 text-uppercase">
                    E-Learning
                  </h2>
                </div>
              </div>
              <div className="col-lg-4 mb-30">
                <div className="innerWrapperSidebar">
                  <div className="sidebarWidget">
                    <div className="sidebarTitle">
                      <h5 className="sidebarTitle__heading text-uppercase mb-30">
                        Direct Contact us
                      </h5>
                    </div>
                    <Link
                      onClick={ClickHandler}
                      className="btn btn--styleOne btn--black it-btn"
                      to="/contact"
                    >
                      <span className="btn__text">Schedule A Call Now</span>
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

              <div className="col-lg-8 mb-30">
                <div className="innerWrapper">
                  <div className="donationDetails storiesDetails">
                    <div className="donationDetails__header mb-45">
                      <figure className="thumb mb-45">
                        <img src={img3} alt="BourneTech" />
                      </figure>
                    </div>
                    <p className="donationDetails__text storiesDetails__text storiesDetails__text--first mb-30">
                      Our exclusive 10-week online cybersecurity course is
                      designed specifically for C-suite executives, whether
                      you're new to technology or have prior experience. This
                      program builds confidence in making informed IT and
                      cybersecurity decisions that impact your organization’s
                      success.
                    </p>
                    <p className="donationDetails__text mb-30">
                      With a maximum of seven attendees per cohort, we ensure
                      personalized training and mentorship tailored to your
                      industry’s unique needs. Throughout the program, you’ll
                      gain insights into industry standards, cybersecurity
                      fundamentals, and best practices. You'll also engage in
                      hands-on projects that can be directly implemented within
                      your company, empowering you to lead with security in
                      mind. Take control of your organization’s cybersecurity
                      future. Enroll today!
                    </p>
                    <p className="donationDetails__text mb-30">
                      Throughout the program, you’ll gain insights into industry
                      standards, cybersecurity fundamentals, and best practices.
                      You'll also engage in hands-on projects that can be
                      directly implemented within your company, empowering you
                      to lead with security in mind. Take control of your
                      organization’s cybersecurity future. Enroll today!
                    </p>
                    <p className="donationDetails__text mb-30">
                      Take control of your organization’s cybersecurity future.
                      Enroll today!
                    </p>
                    <h4 className="donationDetails__heading mb-25">
                      Top Features
                    </h4>
                    <ul>
                      <li>✓ Optimization </li>
                      <li>✓ Mentorship </li>
                      <li>✓ Customizable approach</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <ServiceSection />
      </main>
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default ServicePage;
