import React from 'react';
import learning_blog_placeholder from '../images/NextJs_learning1.jpeg';
import ProjectSquareLayout from '../components/ProjectSquareLayout';
import Image from 'next/image';
import blog_image from '../images/projects_image.png';
import TagSection from '../components/TagSection';
import {getAllProjects} from '@/lib/db/project';
import {getAllTags} from '@/lib/db/tag';

function stripHtml(input: string): string {
    return input.replace(/<[^>]*>/g, '').trim();
}

export default async function Projects() {
    const projects = await getAllProjects();
    const tags = await getAllTags();
    const tagTitleById = new Map<number, string>();
    tags.forEach((tag) => {
        const tagId = tag.tag_id ?? tag.id;
        if (typeof tagId === 'number') {
            tagTitleById.set(tagId, tag.tag_title);
        }
    });

    const getTagTitlesForProject = (tagList: string): string[] =>
        tagList
            .split(',')
            .map((value) => Number.parseInt(value.trim(), 10))
            .filter((value) => Number.isInteger(value))
            .map((tagId) => tagTitleById.get(tagId))
            .filter((title): title is string => Boolean(title))
            .map((title) => title);


    return <>
        <div className="blogTitle">
        <div className="blogTitle-column">
        <div id="blogTitle-container" className="vertical-line">
            <div className="blogTitle-text">My Projects</div>
            <br />
        </div>
        </div>
        <div className="blogTitle-column">
            <div className="BlogImageContainer">
            <Image className="BlogImage" src={blog_image} alt="Personal Website" />
            </div>
        </div>
    </div>

    <div className="Projects-container">
    {
        
        projects.map((project) =>
            <ProjectSquareLayout
                key={project.id || ''}
                image={project.project_image || ''}
                contentTitle={project.project_title || ''}
                routeLink={stripHtml(project.project_link || '')}
                tags={getTagTitlesForProject(project.tag_list || '')}
            />
        )
    }
    </div>
    </>
}