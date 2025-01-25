import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';


const MissionVision = (props) => {

    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }


    return (
      <div className="mvv pt-100">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="mvvTabs">
                <div className="mvvTabs__wrapper d-flex align-items-start">
                  <div
                    className="nav nav-pills mb-30"
                    id="v-pills-tab"
                    role="tablist"
                    aria-orientation="vertical"
                  >
                    <Nav tabs className="nav justify-content-center">
                      <NavItem>
                        <NavLink
                          className={classnames({ active: activeTab === "1" })}
                          onClick={() => {
                            toggle("1");
                          }}
                        >
                          It's Everyone's Responsibility
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({ active: activeTab === "2" })}
                          onClick={() => {
                            toggle("2");
                          }}
                        >
                          Prevent Cyberattacks, Save Millions
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({ active: activeTab === "3" })}
                          onClick={() => {
                            toggle("3");
                          }}
                        >
                          Secure Growth with Scalable Solutions
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </div>
                  <TabContent activeTab={activeTab} className="mb-30">
                    <TabPane tabId="1">
                      <div className="mvvTabs__content">
                        <h2 className="mvvTabs__heading">
                          Cybersecurity: A Global Business Imperative
                        </h2>
                        <p className="mvvTabs__text mb-25">
                          Think cybersecurity is just an IT concern? Think
                          again! In fact, 60% of small businesses close within
                          six months of a cyberattack, and the impact is
                          far-reaching—affecting everything from revenue to
                          reputation. With cyber threats constantly evolving,
                          the stakes have never been higher. Every aspect of
                          your business is vulnerable, which is why security can
                          no longer be siloed.
                        </p>
                        <div className="mvvTabs__skills">
                          <div className="mvvTabs__skills__block mb-20">
                            <h4 className="mvvTabs__skills__counter">
                              $
                              <span className="mvvTabs__skills__counter">
                                4.88
                              </span>
                              million
                            </h4>
                            <span className="mvvTabs__skills__title color-title">
                              average cost of data breach in 2024
                            </span>
                          </div>
                          <div className="mvvTabs__skills__block mb-20">
                            <h4 className="mvvTabs__skills__counter">
                              <span className="mvvTabs__skills__counter">
                                10
                              </span>
                              %
                            </h4>
                            <span className="mvvTabs__skills__title color-title">
                              increase in 1 year
                            </span>
                          </div>
                          <div className="mvvTabs__skills__block mb-20">
                            <h4 className="mvvTabs__skills__counter">
                              <span className="mvvTabs__skills__counter">
                                46
                              </span>
                              %
                            </h4>
                            <span className="mvvTabs__skills__title color-title">
                              worldwide attacks are on businesses
                            </span>
                          </div>
                        </div>
                        <p className="mvvTabs__text mb-0">
                          These threats can cripple your business in an instant,
                          jeopardizing not only financial stability but also
                          customer trust and regulatory compliance. As your
                          trusted cybersecurity partner, we ensure robust
                          security is seamlessly integrated into every layer of
                          your business operations, fortifying your company
                          against emerging global risks. With our comprehensive
                          approach, you can stay resilient, compliant, and
                          protected—no matter what the future holds.
                        </p>
                      </div>
                    </TabPane>
                    <TabPane tabId="2">
                      <div className="mvvTabs__content">
                        <h2 className="mvvTabs__heading">
                          Proactive Defense: Saving Millions
                        </h2>
                        <p className="mvvTabs__text mb-25">
                          70% of organizations face cyberattacks annually, and
                          the global cost of cybercrime is projected to hit
                          $10.5 trillion by 2025. Additionally, 63% of breaches
                          occur due to poor access management. These statistics
                          highlight the critical need for robust cybersecurity
                          as businesses scale and expand.
                        </p>
                        <div className="mvvTabs__skills">
                          <div className="mvvTabs__skills__block mb-20">
                            <h4 className="mvvTabs__skills__counter">
                              <span className="mvvTabs__skills__counter">
                                70
                              </span>
                              %
                            </h4>
                            <span className="mvvTabs__skills__title color-title">
                              face cyberattacks
                            </span>
                          </div>
                          <div className="mvvTabs__skills__block mb-20">
                            <h4 className="mvvTabs__skills__counter">
                              $
                              <span className="mvvTabs__skills__counter">
                                10.5
                              </span>
                            </h4>
                            <span className="mvvTabs__skills__title color-title">
                              trillion cost
                            </span>
                          </div>
                          <div className="mvvTabs__skills__block mb-20">
                            <h4 className="mvvTabs__skills__counter">
                              <span className="mvvTabs__skills__counter">
                                63
                              </span>
                              %
                            </h4>
                            <span className="mvvTabs__skills__title color-title">
                              breach due to access
                            </span>
                          </div>
                        </div>
                        <p className="mvvTabs__text mb-0">
                          Our proactive approach is designed to stop threats in
                          their tracks. Through thorough risk assessments,
                          continuous monitoring, and comprehensive employee
                          training, we drastically reduce your exposure to cyber
                          threats while ensuring strict regulatory compliance.
                          By preventing costly breaches and minimizing
                          operational disruptions, we protect your bottom line
                          and shield your business from the financial chaos of a
                          cyberattack.
                        </p>
                      </div>
                    </TabPane>
                    <TabPane tabId="3">
                      <div className="mvvTabs__content">
                        <h2 className="mvvTabs__heading">
                          Secure Growth with Expert-Designed Cyber Strategies
                        </h2>
                        <p className="mvvTabs__text mb-25">
                          As your business grows, the digital landscape becomes
                          more complex and the risks more significant. The drive
                          for expansion often leads to increased reliance on
                          cloud services, remote teams, and digital customer
                          interactions—each of which expands your attack
                          surface. The desire to grow should fuel your desire to
                          strengthen your cybersecurity because without the
                          right foundation, growth can quickly become vulnerable
                          to cyber threats.
                        </p>
                        {/* <div className="mvvTabs__skills">
                          <div className="mvvTabs__skills__block mb-20">
                            <h4 className="mvvTabs__skills__counter">
                              <span className="mvvTabs__skills__counter">
                                65
                              </span>
                              %
                            </h4>
                            <span className="mvvTabs__skills__title color-title">
                              kids need help
                            </span>
                          </div>
                          <div className="mvvTabs__skills__block mb-20">
                            <h4 className="mvvTabs__skills__counter">
                              $
                              <span className="mvvTabs__skills__counter">
                                190
                              </span>
                              k
                            </h4>
                            <span className="mvvTabs__skills__title color-title">
                              raised Now
                            </span>
                          </div>
                          <div className="mvvTabs__skills__block mb-20">
                            <h4 className="mvvTabs__skills__counter">
                              <span className="mvvTabs__skills__counter">
                                220
                              </span>
                              +
                            </h4>
                            <span className="mvvTabs__skills__title color-title">
                              Voleenteer
                            </span>
                          </div>
                        </div> */}
                        <p className="mvvTabs__text mb-0">
                          By proactively investing in a comprehensive
                          cybersecurity strategy, you’re not just protecting
                          your business today—you're setting the foundation for
                          long-term, sustainable growth. Our expert-designed
                          frameworks evolve alongside your business, ensuring
                          that as you scale, your security infrastructure
                          remains robust, flexible, and aligned with compliance
                          requirements. This approach not only safeguards your
                          assets but ensures that growth is built on a solid,
                          secure foundation, minimizing the risk of costly
                          setbacks and protecting your future success.
                        </p>
                      </div>
                    </TabPane>
                  </TabContent>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default MissionVision;