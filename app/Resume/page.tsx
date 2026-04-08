import Image from 'next/image';
import resume_section_placeholder from './Nadxhieli_Juarez_Resume_Placeholder.png';
import React, { JSX } from 'react';

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