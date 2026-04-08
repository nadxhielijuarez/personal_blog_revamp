import {JSX} from 'react';
import Link from "next/link";
import type { StaticImageData } from "next/image";

type ContentSquareLayoutProps = {
    image: string | StaticImageData;
    imageTitle: string;
    contentTitle: string;
    routeLink?: string;
};

export default function ContentSquareLayout({
    image, 
    imageTitle,
    contentTitle,
    routeLink,
}: ContentSquareLayoutProps)
{
    const imageSrc = typeof image === "string" ? image : image.src;
    const SqureContent = (
        <>
        <img className="ContentSquareLayoutImage" src={imageSrc}  alt={imageTitle} />
        <div className="ContentSquareLayout-ContentTitle">{contentTitle}</div>
        </>
    );
    return (
        <div className="ContentSquareLayout-container">
            {routeLink ? <Link href={routeLink}>{SqureContent}</Link> : SqureContent}
        </div>
    );
}