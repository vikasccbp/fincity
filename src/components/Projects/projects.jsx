import React from "react";

import './projects.css';

const Projects = ({ item }) => {

    return (
        <div className="bg">

            {item.map((ele, index) => (
                <div key={index}>
                    <div className="container">
                        <div className="row justify-content-center align-items-center py-3">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">

                                <h2 className="head">Projects</h2>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                <div className="">

                                    <h3 className="projects-heading">{ele.name}</h3>
                                    <p className="projects-desc">{ele.link}</p>
                                    <p>{ele.des}</p>

                                    <div>


                                        <button className="projects-button"> View Projects</button>
                                    </div>
                                </div>

                            </div>

                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">

                                <img src="https://images.pexels.com/photos/3823207/pexels-photo-3823207.jpeg" className="project-img" />



                            </div>

                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">

                                <img src="https://images.pexels.com/photos/3823207/pexels-photo-3823207.jpeg" className="project-img" />



                            </div>

                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                <div className="">

                                    <h3 className="projects-heading">{ele.name}</h3>
                                    <p className="projects-desc">{ele.link}</p>
                                    <p>{ele.des}</p>

                                    <div>


                                        <button className="projects-button"> View Projects</button>
                                    </div>
                                </div>

                            </div>



                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                <div className="">

                                    <h3 className="projects-heading">{ele.name}</h3>
                                    <p className="projects-desc">{ele.link}</p>
                                    <p>{ele.des}</p>

                                    <div>


                                        <button className="projects-button"> View Projects</button>
                                    </div>
                                </div>

                            </div>

                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">

                                <img src="https://images.pexels.com/photos/3823207/pexels-photo-3823207.jpeg" className="project-img" />



                            </div>


                        </div>

                    </div>
                    <div className="col-12 col-sm-12 col-lg-12 ">
                        <div className="d-flex flex-row justify-content-center mt-3">
                            <img src="data:image/png;base64,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" className="logo" />
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAYFBMVEUAAAD///9HR0f6+voSEhK0tLT09PRmZmaurq6ioqJDQ0PLy8smJiaPj48KCgptbW3W1tbs7Oy/v7+oqKjf3989PT1WVlaXl5d6enqHh4cbGxtRUVFzc3M2NjYxMTFcXFw5Y3yXAAAFF0lEQVR4nO2daXuiMBCAg5FDQcsRyqHW//8vF3vtVmFmUDaZ2HmfZ78t7bwFckwmQQVBoDfKezZ6EFHDv9B1JEtQfsjktetAlqDOLzK6cx3HMnR6kMnXrsNYhnU+yOxcR7EUu0DpzHUQS5FpZVzHsBxGJa5DWI5EPc0rM7w06sV1CMvxos6uQ1iOs1q5DmE5ViLDFJHhishwZZ7Mfv/fAlkCqkxfv3ZVmqZhc6zfuCrRZLbHJAq+yXevPKcNFJlTlwc/KZIzx7tDkDmXOrjBNL2N8OaByuxbc6tyybWFb3YinAEms2+KUZfLq8POBpNpRx6x70fNUoxkEJnDtMpAaitKIohMBMroxlaYNGCZEHQZmuhXa4FSAGXgh+xCaS9SAqBMisoUsb1QcSCZerJV/gurrBsk0wDN8hcpp+UQSAZ/yobn7GgxWAxAJrseXo6hOSVEAZnD+KDsiorR8BmQORLe/yAIGU1tAJkO7v6fUaY82QwXBpBpn+kxi0kyCaMZJyCzJbVmnIo7oE6T1M9wKiKAZEqCjOE00oRkWkJzVjLqM+EpAP7SRJxGM7BMg8rwytDA02asceZ1YxCZGJFJedUQIdkZOKNRHGyFSQNLAkITtKi1FCQVTGY73XOympe9gybOD1P3puDU93+AL2mcqtG+M+c0+f+EsD7TH28ftajiuK5LWgbMrqc2yYpXm/wJdYH2VJnPLFqUcmvEvpmzdF6/xucVo4nlDb+4qIE5IsMVkeGKyHBFZLjyq2S2EIvlmdbZqX7/ifUpe2A8jsisU4jxapP9NCP/Ozscu6YKy88fWYbVpmvj7V1KmAyQz5ioz1gl4STX2Zysrcq8uF6h15FJw007f3yOyYClAKP7O2Pgkp/bW85JOp1l1EUezt1A8h9kptPt+l+ZuEQXs4p0XqLBlcw2Ja2YRumcuilHMhXF5OOair7O6ERmRVot/cKQb44Dmb6bozJQULfF2ZfJNoRiqZ9ERBvrMne4DBfSVk5ty/QNqRW7hrZ4YluGVvZxC2lZy65MTCuUGINSP2n5ztD7l2sopa12Zao7Xv4vCOXtVmUeosDz9f7IBCU6rvFIBi/T8UgmQLdR+CSDFoT7JIMO0XySQQ+V8UqmRHJbXslgw02vZAKkcXYso6MiTy+pM9o4ZwePnR3KaFN2X43t+qWkXIZUhDuT0fnuZ2QxofIYqaJ0JVNsbvYQvOGlxwXcbTqSMWOpStxGw82ZG5l8PBV2QJ80uDlzIjPZX+ywa+E5jROZyb9vjz1o8MDZhcxmuuQeuzVwWsOBjAF+4xvy1sBbDxzIgGPfBB4KpMxkDNi8IlsQc2Yy8HrLCc4SGl4yWJk6vAc5Akea1mVypIgCfmmYyYRIBnwH/kbNSwbLF8GX85JBk6xbj2QMVqjQg20zL5l8i8jAu/Z4yaRo9tsjGfxsF3B0xksGPxse7DVZyWh8adIjGXyTOjg/800G3E0pMiIjMiIjMiIjMiIjMiIjMiIjMiIjMiIjMiIjMiIjMiIjMiIjMiIjMiIjMiIjMiIjMiIjMiLzRDL7bjdNM7qpBzoSLAiqx2SCR2TuYFUlAPgZXy10efLIxoY72GcQ+JFYPXg9eOmvOq3RK0SGKyLDFZHhishwZaXmHvDKmFhRD6n0gBfF7BPfj9AofK+RN4TKuA5hOYzSjL67+hi1VviBbr7QBCowjD68+gi9GWT0k9yaRg8y4Akd/nD5APggw+3ji3exvuzv/ANZOmBfiIjZwAAAAABJRU5ErkJggg==" className="logo" />
                            <img src="data:image/png;base64,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" className="logo" />
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <p className="para text-center mt-3">Copyright © 2024. All rights reserved</p>

                    </div>

                    <div className="footer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1436" height="112" viewBox="0 0 1436 112" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 83.9182L59.8333 74.594C119.667 65.2697 239.333 46.6212 359 48.9523C478.667 51.2833 598.333 74.594 718 74.594C837.667 74.594 957.333 51.2833 1077 34.9659C1196.67 18.6485 1316.33 9.32425 1376.17 4.66212L1436 0V111.891H1376.17C1316.33 111.891 1196.67 111.891 1077 111.891C957.333 111.891 837.667 111.891 718 111.891C598.333 111.891 478.667 111.891 359 111.891C239.333 111.891 119.667 111.891 59.8333 111.891H0V83.9182Z" fill="#FDC435" />
                        </svg>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Projects;
