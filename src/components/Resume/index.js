import React from 'react';
import { HiOutlineDocumentDownload } from "react-icons/hi";
import { VscPreview } from "react-icons/vsc";

function Resume () {

    return(
        <section className="title-container">
            <div className="resume-text">
                {/* Work Experience */}
                <div className="ex-section">

                    {/* Rocket Mortgage */}
                    <div className="rkt">
                        <div className ="line-left"></div>
                        <h3 className="heading">
                            Rocket Mortgage
                        </h3>
                        <h4 className="position">
                            Mortgage Banker / Underwriter
                        </h4>
                        <h5>
                            Jan 2020 - May 2022
                        </h5>
                        <ul className="duties">
                            <li>Managed and closed $8.1 million pipeline on a consistent basis.</li>
                            <li>Effectively prepared & presented customized mortgage solutions to potential clients, closing over 40 transactions per month.</li>
                            <li>Evaluated client credit risk based on income, credit, assets and property to meet investor guidelines.</li>
                        </ul>
                    </div>

                    {/* Michigan State */}
                    <div className="msu">
                        <div className ="line-right"></div>
                        <h3 className="ed-heading">
                            Michigan State University
                        </h3>
                        <h4 className="degree">
                            Full Stack Software Development Bootcamp Certificate
                        </h4>
                        <h5>
                            Jan 2020 - July 2022
                        </h5>
                        <ul className="duties">
                            <li>Developed full stack web applications utilizing the M.E.R.N. stack.</li>
                            <li>Constructed CRUD relational databases using mySQL & Sequelize.</li>
                        </ul>
                    </div>

                    {/* NewDay USA */}
                    <div className="newday">
                        <div className ="line-left"></div>
                        <h3 className="heading">
                            NewDay USA
                        </h3>
                        <h4 className="position">
                            Mortgage Banker
                        </h4>
                        <h5>
                            June 2018 - Jan 2020
                        </h5>
                        <ul className="duties">
                            <li>Analyzed customer applications, credit reports and sensitive consumer documentation.</li>
                            <li>Followed up on over 30 inbound, outbound, and direct marketing leads daily.</li>
                            <li>Processed and closed over $1.5 million in VA Cash Out loan volume monthly.</li>
                        </ul>
                    </div>
                </div>

                {/* Education */}
                <div className="ed-section">
                    {/* University of Maryland */}
                    <div className="umd">
                        <div className ="line-right"></div>
                        <h3 className="ed-heading">
                            University of Maryland
                        </h3>
                        <h4 className="degree">
                            Bachelor of Arts, Economics
                        </h4>
                        <h5>
                            Aug 2016 - May 2018
                        </h5>
                        <ul className="duties">
                            <li>Selected coursework: Game Theory, Microeconomics, Business Statistics & Economic Geography</li>
                        </ul>
                    </div>

                    {/* AACC */}
                    <div className="aacc">
                        <div className ="line-left"></div>
                        <h3 className="ed-heading">
                        Anne Arundel Community College
                        </h3>
                        <h4 className="degree">
                            Associate of Arts, Visual Arts
                        </h4>
                        <h4 className="degree">
                            Associate of Applied Science, Management
                        </h4>
                        <h5>
                            Aug 2011 - July 2016
                        </h5>
                        <ul className="duties">
                            <li>Certificate - Business Management(Marketing & Advertising)</li>
                            <li>Certificate - Business Management(Business Communications))</li>
                        </ul>
                    </div>
                </div>

                {/* links */}
                <div className="download-div">
                    <h4>Client Reviews:</h4>
                        <a href="https://social.pr/p/rocket-mortgage-refinance-team/KyleRichnafsky/" target="_blank" rel="noreferrer">
                            <VscPreview></VscPreview>
                        </a>
                </div>

                <div className="download-div">
                    <h4>Download Resume:</h4>
                    <a href="https://drive.google.com/file/d/1eU1ucSxRckMYr-HXHBI4bbcEgYpxiMl-/view?usp=sharing" download target="_blank" rel="noreferrer">
                        <HiOutlineDocumentDownload></HiOutlineDocumentDownload>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Resume;