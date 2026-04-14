import React, { JSX } from 'react';
import ShowCaseCard from '../components/ShowCaseCard';
import AddContentSquare from "../images/addNewContent.png";
import '../css/original.css';



export default function CreateNewLanding(): JSX.Element {
    return <>

    
    <div className="CreateNewLanding-container">
        <ShowCaseCard
            image={AddContentSquare}
            title="Blog Post"
            routeLink="/CreateNewBlogPost"
        />
        <ShowCaseCard
            image={AddContentSquare}
            title = 'Project'
            routeLink="/CreateNewProject"
        />
    </div>
    </>
};


