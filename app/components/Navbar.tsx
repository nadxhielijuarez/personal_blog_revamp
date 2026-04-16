import React, { JSX } from 'react';
// import { FaBars } from 'react-icons/fa';
import Link from 'next/link';

export default function Navbar(): JSX.Element {

  return (
    <div className="topnav" id="myTopnav">
      <Link href="/">Home</Link>
      <Link href="/Resume">Resume</Link>
      <Link href="/Projects">My Projects</Link>
      <Link href="/LearningBlog">Learning Blog</Link>
      <button className="icon">
        {/* <FaBars /> */}
      </button>
    </div>
  );
}

