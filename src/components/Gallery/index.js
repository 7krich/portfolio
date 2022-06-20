import React from 'react'

function Gallery () {

    return (
        <container className="flex">
        <div className="img-container">
            <div className="single-photo">
                <a className="link" href="https://limitless-journey-42984.herokuapp.com/" target="_blank" rel="noreferrer"> 
                    <img  
                        src={require(`../../assets/images/fullstack/0.jpg`)}
                        className="gallery-pics"
                        alt= "The B word"
                        key= "The B word"
                    />
                    </a>
                    <button className="gh-buttons" a href="https://github.com/7krich/proj2">View GitHub</button>
            </div>

            <div className="single-photo">
            <a className="link" href="https://7krich.github.io/project01/" target="_blank" rel="noreferrer"> 
                <img  
                    src={require(`../../assets/images/front-end/0.jpg`)}
                    className="gallery-pics"
                    alt= "Le Festin"
                    key= "Le Festin"
                />
                </a>
                <button className="gh-buttons" a href="https://github.com/7krich/project01">View GitHub</button>
            </div>
        </div>
    </container>
        
    )
}

export default Gallery