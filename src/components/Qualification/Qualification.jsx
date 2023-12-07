import React from 'react';
import "./qualification.css"

const Qualification = () => {
    return (
        <section className="qualification section" id='qualification'>
            <h2 className="section__title">My Qualifications</h2>
            <span className="section__subtitle"></span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className="qualification__button qualification__active button--flex">
                        <i className="uil uil-graduation-cap qualification__icon"></i> Education & Experience
                    </div>

                    {/* <div className="qualification__button button--flex">
                        <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
                    </div> */}
                </div>
                <div className="qualification__section">
                    <div className="qualification__content qualification__content-active">
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">B.Tech</h3>
                                <span className="qualification__subtitle">Indian Institute of Information Technology, Nagpur</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2021 - Present
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">High School</h3>
                                <span className="qualification__subtitle">Delhi Public School, Jodhpur</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2010 - 2020
                                </div>
                            </div>
                        </div>

                        <div className="qualification__content">
                            <div className="qualification__data">

                                <div>
                                    <h3 className="qualification__title">Web Development</h3>
                                    <span className="qualification__subtitle">By Angela Yu</span>
                                    <div className="qualification__calender">
                                        <i className="uil uil-calendar-alt"></i> 2021
                                    </div>
                                </div>
                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>
                            </div>

                            <div className="qualification__data">
                                <div></div>

                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>

                                <div>
                                    <h3 className="qualification__title">SEO</h3>
                                    <span className="qualification__subtitle">UpSkill</span>
                                    <div className="qualification__calender">
                                        <i className="uil uil-calendar-alt"></i> 2022
                                    </div>
                                </div>

                            </div>

                            <div className="qualification__content">
                            <div className="qualification__data">

                                <div>
                                    <h3 className="qualification__title">Inter as React Developer</h3>
                                    <span className="qualification__subtitle">at Educase.io</span>
                                    <div className="qualification__calender">
                                        <i className="uil uil-calendar-alt"></i> 2022
                                    </div>
                                </div>
                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>
                            </div>

                            <div className="qualification__data">
                                <div></div>

                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>

                                <div>
                                    <h3 className="qualification__title">1st Freelance Project</h3>
                                    <span className="qualification__subtitle">of Accentor Homes</span>
                                    <div className="qualification__calender">
                                        <i className="uil uil-calendar-alt"></i> 2022
                                    </div>
                                </div>

                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification