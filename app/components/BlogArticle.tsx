import React, { JSX } from 'react';
import CardTagList from '../components/CardTagList';
import '../css/article_project_landing.css';
import '../css/article_post.css';
import '../css/original.css';

type BlogArticle = {
    title: string;
    content: string;
    date: string;
    tags: string[];
    image: string;
}

export default function BlogArticle({ title,image, content, date, tags }: BlogArticle): JSX.Element{
    return (
        <div className="BlogArticle">
            <img className="BlogArticle-image" src={image} alt={title} />
            <div className="BlogArticle-title">{title}</div>
            {date ? <p className="BlogArticle-date">{date}</p> : null}
            {content ? (
                <div
                    className="BlogArticle-content"
                    dangerouslySetInnerHTML={{ __html: content }}
                />
            ) : null}
            <CardTagList tags={tags} className="BlogArticle-Tags" />
        </div>
    );
}