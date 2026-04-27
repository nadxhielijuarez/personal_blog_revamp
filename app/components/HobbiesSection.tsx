import Hobbie from './Hobbie';
import React, { JSX } from 'react';

export default function HobbiesSection(): JSX.Element {
  return (
    <section id="HobbiesSection" className="HobbiesSection-container">
      <div className="CenteredTitles" id="Hobbie">
        Activities/Hobbies
      </div>

      <h3 />

      <div className="HobbiesRow">
        <Hobbie
          title="Fitness"
          subtitle="Sometimes a run, a pilates class, or a weightlifting session"
          thumbnail="https://img.icons8.com/ios-glyphs/90/dumbbell.png"
        />

        <Hobbie
          title="Code"
          subtitle="Its great seeing ideas come to life!"
          thumbnail="https://img.icons8.com/pastel-glyph/2x/code.png"
        />
      </div>

      <div className="HobbiesRow">
        <Hobbie
          title="Travel"
          subtitle="I travel as often as I can to keep up with friends and family, or explore new places."
          thumbnail="https://img.icons8.com/?size=100&id=zV84ogIhFVFL&format=png&color=000000"
        />

      </div>
    </section>
  );
}
