import React, { JSX } from 'react';
import '../css/Resume.css';

type ResumeMonthProps = {
    month?: string;
    filled?: boolean;
};

export default function ResumeMonth({ month, filled = false }: ResumeMonthProps): JSX.Element {
    return (
        <div
            className={`ResumeMonth-container${filled ? " ResumeMonth-container--filled" : ""}`}
            aria-label={month ?? 'month block'}
        />
    );
}