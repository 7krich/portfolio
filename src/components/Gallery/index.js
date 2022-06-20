import React from 'react'

function Gallery () {

    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };

    return (
        <container className="flex">
        <div className="img-container">

            {/* proj 1 */}
            <div className="single-photo">
                <a className="link" href="https://limitless-journey-42984.herokuapp.com/" target="_blank" rel="noreferrer"> 
                    <img  
                        src={require(`../../assets/images/fullstack/0.jpg`)}
                        className="gallery-pics"
                        alt= "The B word"
                        key= "The B word"
                    />
                    </a>
                    <button className="gh-buttons" onClick={() => openInNewTab('https://github.com/7krich/proj2')}>
                View Github
                </button>
            </div>

            {/* proj 2 */}
            <div className="single-photo">
            <a className="link" href="https://7krich.github.io/project01/" target="_blank" rel="noreferrer"> 
                <img  
                    src={require(`../../assets/images/front-end/0.jpg`)}
                    className="gallery-pics"
                    alt= "Le Festin"
                    key= "Le Festin"
                />
                </a>
                <button className="gh-buttons" onClick={() => openInNewTab('https://github.com/7krich/project01')}>
                View Github
                </button>
            </div>

            {/* proj 3 */}
            <div className="single-photo">
            <a className="link" href="https://fathomless-cliffs-19323.herokuapp.com/" target="_blank" rel="noreferrer"> 
                <img  
                    src={require(`../../assets/images/pizzaHunt.jpg`)}
                    className="gallery-pics"
                    alt= "Le Festin"
                    key= "Le Festin"
                />
                </a>
                <button className="gh-buttons" onClick={() => openInNewTab('https://github.com/7krich/pizza-hunt')}>
                View Github
                </button>
            </div>

        </div>
    </container>
        
    )
}

export default Gallery