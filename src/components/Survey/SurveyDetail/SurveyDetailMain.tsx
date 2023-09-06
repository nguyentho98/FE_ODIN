"use client"
import { userAuthSelector } from "@/redux/Selector/userAuthorSelector"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Tab, TabList, TabPanel, Tabs } from "react-tabs"
import CourseSidebar from "./CourseSidebar"

import jsonData from "./SurveyDetailDataTest.json"
import { surveySelector } from "@/redux/Selector/surveySelector"
import axios from "axios"
interface PropsSurvey {
    idSurveyDetails:  string
}
const SurveyDetailMain: React.FC<PropsSurvey> = ({idSurveyDetails}) => {
    const userInfo = useSelector(userAuthSelector)
    const surveyInfo = useSelector(surveySelector)
    const [page, setPage] = useState<any>(1)
    const [question, setQuestion] = useState<any>()


   
    return (
        <section className="course__area pt-20 md:pt-36 pb-24">
            {/* shape */}
            <div className="page__title-shape">
                <img
                    className="page-title-shape-5 d-none d-sm-block"
                    src="/assets/img/page-title/page-title-shape-1.png"
                    alt="img not found"
                />
                <img
                    className="page-title-shape-6"
                    src="/assets/img/page-title/page-title-shape-6.png"
                    alt="img not found"
                />
                <img
                    className="page-title-shape-7"
                    src="/assets/img/page-title/page-title-shape-4.png"
                    alt="img not found"
                />
            </div>
            {/* container */}
            <div className="container">
                {/* directory */}
                <div className="row">
                    {/* left */}
                    <div className="col-xxl-8 col-xl-8 col-lg-8">
                        <div className="course__wrapper">
                            {/* title and direct */}
                            <div className="page__title-content mb-6">
                                <div className="page__title-breadcrumb">
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item">
                                                <Link href="/">Home</Link>
                                            </li>
                                            <li className="breadcrumb-item">
                                                <Link href="/survey/survey-list">Survey list</Link>
                                            </li>
                                            <li
                                                className="breadcrumb-item active"
                                                aria-current="page"
                                            >
                                                Furniture Creation Certification
                                            </li>
                                        </ol>
                                    </nav>
                                </div>
                                <h5 className="page__title-3 md:pt-10 sm:pt-0">{surveyInfo.title?.en_US}</h5>
                            </div>
                            {/*  */}
                            <div className="course__meta-2 flex  mb-8">
                                <div className="course__update mr-80 mb-30">
                                    <h5>Last Update:</h5>
                                    <p>July 24, 2022</p>
                                </div>
                                <div className="course__rating-2 mb-30">
                                    <h5>Review:</h5>
                                    <div className="course__rating-inner d-flex align-items-center">
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <i className="fas fa-star"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fas fa-star"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fas fa-star"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fas fa-star"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fas fa-star"></i>
                                                </a>
                                            </li>
                                        </ul>
                                        <p>4.5</p>
                                    </div>
                                </div>
                            </div>
                            {/* img survey */}
                            {/* <div className="course__img w-img mb-8">
                                <img
                                    src="/assets/img/carousel/trung-tam-tieng-anh-odin-1024x576.jpg"
                                    alt="img not found"
                                />
                            </div> */}
                            {/* info */}
                            <Tabs>
                                <div className="course__tab-2 mb-45">
                                    <ul
                                        className="navs nav-tabss"
                                        id="courseTab"
                                        role="tablist"
                                    >
                                        <TabList style={{ display: "flex" }}>
                                            <Tab style={{ width: "100%" }}>
                                                <button
                                                    className="nav-link"
                                                    type="button"
                                                    role="tab"
                                                >
                                                    <i className="fas fa-ribbon"></i> <span>Discription</span>{" "}
                                                </button>
                                            </Tab>
                                            {/* <Tab style={{ width: "50%" }}>
                                                <button
                                                    className="nav-link"
                                                    type="button"
                                                >
                                                    <i className="fas fa-book"></i> <span>Questions</span>{" "}
                                                </button>
                                            </Tab> */}
                                        </TabList>
                                    </ul>
                                </div>
                                <div className="course__tab-content mb-95">
                                    <div className="tab-contents">
                                        <TabPanel>
                                            <div className="course__description">
                                                <h3>{surveyInfo.title?.en_US}</h3>
                                                <div
                                                    dangerouslySetInnerHTML={{ __html: surveyInfo.description?.en_US }}
                                                ></div>
                                                {/* <div className="course__tag-2 mb-35 mt-35">
                                                    <i className="fas fa-tags"></i>
                                                    <Link href="/course-details">Big data,</Link>
                                                    <Link href="/course-details">Data analysis,</Link>
                                                    <Link href="/course-details">Data modeling</Link>
                                                </div> */}
                                            </div>
                                        </TabPanel>
                                        {/* <TabPanel>
                                            <CourseAccordion surveyInfo={surveyInfo.data} />
                                        </TabPanel> */}
                                    </div>
                                </div>
                            </Tabs>
                        </div>
                    </div>
                    {/* right */}
                    <div className="col-xxl-4 col-xl-4 col-lg-4">
                        <CourseSidebar data={surveyInfo} userInfo={userInfo} idSurveyDetails={idSurveyDetails}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SurveyDetailMain
