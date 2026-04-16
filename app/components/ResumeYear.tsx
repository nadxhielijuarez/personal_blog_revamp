import React, { JSX } from 'react';
import '../css/Resume.css';
import Image from 'next/image';
import img1 from '../images/img1.png';
import img2 from '../images/img2.png';
import img3 from '../images/img3.png';
import img4 from '../images/img4.png';
import img5 from '../images/img5.png';
import img6 from '../images/img6.png';
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
        const months = Array.from({ length: 12 }, (_, index) => index + 1);
        
    return (
        <div className="ResumeYear-section">
            <Image className="ResumeYear-image" src={image} alt="Year Resume Image" />


            <div className="ResumeYear-container">
                <div className="ResumeYear-months" aria-label="resume months">
                    {months.map((monthNumber) => (
                        <ResumeMonth key={monthNumber} month={`Month ${monthNumber}`} />
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