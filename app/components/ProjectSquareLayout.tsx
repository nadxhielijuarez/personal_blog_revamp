import {JSX} from 'react';
import Link from "next/link";
import type { StaticImageData } from "next/image";
import CardTagList from './CardTagList';

type ProjectSquareLayout = {
    image: string | StaticImageData;
    imageTitle: string;
    contentTitle: string;
    routeLink?: string;
    tags?: string[];
};

export default function ProjectSquareLayout({
    image, 
    imageTitle,
    contentTitle,
    routeLink,
    tags = [],
}: ProjectSquareLayout)
{
    const imageSrc = typeof image === "string" ? image : image.src;
    const SqureContent = (
        <>
        <div className="ProjectSquareLayout">
            <img className="ProjectSquareLayoutImage" src={imageSrc}  alt={imageTitle} />
            <div className= "ProjectSquareLayout-ContentTitle">{contentTitle}</div>
            <CardTagList tags={tags} className="ProjectSquareLayout-Tags" />
        </div>
        </>
    );
    return (
        <div className="ProjectSquareLayout-container">
            {routeLink ? <Link href={routeLink}>{SqureContent}</Link> : SqureContent}
        </div>
    );
}