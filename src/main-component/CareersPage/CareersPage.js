import React, { Fragment } from 'react';
import Header from '../../components/header/Header';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import CtaSection from "../../components/CtaSection/CtaSection";

const CareersPage = (props) => {

    return (
        <Fragment>
            <Header hclass={'header--styleFour'} />
            <main className="main">
                <PageTitle pageTitle={'Careers'} pagesub={'Careers'} pageTop={'Our'}/>
                <CtaSection />
            </main>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default CareersPage;
