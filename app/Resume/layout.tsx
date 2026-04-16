import React, { JSX } from 'react';
import Navbar from '../components/Navbar';
import '../css/article_project_landing.css';
import '../css/original.css';

export default function RootLayout({
    children,
  }:{
    children: React.ReactNode;
  }): JSX.Element {
    return (
        <div className="Resume-container">
            <Navbar />
            {children}
        </div>
    );
}