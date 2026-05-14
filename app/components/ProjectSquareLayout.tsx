import Link from "next/link";
import type { StaticImageData } from "next/image";
import CardTagList from './CardTagList';

type ProjectSquareLayout = {
    image: string | StaticImageData;
    contentTitle: string;
    description?: string;
    datePosted?: string;
    routeLink?: string;
    tags?: string[];
};

export default function ProjectSquareLayout({
    image, 
    contentTitle,
    description,
    datePosted,
    routeLink,
    tags = [],
}: ProjectSquareLayout)
{
    const imageSrc = typeof image === "string" ? image : image.src;
    const [featuredTag, ...supportingTags] = tags;
    const hasFooter = Boolean(datePosted) || supportingTags.length > 0;
    const squareContent = (
        <article className="ProjectSquareLayout">
            <div className="ProjectSquareLayoutImageFrame">
                <img className="ProjectSquareLayoutImage" src={imageSrc} alt={contentTitle} />
            </div>
            <div className="ProjectSquareLayout-Body">
                {featuredTag ? <CardTagList tags={[featuredTag]} className="ProjectSquareLayout-FeaturedTags" /> : null}
                <h3 className= "ProjectSquareLayout-ContentTitle">{contentTitle}</h3>
                {description ? <p className="ProjectSquareLayout-Description">{description}</p> : null}
                {hasFooter ? (
                    <div className="ProjectSquareLayout-Footer">
                        {datePosted ? <time className="ProjectSquareLayout-DatePosted">{datePosted}</time> : null}
                        <CardTagList tags={supportingTags} className="ProjectSquareLayout-Tags" />
                    </div>
                ) : null}
            </div>
        </article>
    );
    return (
        <div className="ProjectSquareLayout-container">
            {routeLink ? <Link className="ProjectSquareLayout-link" href={routeLink}>{squareContent}</Link> : squareContent}
        </div>
    );
}