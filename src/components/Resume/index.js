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
                            Michigan State University, East Lansing, MI
                        </h3>
                        <h4 className="degree">
                            Full Stack Software Development Bootcamp Certificate
                        </h4>
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
                            University of Maryland, College Park, MD
                        </h3>
                        <h4 className="degree">
                            Bachelor of Arts, Economics
                        </h4>
                        <ul className="duties">
                            <li>Selected coursework: Game Theory, Microeconomics, Business Statistics & Economic Geography</li>
                        </ul>
                    </div>

                    {/* AACC */}
                    <div className="aacc">
                        <div className ="line-left"></div>
                        <h3 className="ed-heading">
                        Anne Arundel Community College, Arnold, MD
                        </h3>
                        <h4 className="degree">
                            Associate of Arts, Visual Arts
                        </h4>
                        <h4 className="degree">
                            Associate of Applied Science, Management
                        </h4>
                        <ul className="duties">
                            <li>Certificate - Business Management(Marketing & Advertising)</li>
                            <li>Certificate - Business Management(Business Communications))</li>
                        </ul>
                    </div>
                </div>

                {/* links */}
                <div className="download-div">
                    <h5>Client Reviews:</h5>
                        <a href="https://social.pr/p/rocket-mortgage-refinance-team/KyleRichnafsky/">
                            <VscPreview></VscPreview>
                        </a>
                </div>

                <div className="download-div">
                    <h5>Download Resume:</h5>
                    <a href="../../../public/resume/Resume6-2022.pdf" download>
                        <HiOutlineDocumentDownload></HiOutlineDocumentDownload>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Resume;