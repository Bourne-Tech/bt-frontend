import React, { Fragment } from 'react';
import Header from '../../components/header/Header';
import PageTitle from '../../components/pagetitle/PageTitle';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Footer from '../../components/footer/Footer';
import AboutTab from './AboutTab';
import FunFactSection from '../../components/FunFact/FunFact';
import BlogSection from '../../components/BlogSection/BlogSection';
// import TeamSection from '../../components/TeamSection/TeamSection';

const AboutUsPage = (props) => {

    return (
      <Fragment>
        <Header hclass={"header--styleFour"} />
        <main className="main about-page">
          <PageTitle pageTitle={"About Us"} pagesub={"About"} />
          <section className="about pt-120 pb-105">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="sectionTitle text-center mb-30">
                    <span className="sectionTitle__small justify-content-center">
                      <i className="fa-solid fa-heart btn__icon"></i>
                      about Bourne Technology
                    </span>
                    <h2 className="sectionTitle__big">
                      Meet Your Cyber Guardians
                    </h2>
                  </div>
                </div>
                <div className="col-lg-10 mx-auto">
                  <div className="aboutDetails text-center">
                    <p className="aboutDetailsText mb-20">
                      Bourne Technology is a leading cybersecurity organization
                      dedicated to empowering businesses worldwide across all
                      industries. In today’s digital landscape, security isn’t
                      optional—it’s essential for sustainability and growth. As
                      Benjamin Franklin wisely said, "By failing to prepare, you
                      are preparing to fail." That’s why we provide cutting-edge
                      training and tailored cybersecurity solutions, ensuring
                      our clients are well-equipped to proactively defend
                      against evolving threats.
                    </p>
                    <p className="aboutDetailsText mb-20">
                      Our goal is to give businesses the skills, strategies, and
                      confidence to scale securely and thrive in the
                      ever-changing world of technology. Cybersecurity is no
                      longer just an IT concern—it’s a business imperative.
                      Bourne Technology is here to help you build resilience,
                      protect assets, and drive sustainable success.
                    </p>
                    <p className="anoutDetailsText mb-20">
                      We take a holistic approach, optimizing technology
                      resources through strategic IT architecture and risk
                      management. By aligning security with business objectives,
                      we empower organizations to make informed decisions with
                      confidence. With Bourne Technology by your side, you don’t
                      just adapt to the digital age—you lead it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <AboutTab />
          <FunFactSection />
          {/* <div className="container">
            <div className="row">
              <div className="col-lg-9 mx-auto mb-20">
                <p className="aboutDetailsText mb-20 text-center">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                  dolor sit amet, consectetur, adipisci velit, loremque
                  laudantium, totam rem aperiam, eaque ipsa quae ab illo
                  inventore veritatis et quasi architecto beatae vitae dicta
                  sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                  aspernatur aut odit aut fugit, voluptas sit aspernatur aut
                  odit aut fugit, voluptas sit aspernatur aut odit aut fugit,
                  voluptas si.
                </p>
              </div>
            </div>
          </div> */}
          <BlogSection />
          {/* <TeamSection /> */}
        </main>
        <Footer />
        <Scrollbar />
      </Fragment>
    );
};

export default AboutUsPage;
