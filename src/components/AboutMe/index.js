import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers'

function AboutMe (props) {
    const { currentCategory } = props;

    return(
        <div className="parent">
            <div className="title-container">
                <h1 className="page-title-text">{capitalizeFirstLetter(currentCategory.name)}</h1>
            </div>

            <div className="profile-container">
                <img className="profile-pic"
                    src={require('../../assets/images/profilePic.JPG')}
                    alt="Author"
                />
            </div>

            <section className="about-me">
                <p>
                    Hello! My name is Kyle Richnafsky and I'm a Full Stack Software Engineer, Credit Underwriter and Banker. I'm 29 years old with a financial services background. My main goal is to use my industry knowledge and newfound skills to improve the FinTech industry.
                </p>
                <p>
                    I love spending time with family, cooking, hiking, golf and traveling in my free time. Over the years I've studied economics, financial markets, sustainability and graphic design. I graduated from the University of Maryland with a B.S. in Economics and a Minor in Sustainability in 2018. Prior to that I received my A.A. in Visual Arts & Business Management.
                </p>
                <p>
                    After spending over 2 years at Rocket Mortgage, I am looking for a new position in the FinTech space. During my time there I was a Mortgage Banker and Credit Underwriter. In all, I've accumulated 4 years of mortgage industry knowledge while serving various roles. During this time I've realized technology's potential to transform the industry and now I'm focused on contributing.
                </p>
                <p>
                    I hope you enjoy my work! it's a culmination of various learning experiences, a passion for clean and functional design and industry knowledge.
                </p>
            </section>
        </div>
    );
};

export default AboutMe;