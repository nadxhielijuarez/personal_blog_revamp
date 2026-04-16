import React, { JSX } from 'react';
import '../css/Resume.css';
import Image from 'next/image';
import img1 from '../images/img1.png';
import img2 from '../images/img2.png';
import img3 from '../images/img3.png';
import img4 from '../images/img4.png';
import img5 from '../images/img5.png';
import img6 from '../images/img6.png';


type yearResumeProps = {
    year: number;
    title: string;
    description: string;
    achievements: string[];
    months_to_fill_in: number;
    Recent: boolean;
}

export default function yearResume({ year, 
    title, 
    description, 
    achievements, 
    months_to_fill_in, 
    bool}: yearResumeProps) {
        const months = Array.from({ length: months_to_fill_in }, (_, index) => index + 1);
        const images = [img1, img2, img3, img4, img5, img6];
        
    return (
        <div className="yearResume-section">
            <Image className="yearResume-image" src={images[0]} alt="Year Resume Image" />


            <div className="yearResume-container">
                <div className="yearResume-year">
                    {year}
                </div>
                <div className="yearResume-title">
                    {title}
                </div>
                <div className="yearResume-description">
                    {description}
                </div>
            </div>
        </div>
    );
}