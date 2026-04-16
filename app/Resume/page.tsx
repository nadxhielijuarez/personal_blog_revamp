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
    // Source - https://stackoverflow.com/a/74577710
// Posted by dreambold, modified by community. See post 'Timeline' for change history
// Retrieved 2026-04-16, License - CC BY-SA 4.0

    <div className="Resume">
      <a
        className="btn content-download button-main button-scheme"
        href="/Nadxhieli_Juarez_Website_Resume.pdf"
        download="Nadxhieli_Juarez_Website_Resume.pdf"
      >
        Download CV
      </a>
      <ResumeYear year={2025} 
      month_data={ [{
        length : 12,
        job_title : 'Software Developer III',
        company : 'Paycom',
        location : 'Irving, TX',
        duration_start : 'Aug. 2024',
        duration_end : 'Jan. 2026',
      }] } 
      Recent={true} 
      image={img1}
      />

  <ResumeYear year={2024} 
      month_data={
        [{length : 12,
          job_title : 'Software Developer II',
          company : 'Paycom',
          location : 'Irving, Texas',
          duration_start : 'Jun. 2023',
          duration_end : 'Aug. 2024',
        }]
      } 
      Recent={false}
      image={img2}
      />


  <ResumeYear year={2023} 
      month_data={
        [{filled : true,
          length : 5,
          job_title : 'Software Developer II',
          company : 'Paycom',
          location : 'Irving, Texas',
          duration_start : 'Jun. 2023',
          duration_end : 'Aug. 2023',
        },
          {filled : false,
            length : 1,
            job_title : '',
            company : '',
            location : '',
            duration_start : '',
            duration_end : '',
          },
          {filled : true,
            length : 6,
            job_title : 'Undergrad TA',
            company : 'Texas A&M University',
            location : 'College Station, Texas',
            duration_start : 'Jan. 2023',
            duration_end : 'May. 2023',
          }
        ]} 
      Recent={false}
      image={img5}
      />

  <ResumeYear year={2022} 
      month_data={
          [{
            filled : true,
            length : 2,
            job_title : 'Software Engineering Intern (QA automation)',
            company : 'Roku',
            location : 'Austin, TX',
            duration_start : 'May 2022',
            duration_end : 'August 2022',
          },
            {
              filled : false,
              length : 2,
              job_title : '',
              company : '',
              location : '',
              duration_start : '',
              duration_end : '',

            },
          {
            filled : true,
            length : 4,
            job_title : 'Software Developer (Part-time)',
            company : 'Centennial Arts',
            location : 'Bryan, Tx',
            duration_start : 'Sept. 2021',
            duration_end : 'Feb. 2022',
          },
          {
            filled : false,
            length : 4,
            job_title : '',
            company : '',
            location : '',
            duration_start : '',
            duration_end : '',
          }
        ]} 
      Recent={false}
      image={img1}
    />

<ResumeYear year={2021} 
    title="Paycom - Software Developer I" 
      description="Not sure how to describe things on here yet." 
      achievements={[]} 
      month_data={ [
        {
          filled : true,
          length : 7,
          job_title : 'Software Engineering Intern (co-op)',
          company : 'WilliamsRDM',
          location : 'Fort Worth, Tx',
          duration_start : 'Jan. 2021',
          duration_end : 'Jul. 2021',
        },
        {
          filled : true,
          length : 1,
          job_title : 'Student IT',
          company : 'Texas A&M University Veterinary Medical Diagnostic Lab',
          location : 'Bryan, Tx',
          duration_start : 'Jul. 2021',
          duration_end : 'Sept. 2021',
        },
          {
          filled : true,
          length : 4,
          job_title : 'Software Developer (Part-time)',
          company : 'Centennial Arts',
          location : 'Bryan, Tx',
          duration_start : 'Sept. 2021',
          duration_end : 'Feb. 2022',
        },
      ] } 
      Recent={false}
      image={img2}
    />
  
  <ResumeYear year={2020} 
      month_data={ [
        {
          filled : true,
          length : 5,
          job_title : 'Owner',
          company : ' CarpentryByNad',
          location : 'Bryan, Texas',
          duration_start : 'Aug. 2020',
          duration_end : 'Dec. 2020',
        },
        {
          filled : true,
          length : 3,
          job_title : 'Free-Lance Web Developer',
          company : 'Freelance',
          location : 'Bryan, Tx',
          duration_start : 'May. 2020',
          duration_end : 'Jul. 2020',
        },
        {
          filled : true,
          length : 5,
          job_title : 'Energy Data Analyst (Student)',
          company : 'TAMU Engineering Extension - Energy Systems Lab',
          location : 'Bryan, Tx',
          duration_start : 'May. 2020',
          duration_end : 'Oct. 2020',
        },
      ] } 
      Recent={false}
      image={img5}
    />

<ResumeYear year={2019} 
      month_data={ [
        {
          filled : true,
          length : 4,
          job_title : 'Energy Data Analyst (Student)',
          company : 'TAMU Engineering Extension - Energy Systems Lab',
          location : 'Bryan, Tx',
          duration_start : 'Jan 2019.',
          duration_end : 'May. 2020',
        },
      ] } 
      Recent={false}
      image={img1}
    />










</div>
  );
}