import Image from 'next/image';
import React, { JSX } from 'react';
import '../css/Resume.css';
import ResumeYear from '../components/ResumeYear';
import resume_section_placeholder from '../images/Nadxhieli_Juarez_Resume_Placeholder.png';
import img1 from '../images/img1.png';
import img2 from '../images/img2.png';
import img3 from '../images/img3.png';
import img4 from '../images/img4.png';
import img5 from '../images/img5.png';
import img6 from '../images/img6.png';

export default function Resume(): JSX.Element {
  return (
    <div className="Resume">
      <ResumeYear year={2025} 
      title="Paycom - Software Developer III" 
      description="Not sure how to describe things on here yet." 
      achievements={[]} 
      months_to_fill_in={12} 
      Recent={true} 
      image={img1}
      />




  <ResumeYear year={2024} 
    title="Paycom - Software Developer II" 
      description="Not sure how to describe things on here yet." 
      achievements={[]} 
      months_to_fill_in={12} 
      Recent={false}
      image={img2}
      />


  <ResumeYear year={2023} 
    title="Paycom - Software Developer II" 
      description="Not sure how to describe things on here yet." 
      achievements={[]} 
      months_to_fill_in={12} 
      Recent={false}
      image={img6}
      />

  <ResumeYear year={2022} 
    title="Paycom - Software Developer I" 
      description="Not sure how to describe things on here yet." 
      achievements={[]} 
      months_to_fill_in={12} 
      Recent={false}
      image={img1}
    />

<ResumeYear year={2021} 
    title="Paycom - Software Developer I" 
      description="Not sure how to describe things on here yet." 
      achievements={[]} 
      months_to_fill_in={12} 
      Recent={false}
      image={img5}
    />
  
  <ResumeYear year={2020} 
    title="Paycom - Software Developer I" 
      description="Not sure how to describe things on here yet." 
      achievements={[]} 
      months_to_fill_in={12} 
      Recent={false}
      image={img2}
    />

<ResumeYear year={2019} 
    title="Paycom - Software Developer I" 
      description="Not sure how to describe things on here yet." 
      achievements={[]} 
      months_to_fill_in={12} 
      Recent={false}
      image={img4}
    />











</div>
  );
}