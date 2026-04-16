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
          title="Reformer Pilates"
          subtitle="I appreciate the challenge and I really enjoy the community aspect of it as well."
          thumbnail="https://img.icons8.com/ios-glyphs/90/pilates.png"
        />

        <Hobbie
          title="Fitness"
          subtitle="I really enjoy working out, it's a great way to de-stress after a long day."
          thumbnail="https://img.icons8.com/ios-glyphs/90/dumbbell.png"
        />

        <Hobbie
          title="Running"
          subtitle="Runner's high is the best feeling ever. Highly recommend it, great way to turn your brain off & de-stress."
          thumbnail="https://img.icons8.com/?size=100&id=39712&format=png&color=000000"
        />


        <Hobbie
          title="Hiking"
          subtitle="I love nature! I try to explore new trails and enjoy the peacefulness of the outdoors."
          thumbnail="https://img.icons8.com/ios-filled/100/trekking.png"
        />

      


        <Hobbie
          title="Code"
          subtitle="I really enjoy the problem-solving aspect of programming, and the way it allows me to bring my ideas to life."
          thumbnail="https://img.icons8.com/pastel-glyph/2x/code.png"
        />
      </div>

      <div className="HobbiesRow">
        <Hobbie
          title="Travel"
          subtitle="Even if its just a weekend trip to visit family, I travel as much as I can. Its a great way to stay connected with family and friends.
          Also, try new things if I can."
          thumbnail="https://img.icons8.com/?size=100&id=zV84ogIhFVFL&format=png&color=000000"
        />

        <Hobbie
          title="Foodie - Restruants"
          subtitle="I really enjoy a nice restaurant meal. Plus if its fine dining, its a great way to treat yourself."
          thumbnail="https://img.icons8.com/?size=100&id=88539&format=png&color=000000"
        />
      </div>
    </section>
  );
}
