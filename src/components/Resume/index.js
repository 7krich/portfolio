import React from 'react';
import { GrDocumentDownload } from "react-icons/gr";

function Resume () {
    return(
        <section className="title-containter">
            <div className="resume-text">
                {/* Work Experience */}
                <div className="ex-section">
                    <h2> Work Experience </h2>
                    {/* Rocket Mortgage */}
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

                    {/* NewDay USA */}
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

                {/* Education */}
                <div className="ed-section">
                    <h2> Education </h2>
                    {/* University of Maryland */}
                    <h3 className="ed-heading">
                        University of Maryland, College Park, MD
                    </h3>
                    <h4 className="degree">
                        Bachelor of Arts, Economics
                    </h4>
                    <ul className="duties">
                        <li>Selected coursework: Game Theory, Microeconomics, Business Statistics & Economic Geography</li>
                    </ul>

                    {/* Michigan State */}
                    <h3 className="ed-heading">
                        Michigan State University, Lansing, MI
                    </h3>
                    <h4 className="degree">
                        Full Stack Software Development Bootcamp Certificate
                    </h4>
                    <ul className="duties">
                        <li>Developed full stack web applications utilizing the M.E.R.N. stack.</li>
                        <li>Constructed CRUD relational databases using mySQL & Sequelize.</li>
                    </ul>

                    {/* AACC */}
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
                <div className="download-div">
                    <a href="../assets/images/Resume6-2022.pdf" download>
                        <GrDocumentDownload></GrDocumentDownload>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Resume;