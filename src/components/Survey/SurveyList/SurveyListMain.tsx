"use client"

import PanigationSurveyList from "@/components/Elements/PanigationSurveyList"
import ShapeBackground from "@/components/Elements/ShapeBackground"
import InfoPagigationTab from "@/components/Elements/Tabs/InfoPagigationTab"
import { userAuthSelector } from "@/redux/Selector/userAuthorSelector"
import { fetchSurveyData } from "@/redux/Slice/Surveys/SurveySlice"
import { AppDispatch } from "@/redux/store"
import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import jsonData from "./DataTest.json"
const dataArray = jsonData.data

const SurveyListMain: React.FC = () => {
    const [survey, setSurvey] = useState<any>()
    const dispatch = useDispatch<AppDispatch>()
    // const [selectedSurvey, setSelectedSurvey] = useState<any>()
    const userInfo = useSelector(userAuthSelector)

    const header = {
        Authorization: `Bearer ${userInfo.token}`,
    }
    const handleClick = async (item: any) => {
        console.log('====================================');
        console.log("item", item);
        console.log('====================================');
        dispatch(fetchSurveyData(item))
    }
    useEffect(() => {
        axios
            .get(`${process.env.NEXT_PUBLIC_API}/survey/all?page=1`, {
                headers: header,
            })
            .then(async (response) => {
                setSurvey(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    return (
        <section className="course__area pt-36 pb-24">
            <div className="container">
                <div className="page__title-breadcrumb">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link href="/">Home</Link>
                            </li>

                            <li
                                className="breadcrumb-item active"
                                aria-current="page"
                            >
                                Survey List
                            </li>
                        </ol>
                    </nav>
                </div>
                <InfoPagigationTab totalPage={1} />
                <div className="row">
                    {survey?.data.map((item: any, index: any) => (
                        <div
                            className="col-xxl-12 mb-7"
                            key={index}
                        >
                            <div className="course__tab-conent">
                                <div className="row">
                                    <div className="col-xxl-12">
                                        <div className="course__item white-bg mb-30 fix">
                                            <div className="row gx-0 h-fit">
                                                <div className="col-xxl-12 col-xl-12 col-lg-12">
                                                    <div className="course__right">
                                                        <div className="course__content course__content-3 ">
                                                            <div className="course__meta d-flex align-items-center">
                                                                <div className="course__lesson mr-20">
                                                                    <span>
                                                                        <i className="fas fa-book"></i>5 Tests
                                                                    </span>
                                                                </div>
                                                                <div className="course__rating">
                                                                    <span>
                                                                        <i className="fas fa-star"></i>4.9 (44)
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <h3
                                                                className="course__title course__title-3 pt-5"
                                                                onClick={() => handleClick(item)}
                                                            >
                                                                <Link href={`/survey/survey-details/${item?.accessToken}`}>
                                                                    {item.title?.en_US}
                                                                </Link>
                                                            </h3>
                                                            <div
                                                                className="course__summary pb-[70px]"
                                                                dangerouslySetInnerHTML={{
                                                                    __html: item.description?.en_US,
                                                                }}
                                                            ></div>
                                                        </div>
                                                        <div className="course__more course__more-2 d-flex justify-content-between align-items-center">
                                                            <div className="course__status">
                                                                {/* <span>Free</span> */}
                                                            </div>
                                                            <div className="course__btn py-1">
                                                                <Link
                                                                    className="link-btn"
                                                                    href={`/survey/survey-details/${item.accessToken}`}
                                                                >
                                                                    Select Test
                                                                    <i className="fas fa-arrow-right"></i>
                                                                    <i className="fas fa-arrow-right"></i>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <PanigationSurveyList />
            </div>
            <ShapeBackground />
        </section>
    )
}

export default SurveyListMain
