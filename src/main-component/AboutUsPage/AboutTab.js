import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import aImg from '../../images/map/map-about-tab.svg'
import aImg1 from '../../images/about/aboutDetailsthumb1.jpg'
import aImg2 from '../../images/about/aboutDetailsthumb2.jpg'
import aImg3 from '../../images/about/aboutDetailsthumb3.jpg'


const AboutTab = (props) => {

    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }


    return (
      <div className="about position-relative">
        <img src={aImg} alt="BourneTech" className="map-about-tab" />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="featureTab">
                <Nav tabs className="nav justify-content-center">
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === "1" })}
                      onClick={() => {
                        toggle("1");
                      }}
                    >
                      Bourne Experts
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === "2" })}
                      onClick={() => {
                        toggle("2");
                      }}
                    >
                      Driven By You
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === "3" })}
                      onClick={() => {
                        toggle("3");
                      }}
                    >
                      Our Core Values
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={activeTab} className="pt-55">
                  <TabPane tabId="1">
                    <div className="row">
                      <div className="col-lg-10 mx-auto">
                        <div className="aboutDetails text-center">
                          <p className="aboutDetailsText mb-20">
                            At Bourne Technology, our team is our greatest
                            asset. Our experts come from diverse backgrounds in
                            technology and business, bringing a wealth of
                            knowledge and hands-on experience to every project.
                            We believe that staying ahead in cybersecurity
                            requires continuous learning, which is why we invest
                            heavily in ongoing in-house training and
                            professional development.
                          </p>
                          <p className="aboutDetailsText mb-20">
                            Our consultants and instructors undergo rigorous
                            upskilling to stay at the forefront of IT trends,
                            emerging threats, and evolving industry standards.
                            This commitment ensures that the solutions we
                            provide are not only cutting-edge but also tailored
                            to meet the modern challenges businesses face. With
                            our team by your side, you gain access to top-tier
                            expertise, forward-thinking strategies, and a
                            proactive approach to cybersecurity.
                          </p>
                        </div>
                        <div className="aboutDetailsThumbs pt-50">
                          <div className="row g-0 align-items-center">
                            <div className="col-lg-4">
                              <div className="aboutDetailsThumb">
                                <img src={aImg1} alt="About BourneTech" />
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <div className="aboutDetailsThumb aboutDetailsThumb--big">
                                <img src={aImg2} alt="About BourneTech" />
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <div className="aboutDetailsThumb">
                                <img src={aImg3} alt="About BourneTech" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabPane>
                  <TabPane tabId="2">
                    <div className="row">
                      <div className="col-lg-10 mx-auto">
                        <div className="aboutDetails text-center">
                          <p className="aboutDetailsText mb-20">
                            Our clients are at the heart of everything we do. We
                            are dedicated to equipping them with the knowledge,
                            skills, and confidence to navigate the evolving
                            digital landscape. Through personalized education
                            and hands-on mentorship, we empower businesses to
                            take control of their cybersecurity and achieve
                            their unique goals.
                          </p>
                          <p className="aboutDetailsText mb-20">
                            By delivering tailored solutions that align with
                            specific objectives, we ensure our clients are
                            prepared to stay ahead of emerging threats. Your
                            success drives our innovation, and we are dedicated
                            to providing the expertise and support needed to
                            build a secure and resilient future.
                          </p>
                        </div>
                        <div className="aboutDetailsThumbs pt-50">
                          <div className="row g-0 align-items-center">
                            <div className="col-lg-4">
                              <div className="aboutDetailsThumb">
                                <img src={aImg1} alt="About BourneTech" />
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <div className="aboutDetailsThumb aboutDetailsThumb--big">
                                <img src={aImg2} alt="About BourneTech" />
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <div className="aboutDetailsThumb">
                                <img src={aImg3} alt="About BourneTech" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabPane>
                  <TabPane tabId="3">
                    <div className="row">
                      <div className="col-lg-10 mx-auto">
                        <div className="aboutDetails text-center">
                          <p className="aboutDetailsText mb-20">
                            At Bourne Technology, our values define who we are
                            and guide everything we do.
                          </p>
                          <p className="aboutDetailsText mb-20">
                            <b>Synergy</b> is at the core of our relationships
                            with clients. We believe in collaboration, working
                            side by side to create solutions that drive success
                            and empower businesses to thrive in an ever-changing
                            digital world.
                          </p>
                          <p className="aboutDetailsText mb-20">
                            <b>Resilience</b> fuels our approach to
                            cybersecurity. We focus on building long-term
                            security solutions that not only protect but also
                            adapt and evolve, ensuring businesses are optimized
                            for future challenges and opportunities.
                          </p>
                          <p className="aboutDetailsText mb-20">
                            <b>Authenticity</b> is the foundation of our ethics.
                            We are committed to transparency, integrity, and
                            delivering honest, reliable solutions that align
                            with our clients’ best interests. These core values
                            are what set us apart and shape the future we’re
                            creating together.
                          </p>
                        </div>
                        <div className="aboutDetailsThumbs pt-50">
                          <div className="row g-0 align-items-center">
                            <div className="col-lg-4">
                              <div className="aboutDetailsThumb">
                                <img src={aImg1} alt="About BourneTech" />
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <div className="aboutDetailsThumb aboutDetailsThumb--big">
                                <img src={aImg2} alt="About BourneTech" />
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <div className="aboutDetailsThumb">
                                <img src={aImg3} alt="About BourneTech" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabPane>
                </TabContent>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default AboutTab;