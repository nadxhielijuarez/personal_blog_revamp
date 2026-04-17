import React, { JSX } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ImLinkedin } from "react-icons/im";
import { DiGithubBadge } from "react-icons/di";
import "../css/original.css";

export default function Footer(): JSX.Element {
  return (
    <div className="footer-container" id="myFooter">
      <div className="footer-content">
      <Link href="https://www.linkedin.com/in/nadxhieli-juarez-6b3595191/">
        <ImLinkedin className="footer-social-image" />
      </Link>

      <Link href="https://github.com/nadxhielijuarez">
        <DiGithubBadge className="footer-social-image" />

      </Link>
      </div>


    </div>
  );
}

