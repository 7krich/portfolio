import React from 'react';
import Gallery from '../Gallery'
import { capitalizeFirstLetter } from '../../utils/helpers';
import { useState } from 'react'

function Projects (props) {
    const { currentCategory } = props;
    const [showGallery, setShowGallery] = useState(false)
    return(
        <section>
            <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
            <p>{currentCategory.description}</p> 
            
            <button onClick={() => {setShowGallery(true)}}>Show Gallery</button>
            <button onClick={() => {setShowGallery(false)}}>Hide Gallery</button>
            { showGallery && <Gallery category={currentCategory.name}/>}
               
               

        </section>
    );
};

export default Projects;