import React from 'react';
import Gallery from '../Gallery'
import { capitalizeFirstLetter } from '../../utils/helpers';


function Projects (props) {
    const { currentCategory } = props;
    
    return(
        <section className="projects">
            <div className="title-container">
                <h1 className="page-title-text">{capitalizeFirstLetter(currentCategory.name)}</h1>
            </div>
            <p>{currentCategory.description}</p> 
            <Gallery></Gallery>
        </section>
    );
};

export default Projects;