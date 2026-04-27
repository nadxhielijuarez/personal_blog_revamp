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
            Hi! I'm Nadxhieli, or Nad for short. I'm a software developer with a strong passion for learning, and software development in general. 
            I've been in the industry for a few years now, and I've learned a lot along the way. I've worked on a variety of projects, from small side projects to large scale enterprise applications. 
            I like helping people out as much as I can and I'm always looking for new challenges and opportunities to grow in my career.
            <br />
            Check out my Resume to learn a little more about my background and experience!
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
      Hi! I'm Nadxhieli, or Nad for short. I'm a software developer with a strong passion for learning, and software development in general. 
            I've been in the industry for a few years now, and I've learned a lot along the way. I've worked on a variety of projects, from small side projects to large scale enterprise applications. 
            I like helping people out as much as I can and I'm always looking for new challenges and opportunities to grow in my career.
        <br />
        <br />
      </div>
    </div>
  );
}
