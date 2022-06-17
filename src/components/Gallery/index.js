import React, { useState } from 'react'
import Modal from '../Modal';

function Gallery ({ category }) {

    // set isModalOpen initial state to false
    const [isModalOpen, setIsModalOpen] = useState(false);
    // manage the current photo state & make the data accessable to the modal component
    const [currentPhoto, setCurrentPhoto] = useState();

    const [photos] = useState([
        {
          name: 'The B Word',
          category: 'fullstack',
          description: 'My first full stack project, utilizing SQL, Javascript (Sequelize, Node, NPM), Handlebars, CSS',
        },
        {
          name: 'Horiseon',
          category: 'back-end',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Le Festin',
          category: 'front-end',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        }
    ]);

    // manage the current photo state & make the data accessable to the modal component
    const currentPhotos = photos.filter(photo => photo.category === category);

    const toggleModal = (image, i) => {
        // current photo
        setCurrentPhoto({...image, index: i});
        // when toggleModal is exectued value of isModalOpen toggles true/false
        setIsModalOpen(!isModalOpen);
    }

    return (
        <div>
            {isModalOpen &&(
                <Modal onClose={toggleModal} currentPhoto={currentPhoto} />
            )}
            <div className="flex-row">
                {currentPhotos.map((image, i) => (
                    <img
                        src={require(`../../assets/images/${category}/${i}.jpg`)}
                        alt={image.name}
                        className="img-thumbnail mx-1"
                        //event listenter for modal
                        onClick={() => toggleModal(image, i)}
                        key={image.name}
                    />
                ))}
            </div>
        </div>
    )
}

export default Gallery