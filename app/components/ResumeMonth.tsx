import React, { JSX } from 'react';
import '../css/Resume.css';

type ResumeMonthProps = {
    month?: number;
    filled?: boolean;
    showText?: boolean;
    job_title?: string;
    company?: string;
    location?: string;
    duration_start?: string;
    duration_end?: string;
  };

  export default function ResumeMonth({ month, filled = false, showText = false, job_title, company, location, duration_start, duration_end }: ResumeMonthProps) {
    return (
      <div
        className={`ResumeMonth-container${filled ? " ResumeMonth-container--filled" : ""}`}
        aria-label={month ?? "month block"}
      >
        {showText ? (
            <div className="ResumeMonth-text">
            <div>{job_title}</div>
            <div>{company}</div>
            <div>{location}</div>
            <div>{duration_start} - {duration_end}</div>
            </div>
        ) : null}
      </div>
    );
  }