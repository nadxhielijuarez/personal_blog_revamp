import {JSX} from 'react';
import Link from "next/link";
import type { StaticImageData } from "next/image";
import CardTagList from './CardTagList';

type BlogCardDisplay = {
    image: string | StaticImageData;
    imageTitle: string;
    contentTitle: string;
    tags?: string[];
    routeLink?: string;
};

export default function BlogCardDisplay({
    image, 
    imageTitle,
    contentTitle,
    tags = [],
    routeLink,
}: BlogCardDisplay)
{
    const imageSrc = typeof image === "string" ? image : image.src;
    const SqureContent = (
        <div className="BlogCardDisplay">
            <img className="BlogCardDisplayImage" src={imageSrc}  alt={imageTitle} />
            <div className= "BlogCardDisplay-ContentTitle">{contentTitle}</div>
            <CardTagList tags={tags} className="BlogCardDisplay-Tags" />
        </div>
    );
    return (
        <div className="BlogCardDisplay-container">
            {routeLink ? <Link href={routeLink}>{SqureContent}</Link> : SqureContent}
        </div>
    );
}