import React from 'react'
import { Link } from 'react-router-dom'
import shape from '../../images/shapes/footerShape2.png'
import logo from '../../images/logos/logo2.svg'

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const SubmitHandler = (e) => {
    e.preventDefault()
}


const Footer = (props) => {
    return (
        <footer className="footer footer--bg footer--styleOne pt-70 pb-40">
            <img src={shape} alt="Gainioz Shape" className="footer__shape" />
            <div className="container">
                <div className="row align-items-center">
                    <div className="col">
                        <div className="footer__logo">
                            <img src={logo} alt="Gainioz Logo" className="footer__logo__image" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="footer__social itSocial">
                            <ul>
                                <li>
                                    <Link onClick={ClickHandler} className="facebook" to="/" rel="nofollow">
                                        <i className="fab fa-facebook-f"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={ClickHandler} className="twitter" to="/" rel="nofollow">
                                        <i className="fab fa-twitter"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={ClickHandler} className="instagram" to="/" rel="nofollow">
                                        <i className="fab fa-instagram"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={ClickHandler} className="linkedin" to="/" rel="nofollow">
                                        <i className="fab fa-linkedin-in"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={ClickHandler} className="pinterest" to="/" rel="nofollow">
                                        <i className="fab fa-pinterest-p"></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12">
                        <hr className="footer__line" />
                    </div>
                </div>
                <div className="row">
                    <div className="footer__middle pt-65 pb-35">
                        <div className="row justify-content-between">
                            <div className="col-lg-2 col-md-4 mb-30">
                                <div className="footer__widget">
                                    <div className="footer__title">
                                        <h2 className="footer__heading text-uppercase text-white">About us</h2>
                                    </div>
                                    <div className="footer__menu">
                                        <ul>
                                            <li><Link onClick={ClickHandler} to="/career">Careers</Link></li>
                                            <li><Link onClick={ClickHandler} to="/contact">Contact Us</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 mb-30">
                                <div className="footer__widget">
                                    <div className="footer__title">
                                        <h2 className="footer__heading text-uppercase text-white">Support us</h2>
                                    </div>
                                    <div className="footer__menu">
                                        <ul>
                                            <li><Link onClick={ClickHandler} to="/get-quote">Get Quote</Link></li>
                                            <li><Link onClick={ClickHandler} to="/contact">Privacy & Policy</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 mb-30">
                                <div className="footer__widget">
                                    <div className="footer__title">
                                        <h2 className="footer__heading text-uppercase text-white">Quick LInks</h2>
                                    </div>
                                    <div className="footer__menu">
                                        <ul>
                                            <li><Link onClick={ClickHandler} to="/">Home</Link></li>
                                            <li><Link onClick={ClickHandler} to="/about">About us</Link></li>
                                            <li><Link onClick={ClickHandler} to="/contact">Contact us</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 mb-30">
                                <form action="#" method="post" className="footer__newsletter" onSubmit={SubmitHandler}> 
                                    <div className="footer__title">
                                        <h2 className="footer__heading text-uppercase text-white">News Letter</h2>
                                    </div>
                                    <div className="footer__newsletter__formGroup mb-20">
                                        <input type="email" className="footer__newsletter__input" placeholder="Enter mail" />
                                        <input className="footer__newsletter__button" type="submit" value="Subscribe" />
                                    </div>
                                    <div className="footer__newsletter__formGroup">
                                        <input id="agree" type="checkbox" className="footer__newsletter__check form-check-input" />
                                        <label className="footer__newsletter__label" htmlFor="agree">I agree that my submitted data is
                                            being collected and stored.</label>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="footer__bottom">
                        <div className="row">
                            <div className="col-12">
                                <hr className="footer__line" />
                            </div>
                            <div className="col mb-20">
                                <div className="footer__copyright pt-20">
                                    <p className="footer__copyright__text mb-0">Copyright @ Bourne Technology 2025. All Rights Reserved</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;