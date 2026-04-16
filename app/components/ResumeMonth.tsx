import React, { JSX } from 'react';
import '../css/Resume.css';

type ResumeMonthProps = {
    month?: string;
};

export default function ResumeMonth({ month }: ResumeMonthProps): JSX.Element {
    return <div className="ResumeMonth-container" aria-label={month ?? 'month block'} />;
}