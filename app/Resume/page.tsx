import Image from 'next/image';
import React, { JSX } from 'react';
import '../css/Resume.css';
import resume_section_placeholder from '../images/Nadxhieli_Juarez_Resume_Placeholder.png';

export default function Resume(): JSX.Element {
  return (
    <div className="Resume">
      <Image
        className="Resume-placeholder"
        src={resume_section_placeholder}
        alt="Resume Placeholder"
      />
    </div>
  );
}