import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';
import { Helmet } from "react-helmet"

import Tile from '../components/Tile'
import HowItWorks from '../components/HowItWorks'
import Schedule from '../components/Schedule'
import Pricing from '../components/Pricing'
import Contact from '../components/Contact'

const Quote = styled.div`
  padding: 0.7em;
  font-size: 2em;
  line-height: 1.2em;
  color: #fff;

  @media (min-width: 576px) {
    padding: 1em;
    font-size: 2.5em;
  }

  @media (min-width: 768px) {
    padding: 2em 1em;
    font-size: 2.5em;
  }

  @media (min-width: 992px) {
    padding: 1em;
  }

  @media (min-width: 1200px) {
    padding: 1.5em;
  }

  @media (min-width: 1500px) {
    font-size: 2.8em;
  }

  @media (min-width: 2000px) {
    padding: 2em;
    font-size: 3em;
  }
`;

const YouTubeRow = styled.div`
  position: relative;
  height: 0;
  overflow: hidden;
  padding-bottom: 56.25%;
  flex: none !important;
  max-width: none !important;
`;

const YouTube = styled.iframe`
  border: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
`;

const Card = ({color, title, buttonLabel, url}) => (
  <div className={`card bg-${color}`}>
    <div className="card-body">
      <h4 className="card-title text-center">
        {title}
      </h4>
      <div className="card-stats justify-content-center">
        <a href={url} className="btn btn-white btn-lg btn-round">
          {buttonLabel}
          <div className="ripple-container"></div>
        </a>
      </div>
    </div>
  </div>
)


const Heading = ({children}) => (
  <h1 className="title text-center text-uppercase">
    {children}
  </h1>
)

const IndexPage = () => (
  <main>
    <Helmet>
      <meta charSet="utf-8" />
      <title>CrossFit Secaucus - Cost-effective, Small Group Personal Training</title>
      <meta name="description" content="Crossfit Secaucus is cost-effective small group personal training located in Secaucus, NJ. We also serves the areas around Lyndhurst, North Arlington, Kearny, Harrison, Rutherford, Union City, Weehawken, West New York, Hoboken and Jersey City." />
      <link rel="canonical" href="https://crossfit-secaucus.com/" />

      <script type="application/ld+json">
      {`
        {
          "@context": "http://schema.org",
          "@type": "HealthClub",
          "@id": "https://crossfit-secaucus.com/",
          "name": "CrossFit Secaucus",
          "image": [
            "https://crossfit-secaucus.com/img/cover.jpg",
            "https://crossfit-secaucus.com/img/athlete-4-right.jpg"
           ],
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "333 Meadowlands Pkwy",
            "addressLocality": "Secaucus",
            "addressRegion": "NJ",
            "postalCode": "07094",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 40.779334,
            "longitude": -74.0820209
          },
          "telephone": "+12015036326",
          "potentialAction": {
            "@type": "ReserveAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://crossfit-secaucus.com/trial-class",
              "inLanguage": "en-US",
              "actionPlatform": [
                "http://schema.org/DesktopWebPlatform",
                "http://schema.org/IOSPlatform",
                "http://schema.org/AndroidPlatform"
              ]
            },
            "result": {
              "@type": "Reservation",
              "name": "Try A Class"
            }
          }
        }
      `}
      </script>
    </Helmet>

    <section className="section section-basic">
      <div className="container">
        <div className="row">
          <div className="col-md-10 ml-auto mr-auto">
            <h1 className="title text-center">GET STARTED TODAY</h1>
          </div>
          <div className="col-md-5 ml-auto ">
            <Link to="/get-started#new-to-crossfit" className="btn btn-success btn-block btn-round">
              I'm New to CrossFit
            </Link>

          </div>

          <div className="col-md-5  mr-auto">
            <Link to="/get-started#experienced" className="btn btn-info btn-block btn-round">
              Not my first rodeo
            </Link>
          </div>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="row no-gutters">
        <Tile url="/img/athlete-left.jpg" className="d-sm-none d-lg-block"/>
        <Tile className="" style={{background: 'linear-gradient(60deg, #26c6da, #0097a7)'}}>
          <Quote>
            CrossFit Secaucus offers cost-effective small group personal training.
          </Quote>
        </Tile>
        <Tile url="/img/athlete-right.jpg" />
      </div>
    </section>

    <section id="how-it-works">
      <HowItWorks heading={ <Heading>How It Works</Heading> } />
    </section>

    <section>
      <div className="row no-gutters">
        <Tile url="/img/athlete-2-left.jpg" className="d-none d-lg-block" />
        <Tile url="/img/athlete-2-center.jpg" className="d-none d-lg-block" />
        <Tile url="/img/athlete-2-right.jpg" />
      </div>
    </section>

    <section id="schedule">
      <Schedule heading={ <Heading>Schedule</Heading> } />
    </section>

    <section className="section">
      <div className="row no-gutters">
        <Tile url="/img/athlete-3-center.jpg" className="d-none d-lg-block" />
        <Tile url="/img/athletes-center.jpg" />
        <Tile url="/img/athlete-3-right.jpg" className="d-none d-lg-block" />
      </div>
    </section>

    <section id="pricing">
      <Pricing />
    </section>

    <section className="section">
      <div className="container">
        <div className="row">
          <YouTubeRow className="col-md-4 ml-auto mr-auto">
            <YouTube width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/U-a3vMFRlLA?modestbranding=1&rel=0&showsearch=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></YouTube>
          </YouTubeRow>
        </div>
      </div>
    </section>

    <section id="contact">
      <Contact />
    </section>

  </main>
)

export default IndexPage
