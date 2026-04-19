import React, { JSX } from 'react';
import '../css/Resume.css';
import Image from 'next/image';
import ResumeMonth from './ResumeMonth';
import { StaticImageData } from 'next/image';

export type MonthData = {
    showText: boolean;
    filled?: boolean;
    length: number;
    job_title?: string;
    company?: string;
    location?: string;
    duration_start?: string;
    duration_end?: string;
  };
type ResumeYearProps = {
    year: number;
    title?: string;
    description?: string;
    achievements?: string[];
    image: string | StaticImageData;
    month_data: MonthData[];
    Recent: boolean;
};

export default function ResumeYear({ 
    year, 
    image,
    month_data, 
    Recent
}: ResumeYearProps) {
        const totalMonths = 12;
        const monthSlots = month_data
        .flatMap((segment) => {
          const safeLength = Math.max(0, Math.floor(segment.length));
          const filled = segment.filled ?? true;
          return Array.from({ length: safeLength }, (_, i) => ({
            filled,
            showText: i === 0 && filled && segment.showText, // only first month in segment
            job_title: segment.job_title ?? "",
            company: segment.company ?? "",
            location: segment.location ?? "",
            duration_start: segment.duration_start ?? "",
            duration_end: segment.duration_end ?? "",
          }));
        })
        .slice(0, totalMonths);
      while (monthSlots.length < totalMonths) {
        monthSlots.push({
          filled: false,
          showText: false,
          job_title: "",
          company: "",
          location: "",
          duration_start: "",
          duration_end: "",
        });
      }
    return (
        <div className="ResumeYear-section">
            <Image className="ResumeYear-image" src={image} alt="Year Resume Image" />
            <div className="ResumeYear-container">
                <div
                    className="ResumeYear-months"
                    aria-label="resume months"> 
                    {monthSlots.map((slot, index) => (
                    <ResumeMonth
                        key={index + 1}
                        month={index + 1}
                        filled={slot.filled}
                        showText={slot.showText}
                        job_title={slot.job_title}
                        company={slot.company}
                        location={slot.location}
                        duration_start={slot.duration_start}
                        duration_end={slot.duration_end}
                    />
                    ))}
                </div>

                <div className="ResumeYear-content">
                    <div className="ResumeYear-year">
                        {year}
                    </div>
                </div>
            </div>
        </div>
    );
}