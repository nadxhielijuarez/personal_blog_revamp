import type { StaticImageData } from 'next/image';
import ShowCaseCard from './ShowCaseCard';
import Background1 from '../images/bg1.jpg';
import Background3 from '../images/bg3.jpg';
import Background4 from '../images/bg4.jpg';

const cards: Array<{ image: StaticImageData; title: string; routeLink: string }> = [
  {
    image: Background1,
    title: 'Projects',
    routeLink: '/Projects',
  },
  {
    image: Background3,
    title: 'Resume',
    routeLink: '/Resume',
  },
  {
    image: Background4,
    title: 'Learning',
    routeLink: '/LearningBlog',
  },
];

export default function CardRow() {
  return (
    <div className="Row-container">
      {cards.map((card) => (
        <ShowCaseCard key={card.title} {...card} />
      ))}
    </div>
  );
}
