import HobbiesSection from './components/HobbiesSection';
import CardSection from './components/CardSection';
import Intro from './components/Intro';
import './css/original.css';
import React, { JSX } from 'react';
import Navbar from './components/Navbar';

export default function Home(): JSX.Element {
  return (
    <div className="home">
      <Navbar />
      <Intro />
      <CardSection />
      <HobbiesSection />
    </div>
  );
}

