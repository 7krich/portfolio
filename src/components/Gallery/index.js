import React from 'react'

function Gallery () {

    return (
        <div>
            <div>
                <img 
                    src={require(`../../assets/images/fullstack/0.jpg`)}
                    id="gallery-pics-large"
                    className="gallery-pics"
                    alt= "The B word"
                    key= "The B word"
                />
            </div>
        </div>
    )
}

export default Gallery