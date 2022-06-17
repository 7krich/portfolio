import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
    // add useState hook to have option to easilty change categories in future
    const {
        categories = [],
        setCurrentCategory,
        currentCategory
    } = props;

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name);
    }, [currentCategory]);

    return(
        <header className="flex-row">
            <h2>
                <a className="main" href="/">
                    <img className="portfolio-pic"
                    src={require('../../assets/portfolioPortrait.jpg')}
                    alt="Author"
                    />
                    <div className="title">
                    PORTFOLIO
                    </div>
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    {categories.map((category) => (
                        <li className={`nav-items ${
                            // if true, return navActive
                            currentCategory.name === category.name && `navActive`
                        }`}
                        // outermost element must have a key attribute
                        // keep track of elements in VDOM
                        key={category.name}
                        >
                            <span className="nav-items"
                                onClick={() => {setCurrentCategory(category)
                            }}
                            >
                                {capitalizeFirstLetter(category.name)}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Nav;