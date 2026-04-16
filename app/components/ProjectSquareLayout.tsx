import {JSX} from 'react';
import Link from "next/link";
import type { StaticImageData } from "next/image";

type ProjectSquareLayout = {
    image: string | StaticImageData;
    imageTitle: string;
    contentTitle: string;
    routeLink?: string;
};

export default function ProjectSquareLayout({
    image, 
    imageTitle,
    contentTitle,
    routeLink,
}: ProjectSquareLayout)
{
    const imageSrc = typeof image === "string" ? image : image.src;
    const SqureContent = (
        <>
        <div className="ProjectSquareLayout">
            <img className="ProjectSquareLayoutImage" src={imageSrc}  alt={imageTitle} />
            <div className= "ProjectSquareLayout-ContentTitle">{contentTitle}</div>
        </div>
        </>
    );
    return (
        <div className="ProjectSquareLayout-container">
            {routeLink ? <Link href={routeLink}>{SqureContent}</Link> : SqureContent}
        </div>
    );
}