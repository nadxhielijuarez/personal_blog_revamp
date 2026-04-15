import React, { JSX } from 'react';
import ShowCaseCard from '../components/ShowCaseCard';
import AddContentSquare from "../images/AddNewContent2.png";
import '../css/content_square_layout.css';


export default function CreateNewLanding(): JSX.Element {
  return (
    <>
      <div className="CreateNewLanding-container">

        <div className="CreateNewLanding-card">
            <div className="CreateNewLanding-title-override"> 
                Create New Blog Post 
            </div>            
            <ShowCaseCard
            image={AddContentSquare}
            title=""
            routeLink="/CreateNewBlogPost"
            />            
        </div>
        <div className="CreateNewLanding-card"> 
            <div className="CreateNewLanding-title-override"> 
            Create New Project 
            </div>
        <ShowCaseCard
          image={AddContentSquare}
          title=""
          routeLink="/CreateNewProject"
        />            
        </div>

      </div>
    </>
  );
}




