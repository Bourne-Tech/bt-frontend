import React from 'react'
import CountUp from 'react-countup';
import map from '../../images/map/map-fact.png'
// import CtaSection from '../CtaSection/CtaSection';


const FunFact = [
  {
    title: "0",
    subTitle: "Mission",
    symbol: "1",
    des: "Our mission is to deliver cybersecurity assurance through pedagogical approaches that enhance risk mitigation and promote sustainable business practices.",
    sclass: "factBlock--one",
  },
  {
    title: "0",
    subTitle: "Vision ",
    symbol: "2",
    des: "Our vision is to be a global leader in cybersecurity education and assurance, empowering businesses to proactively mitigate risks and build sustainable, resilient operations for a secure future.",
    sclass: "factBlock--two",
  },
];


const FunFactSection = (props) => {

    return (

        <section className="fact fact--layout1 position-relative pt-125">
            <img src={map} alt="BourneTech" className="fact__map position-absolute" />
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-md-8 mx-auto">
                        <div className="sectionTitle text-center mb-65">
                            <span className="sectionTitle__small justify-content-center">
                                we are here for you
                            </span>
                            <h2 className="sectionTitle__big">Mission & Vision</h2>
                        </div>
                    </div>
                </div>
                <div className="factWrapper mb-20">
                    <div className="row justify-content-center gx-50">
                        {FunFact.slice(0, 2).map((funfact, fitem) => (
                            <div className="col-lg-4" key={fitem}>
                                <div className={`factBlock ${funfact.sclass}`}>
                                    <h3 className="factBlock__heading"><span className="factBlock__number"><CountUp end={funfact.title} enableScrollSpy /></span><span
                                        className="factBlock__ext">{funfact.symbol}</span>
                                    </h3>
                                    <span className="factBlock__tag">{funfact.subTitle}</span>
                                    <p className="factBlock__text">{funfact.des}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* <CtaSection/> */}
            </div>
        </section>
    )
}

export default FunFactSection;