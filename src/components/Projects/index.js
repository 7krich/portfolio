import React from 'react';
import Gallery from '../Gallery'
import { capitalizeFirstLetter } from '../../utils/helpers';

function Projects (props) {
    const { currentCategory } = props;
    return(
        <section>
            <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
            <p>{currentCategory.description}</p>
            <Gallery category={currentCategory.name}/>
        </section>
    );
};

export default Projects;