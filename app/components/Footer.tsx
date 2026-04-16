import React, { JSX } from 'react';
// import { FaBars } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import LinkedInIcon from "../images/linkedIn.png";
import GitHubIcon from "../images/github.png";
import "../css/original.css";

export default function Footer(): JSX.Element {
  return (
    <div className="footer-container" id="myFooter">
      <div className="footer-content">
      <Link href="https://www.linkedin.com/in/nadxhieli-juarez-6b3595191/">
        <Image
          className="footer-social-image"
          src={LinkedInIcon}
          alt="LinkedIn"
          width={64}
          height={64}
        />
      </Link>

      <Link href="https://github.com/nadxhielijuarez">
        <Image
          className="footer-social-image"
          src={GitHubIcon}
          alt="GitHub"
          width={64}
          height={64}
        />
      </Link>
      </div>


    </div>
  );
}

