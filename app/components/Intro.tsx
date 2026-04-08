import Image from 'next/image';
import PersonalWebsite from '../images/Personal_Website1.png';
import React, { JSX } from 'react';

export default function Intro(): JSX.Element {
  return (
    <div>
      <div className="Intro-section">
        <div className="Intro-column">
          <div id="HeadingContainer" className="vertical-line">
            <div className="HeadingContainText">
              <h1>About</h1>
              <br />
              <h1>Me</h1>
            </div>
          </div>

          <div className="intro-row">
            I am a Software Developer with experience building scalable systems,
            modernizing codebases, and improving user experiences.
            <br />
            <br />
          </div>
        </div>

        <div className="Intro-column">
          <div className="IntroImgContainer">
            <Image className="IntroImg" src={PersonalWebsite} alt="Personal Website" />
          </div>
        </div>
      </div>

      <div className="intro-row-650">
        I am a Software Developer with experience building scalable systems,
        modernizing codebases, and improving user experiences.
        <br />
        <br />
      </div>
    </div>
  );
}
