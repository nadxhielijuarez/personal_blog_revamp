import React, { JSX } from 'react';
import '../css/Resume.css';
import Image from 'next/image';
import ResumeMonth from './ResumeMonth';
import { StaticImageData } from 'next/image';

type ResumeYearProps = {
    year: number;
    title: string;
    description: string;
    achievements: string[];
    months_to_fill_in: number;
    Recent: boolean;
    image: string | StaticImageData;
}

export default function ResumeYear({ year, 
    title, 
    description, 
    achievements, 
    months_to_fill_in, 
    Recent,
    image
}: ResumeYearProps) {
        const monthCount = Math.max(0, Math.min(12, months_to_fill_in));
        const months = Array.from({ length: 12 }, (_, index) => index + 1);

    return (
        <div className="ResumeYear-section">
            <Image className="ResumeYear-image" src={image} alt="Year Resume Image" />


            <div className="ResumeYear-container">
                <div
                    className="ResumeYear-months"
                    aria-label="resume months"
                >
                    {months.map((monthNumber) => (
                        <ResumeMonth
                            key={monthNumber}
                            month={`Month ${monthNumber}`}
                            filled={monthNumber <= monthCount}
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