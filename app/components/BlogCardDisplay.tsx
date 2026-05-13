import {JSX} from 'react';
import Link from "next/link";
import type { StaticImageData } from "next/image";
import CardTagList from './CardTagList';

type BlogCardDisplay = {
    id?: number;
    image: string | StaticImageData;
    imageTitle: string;
    contentTitle: string;
    tags?: string[];
    routeLink?: string;
    DatePosted?: string;
};
export default function BlogCardDisplay({
    id,
    image, 
    imageTitle,
    contentTitle,
    tags = [],
    routeLink,
    DatePosted,
}: BlogCardDisplay)
{
    const resolvedRouteLink = routeLink ?? (id ? `/BlogArticlePage?postId=${id}` : undefined);
    const imageSrc = typeof image === "string" ? image : image.src;
    const squareContent = (
        <article className="BlogCardDisplay">
            <div className="BlogCardDisplayImageFrame">
                <img className="BlogCardDisplayImage" src={imageSrc}  alt={imageTitle} />
            </div>
            <div className="BlogCardDisplay-Body">
                <CardTagList tags={tags} className="BlogCardDisplay-Tags" />
                <div className= "BlogCardDisplay-ContentTitle">{contentTitle}</div>
                {DatePosted ? <div className="BlogCardDisplay-DatePosted">{DatePosted}</div> : null}
            </div>
        </article>
    );
    return (
        resolvedRouteLink ? <Link className="BlogCardDisplay-link" href={resolvedRouteLink}>{squareContent}</Link> : squareContent
    );
}