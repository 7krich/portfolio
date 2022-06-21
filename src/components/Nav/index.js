import React, { useState, useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import Hamburger from '../Hamburger'

const Nav = (props) => {
    // add useState hook to have option to easily change categories in future
    const {
        categories = [],
        setCurrentCategory,
        currentCategory
    } = props;
    
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen)
    }

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name);
    }, [currentCategory]);

    return(
        <header className="nav-row">
            <h2>
                <a className="dashboard" href="/portfolio">
                    <img className="portfolio-pic"
                    src={require('../../assets/images/portfolioPortrait.jpg')}
                    alt="Author"
                    />
                    <div className="title">
                    PORTFOLIO
                    </div>
                </a>
            </h2>
            <nav className="dynamic-nav">
                <ul className="nav-row dynamic-flex">
                    {categories.map((category) => (
                        <li className={
                            // if true, return navActive
                            currentCategory.name === category.name ? `navActive` : 'nav-items'
                        }
                        // outermost element must have a key attribute
                        // keep track of elements in VDOM
                        key={category.name}
                        >
                            <span className={currentCategory.name === category.name ? `navActive` : 'nav-items'}
                                onClick={() => {setCurrentCategory(category)
                            }}
                            >
                                {capitalizeFirstLetter(category.name)}
                            </span>
                        </li>
                    ))}
                </ul>

                <div className="hamburger" onClick={toggleHamburger}>
                    <Hamburger isOpen={hamburgerOpen}/>
                </div>

                <style jsx>{`
                @media screen and (max-width: 980px) {
                    .nav-row ul {
                        display: ${hamburgerOpen ? 'inline' : 'none'};
                }
                    .dynamic-nav {
                        padding-top: ${hamburgerOpen ? '40px' : '20px'};
                        padding-bottom: ${hamburgerOpen ? '20px' : '20px'};
                }
                    .portfolio-pic, .title {
                        display: ${hamburgerOpen ? 'inline' : 'none'};
                }
                    footer p {
                        display: ${hamburgerOpen ? 'inline' : 'none'};
                }
                `}</style>
            </nav>
        </header>
    );
};

export default Nav;