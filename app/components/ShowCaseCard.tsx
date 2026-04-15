import Link from "next/link";
import type { StaticImageData } from "next/image";
import styles from "./ShowCaseCard.module.css";

type ShowCaseCardProps = {
  image: string | StaticImageData;
  title: string;
  routeLink?: string;
};

export default function ShowCaseCard({
  image,
  title,
  routeLink,
}: ShowCaseCardProps) {
  const imageSrc = typeof image === "string" ? image : image.src;

  const cardContent = (
    <>
      <img className="ShowCaseCardImage" src={imageSrc} alt={title} />
      <div className="ShowCaseCard-overlay">{title}</div>
    </>
  );

  return (
    <div className="ShowCaseCard-container">
      {routeLink ? <Link href={routeLink}>{cardContent}</Link> : cardContent}
    </div>
  );
}
