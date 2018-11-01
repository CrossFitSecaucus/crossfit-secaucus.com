import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const Title = styled(Link)`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.6em !important;

  @media (min-width: 576px) {
    font-size: 2em !important;
  }

  @media (min-width: 768px) {
    font-size: 2.4em !important;
  }
`;


const Header = ({ siteTitle }) => (
  <nav className="navbar navbar-color-on-scroll fixed-top navbar-expand-lg navbar-transparent" data-color-on-scroll="50" id="sectionsNav">
        <div className="container">
            <div className="navbar-translate">
                <Title  to="/" className="navbar-brand">
                  {siteTitle}
                </Title>
                <button className="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                  <span className="navbar-toggler-icon"></span>
                  <span className="navbar-toggler-icon"></span>
                </button>
            </div>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                    <li className="dropdown nav-item">
                        <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
                          Getting Started
                        </a>
                        <div className="dropdown-menu dropdown-with-icons">
                            <Link to="/index.html#how-it-works" className="dropdown-item">
                                <i className="material-icons">list</i> How it works
                            </Link>
                            <Link to="/index.html#schedule" className="dropdown-item">
                                <i className="material-icons">calendar_today</i> Schedule
                            </Link>
                            <Link to="/index.html#pricing" className="dropdown-item">
                                <i className="material-icons">monetization_on</i> Pricing
                            </Link>
                            <Link to="/trial-class" className="dropdown-item">
                                <i className="material-icons">fitness_center</i> Trial Class
                            </Link>
                            <Link to="/get-started" className="dropdown-item">
                                <i className="material-icons">shopping_cart</i> Sign-up
                            </Link>
                        </div>
                    </li>

                    <li className="dropdown nav-item">
                        <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
                          Members
                        </a>
                        <div className="dropdown-menu dropdown-with-icons">
                            <Link to="/wod" className="dropdown-item">
                                <i className="material-icons">fitness_center</i> WOD
                            </Link>
                            <a href="http://schedule.crossfit-secaucus.com" target="_blank" className="dropdown-item">
                                <i className="material-icons">event_available</i> Book Class
                            </a>
                            <a href="http://hoodie.crossfit-secaucus.com" target="_blank" className="dropdown-item d-none">
                                <i className="material-icons">local_offer</i> Apparel
                            </a>
                        </div>
                    </li>

                    <li className="button-container nav-item iframe-extern">
                        <a href="/trial-class" className="btn  btn-warning   btn-round btn-block">
                            <i className="material-icons">fitness_center</i> Try A Class
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
)

export default Header
