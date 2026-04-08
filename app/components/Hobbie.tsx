import React, { JSX } from 'react';


type HobbieProps = {
  title: string;
  subtitle: string;
  thumbnail: string;
};

export default function Hobbie({ title, subtitle, thumbnail }: HobbieProps): JSX.Element {
  return (
    <div className="HobbySection">
      <img className="HobbyImg" src={thumbnail} alt={title} />
      <div className='HobbieSection-title'>{title}</div>
      <div className="HobbySection-paragraphs">{subtitle}</div>
    </div>
  );
}
