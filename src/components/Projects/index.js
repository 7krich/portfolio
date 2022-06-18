import React from 'react';
import Gallery from '../Gallery'
import { capitalizeFirstLetter } from '../../utils/helpers';


function Projects (props) {
    const { currentCategory } = props;
    // const [showGallery, setShowGallery] = useState(false)
    return(
        <section>
            <div className="title-containter">
                <h1 className="page-title-text">{capitalizeFirstLetter(currentCategory.name)}</h1>
            </div>
            <p>{currentCategory.description}</p> 
            <Gallery></Gallery>
            {/* <button onClick={() => {setShowGallery(true)}}>Show Gallery</button> */}
            {/* <button onClick={() => {setShowGallery(false)}}>Hide Gallery</button> */}
            {/* { showGallery && <Gallery category={currentCategory.name}/>} */}
               
               

        </section>
    );
};

export default Projects;