import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers'

function AboutMe (props) {
    const { currentCategory } = props;

    return(
        <div className="title-containter">
            <h1 className="page-title-text">{capitalizeFirstLetter(currentCategory.name)}</h1>
        </div>
    );
};

export default AboutMe;