import React from 'react'

function Gallery () {

    return (
        <containter className="flex">
        <div className="img-container">
            <a className="link" href="https://limitless-journey-42984.herokuapp.com/" target="_blank" rel="noreferrer"> 
                <img  
                    src={require(`../../assets/images/fullstack/0.jpg`)}
                    className="gallery-pics"
                    alt= "The B word"
                    key= "The B word"
                />
                </a>
            <a className="link" href="https://7krich.github.io/project01/" target="_blank" rel="noreferrer"> 
                <img  
                    src={require(`../../assets/images/front-end/0.jpg`)}
                    className="gallery-pics"
                    alt= "Le Festin"
                    key= "Le Festin"
                />
                </a>
        </div>
    </containter>
        
    )
}

export default Gallery