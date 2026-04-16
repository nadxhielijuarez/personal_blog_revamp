import React from 'react';
import learning_blog_placeholder from '../images/NextJs_learning1.jpeg';
import ProjectSquareLayout from '../components/ProjectSquareLayout';
import Image from 'next/image';
import blog_image from '../images/projects_image.png';
import TagSection from '../components/TagSection';
import {getAllProjects} from '@/lib/db/project';

export default async function Projects() {
    const projects = await getAllProjects();
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

    {
        projects.map((project) =>
            <ProjectSquareLayout
                key={project.id}
                image={project.project_image}
                contentTitle={project.project_title}
                tags={project.tag_list
                    .split(",")
                    .map((tag) => tag.trim())
                    .filter(Boolean)}
            />
        )
    }
   
    </>
}