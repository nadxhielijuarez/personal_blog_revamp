import Image from 'next/image';
import React, { JSX } from 'react';
import '../css/Resume.css';
import YearResume from '../components/YearResume';
import resume_section_placeholder from '../images/Nadxhieli_Juarez_Resume_Placeholder.png';

export default function Resume(): JSX.Element {
  return (
    <div className="Resume">
      {/* <Image
        className="Resume-placeholder"
        src={resume_section_placeholder}
        alt="Resume Placeholder"
      /> */}
      <YearResume year={2026} title="Software Developer" 
      description="I am a Software Developer with experience building scalable systems, modernizing codebases, and improving user experiences." 
      achievements={[]} 
      months_to_fill_in={12} 
      Recent={true} />
    </div>
  );
}