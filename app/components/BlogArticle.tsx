import React, {JSX}from 'react';
import CardTagList from '../components/CardTagList';
import '../css/article_project_landing.css';
import '../css/original.css';
import Image from 'next/image';

type BlogArticle = {
    title: string;
    content: string;
    date: string;
    tags: string[];
    image: string;
}

export default function BlogArticle({ title,image, content, date, tags }: BlogArticle): JSX.Element{
    return (
        <>
           
      <img className="HobbyImg" src={image} alt={title} />
            <h1>{title}</h1>
            <p>{content}</p>
            <p>{date}</p>
            <CardTagList tags={tags} className="BlogArticle-Tags" />
        </>
    );
}