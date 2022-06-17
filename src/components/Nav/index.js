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
        <header>
            <h2>
                <a href="/">
                    <img className="portfolio-pic"
                    src={require('../../assets/portfolioPortrait.jpg')}
                    alt="Author"
                    />
                    Portfolio
                </a>
                
            </h2>
            <nav>
                <ul className ="nav-ul">
                    {categories.map((category) => (
                        <li className={`${
                            // if true, return navActive
                            currentCategory.name === category.name && `navActive`
                        }`}
                        // outermost element must have a key attribute
                        // keep track of elements in VDOM
                        key={category.name}
                        >
                            <span
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
    )
}

export default Nav;