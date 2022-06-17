import React, { useState } from 'react'
import Modal from '../Modal';

function Gallery ({ category }) {

    // set isModalOpen initial state to false
    const [isModalOpen, setIsModalOpen] = useState(false);
    // manage the current photo state & make the data accessable to the modal component
    const [currentPhoto, setCurrentPhoto] = useState();

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
                <a href="https://limitless-journey-42984.herokuapp.com/">
                    <img
                        src={require(`../../assets/images/fullstack/0.jpg`)}
                        alt= "The B word"
                        className="img-thumbnail mx-1"
                        key= "The B word"
                    />
                </a>
            </div>
        </div>
    )
}

export default Gallery