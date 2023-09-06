import { AuthenticationUserState } from "@/constants/AuthenticationState"
import { StartExam } from "@/redux/Slice/InputExam/InputExam"

import { AppDispatch } from "@/redux/store"
import axios from "axios"
import Link from "next/link"
import { useRouter } from "next/navigation"
import React from "react"
import { useDispatch } from "react-redux"

interface pageProps {
    data: any
    userInfo: AuthenticationUserState
    idSurveyDetails: string
}

const CourseSidebar: React.FC<pageProps> = ({ data, userInfo,idSurveyDetails }) => {
    console.log(data)
    console.log(userInfo)
    console.log('====================================');
    console.log("idSurveyDetails", idSurveyDetails);
    console.log('====================================');
    const router = useRouter()
    const dispatch = useDispatch<AppDispatch>()
    const handleCreateInputExam =  async (accessToken: any) => {
        const dataUser = JSON.parse(localStorage.getItem("USER") || '')
        console.log('====================================');
        console.log("dataUser",dataUser);
        console.log('====================================');
        const res = await axios.patch(
            `${process.env.NEXT_PUBLIC_API}/survey/start/${idSurveyDetails}`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("TOKEN")}`,
                },
            }
        )
        console.log('====================================');
        console.log("res", res);
        console.log('====================================');
        router.push(`/survey/start-test/${res.data.accessToken}/${res.data.answerToken}`)
     
    }
    return (
        <div className="course__sidebar pl-70 p-relative">
            <div className="course__shape">
                <img
                    className="course-dot"
                    src="/assets/img/course/course-dot.png"
                    alt="img not found"
                />
            </div>
            <div className="course__sidebar-widget-2 white-bg mb-20">
                <div className="course__video">
                    <div className="course__video-content mb-35">
                        <ul>
                            {/* <li className="d-flex align-items-center">
                                <div className="course__video-icon">
                                    <i className="fas fa-home"></i>
                                </div>
                                <div className="course__video-info">
                                    <h5>
                                        <span>Instructor:</span> Eleanor Fant
                                    </h5>
                                </div>
                            </li> */}
                            {/* <li className="d-flex align-items-center">
                                <div className="course__video-icon">
                                    <i className="fas fa-book"></i>
                                </div>
                                <div className="course__video-info">
                                    <h5>
                                        <span>Lectures:</span>14
                                    </h5>
                                </div>
                            </li> */}
                            {data.timeLimit && (
                                <li className="d-flex align-items-center">
                                    <div className="course__video-icon">
                                        <i className="fas fa-clock"></i>
                                    </div>
                                    <div className="course__video-info">
                                        <h5>
                                            <span>Duration:</span>
                                            {data.timeLimit} minutes
                                        </h5>
                                    </div>
                                </li>
                            )}
                            {/* <li className="d-flex align-items-center">
                                <div className="course__video-icon">
                                    <i className="fas fa-user"></i>
                                </div>
                                <div className="course__video-info">
                                    <h5>
                                        <span>Enrolled:</span>20 students
                                    </h5>
                                </div>
                            </li> */}
                            <li className="d-flex align-items-center">
                                <div className="course__video-icon">
                                    <i className="fas fa-globe"></i>
                                </div>
                                <div className="course__video-info">
                                    <h5>
                                        <span>Language:</span>English
                                    </h5>
                                </div>
                            </li>
                        </ul>
                    </div>
                    {/* <div className="course__payment mb-35">
        <h3>Payment:</h3>
        <a href="#">
            <img src="assets/img/course/payment/payment-1.png" alt="img not found"/>
        </a>
    </div> */}
                    <div className="course__enroll-btn">
                        <div
                            className="e-btn e-btn-7 w-100"
                            href={``}
                            onClick={() => handleCreateInputExam(data.accessToken)}
                        >
                            Start Exam <i className="fas fa-arrow-right"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseSidebar
