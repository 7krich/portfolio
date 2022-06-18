import React from 'react'

function Gallery () {

    // new tab function
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <div>
            <div className="img-container">
            <a className="link" href="https://limitless-journey-42984.herokuapp.com/">
                <img  
                    src={require(`../../assets/images/fullstack/0.jpg`)}
                    className="gallery-pics-large"
                    alt= "The B word"
                    key= "The B word"
                />
                </a>
                <button className="photo-btn" onClick={() => openInNewTab('https://limitless-journey-42984.herokuapp.com/')}>
                VIEW
                </button>
            </div>
        </div>
    )
}

export default Gallery