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
            <a className="link" href="https://github.com/7krich/run-buddy.git" target="_blank" rel="noreferrer"> 
                <img  
                    src={require(`../../assets/images/runBuddy.png`)}
                    className="gallery-pics"
                    alt= "Run Buddy"
                    key= "Run Buddy"
                />
                </a>
                <button className="gh-buttons" onClick={() => openInNewTab('https://github.com/7krich/run-buddy')}>
                View Github
                </button>
            </div>

            {/* proj 3 */}
            <div className="single-photo">
            <a className="link" href="https://stark-shelf-25788.herokuapp.com/" target="_blank" rel="noreferrer"> 
                <img  
                    src={require(`../../assets/images/noteTaker.png`)}
                    className="gallery-pics"
                    alt= "Note Taker"
                    key= "Note Taker"
                />
                </a>
                <button className="gh-buttons" onClick={() => openInNewTab('https://github.com/7krich/Express-Note-Taker')}>
                View Github
                </button>
            </div>
        </div>
    </container>
        
    )
}

export default Gallery