import { AuthenticationUserState } from "@/constants/AuthenticationState"
import { StartExam } from "@/redux/Slice/InputExam/InputExam"

import { AppDispatch } from "@/redux/store"
import Link from "next/link"
import React from "react"
import { useDispatch } from "react-redux"

interface pageProps {
    data: any
    userInfo: AuthenticationUserState
}

const CourseSidebar: React.FC<pageProps> = ({ data, userInfo }) => {
    console.log(data)
    console.log(userInfo)

    const dispatch = useDispatch<AppDispatch>()
    const handleCreateInputExam = (accessToken: any) => {
        const dataPush = {
            accessToken,
            userInfo,
        }
        dispatch(StartExam(dataPush))
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
                        <Link
                            className="e-btn e-btn-7 w-100"
                            href="/survey/start-test"
                            onClick={() => handleCreateInputExam(data.accessToken)}
                        >
                            Start Exam <i className="fas fa-arrow-right"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseSidebar
