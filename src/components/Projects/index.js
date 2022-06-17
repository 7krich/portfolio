import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Projects (props) {
    const { currentCategory } = props;
    return(
        <section>
            <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
            <p>{currentCategory.description}</p>
        </section>
    );
};

export default Projects;