import HobbiesSection from './components/HobbiesSection';
import CardSection from './components/CardSection';
import Intro from './components/Intro';
import './css/original.css';
import React, { JSX } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function Home(): JSX.Element {
  const LandingPageText = "This website is just a cool place for me to share my projects and the things I've been learning along the way. I also threw in a little about me, and my career background as well.";
  return (
    <div className="home">
      <Navbar />



      <div>
      <div className="landing-section">
        <div className="Landing-column">
          <div id="HeadingContainer" className="vertical-line">
            <div className="HeadingContainText">
              <h1>Building Things &</h1>
              <br />
              <h1>Learning Things</h1>
            </div>
          </div>

          <div className="intro-row">
         {LandingPageText}
            <br />
            <br />
          </div>
        </div>

        <div className="Intro-column">
          <div className="IntroImgContainer">
           
          </div>
        </div>
      </div>

      <div className="intro-row-650">
      {LandingPageText}     

        <br />
        <br />
      </div>
    </div>

      <CardSection />

      <Footer />
    </div>
  );
}

