import React from 'react';
import Resume from '../Resume'
import {capitalizeFirstLetter} from '../../utils/helpers'

function Experience (props) {
    const { currentCategory } = props;

    return(
        <section className="title-containter">
            <h1 className="page-title-text">{capitalizeFirstLetter(currentCategory.name)}</h1>
            <div className="resumeText">
                <Resume></Resume>
            </div>
        </section>
    );
};

export default Experience;