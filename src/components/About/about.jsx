import React from "react";


const About = () => {
    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 py-5">
                        <p className="content p-0 m-0">UI/UX DESIGNER</p>
                        <h1 className="text-dark abt-heading">Hello, my name is Madelyn Torff</h1>
                        <p className="abt-para">Short text with details about you, what you do or your
                            Proffessional career.You can add more information  on the
                            About Page
                        </p>

                        <button className="project-button">Projects</button>
                        <button className="linkedin-button">Linkedin</button>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <div class="container-abt">
                            <svg class="svg-background" xmlns="http://www.w3.org/2000/svg" width="720" height="629" viewBox="0 0 720 629" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M426.755 -247.339C526.01 -242.623 630.416 -205.737 691.019 -128.942C747.053 -57.9359 709.403 42.8884 725.408 131.114C738.276 202.044 786.302 264.961 775.404 336.204C763.332 415.132 724.842 490.453 662.532 542.186C597.271 596.368 510.835 641.895 426.755 625.671C345.261 609.947 319.875 506.823 250.249 462.635C174.069 414.287 41.2528 440.785 6.43092 358.913C-27.6816 278.71 83.9568 208.257 106.308 124.209C131.067 31.1084 79.6084 -81.3667 143.094 -154.976C208.865 -231.236 324.689 -252.189 426.755 -247.339Z" fill="#FDC435" />
                            </svg>

                            <img class="img-overlay" src="https://s3-alpha-sig.figma.com/img/cbc2/713b/6fd033f480a575f0a0f175bd3257c3c2?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J43o5FwnQzkk0BMwC5eldXz6hH1teihp~d9QA1oLsNxQoAJJasyB2EDJmW1GRb8bauETgeXwz79PM1WtS8ZfXx~~KlzTmQ0DHiMbWP6VsRlUhpYyrSICOtQWzoF9DRnrRdhq4Ge16Y9XtO6orwxxHfajNZLnPvH15VTSzjf~MR-MXJexVEk-4FHjiEaPJuxcxT5NfpJ~a1NsOHG36FZuFJLBakrDWkwSJdMz0FNTUYTX~rnBg1-dqz9TcfUz61vPZFtsm3sz0DCAzli-LaMgTYhC6dGFV6Z6BTGIPmisDBQ9QDIQS3E6kBNZiZzzmMlZ4yOgmMVh7cUjcLJFafyl~w__" alt="about-img" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;