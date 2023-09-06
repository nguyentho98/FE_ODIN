"use client"
import FooterTest from "@/components/Layout/Footer/FooterOnTest"
import { Fragment, useEffect, useState } from "react"
import { useSelector } from "react-redux"
import jsonData from "./DataTest/resAnswer.json"
import { SurveyQuestionType } from "@/constants/QuestionType"
import QuestionSection from "../ListeningTest/QuestionSection"
import { SpecQuestionFactory } from "./Factory/SpecQuestionFactory"
import axios from "axios"
import { inputExamSelector } from "@/redux/Selector/inputExamSelector"
import { userAuthSelector } from "@/redux/Selector/userAuthorSelector"
import { Question } from "@/constants/question.types"
import { useRouter } from "next/navigation"
const FullTest = () => {
    const selectedExam = useSelector(inputExamSelector)

    const userInfo = useSelector(userAuthSelector)
    /**
     * Moi bai test trong FullTest tuong ung voi mot page
     */
    const [jsonSurvey, setJsonSurvey] = useState<any>(null) // data nay tuong ung voi du lieu cua mot page
    const [page, setPage] = useState(0)

    const [specialQuestion, setSpecialQuestion] = useState<Question[]>([])
    const [normalQuestion, setNormalQuestion] = useState<Question[]>([])

    const router = useRouter()
    //

    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        if (!selectedExam.answerToken || !selectedExam.accessToken) {
            router.push("survey-list")
        }
        axios
            .get(
                `${process.env.NEXT_PUBLIC_API}/survey/questions/${selectedExam.accessToken}/${selectedExam.answerToken}`,
                {
                    headers: {
                        Authorization: `Bearer ${userInfo.token}`,
                    },
                }
            )
            .then((res) => {
                let data = res.data.data.pages
                if (data.length == 0) {
                    setJsonSurvey(null)
                    setNormalQuestion([])
                    setSpecialQuestion([])
                    return
                }
                data = data[0]
                console.log("Data")

                console.log(data)

                const sepcQuest = data.questions.filter((item: any) => {
                    return [SurveyQuestionType.ONLY_TITLE, SurveyQuestionType.AUDIO].includes(
                        item.questionType as SurveyQuestionType
                    )
                })
                const norQuest = data.questions.filter((item: any) => {
                    return ![SurveyQuestionType.ONLY_TITLE, SurveyQuestionType.AUDIO].includes(
                        item.questionType as SurveyQuestionType
                    )
                })
                console.log(norQuest)
                console.log(sepcQuest)

                setJsonSurvey(data || [])
                setNormalQuestion(norQuest || [])
                setSpecialQuestion(sepcQuest || [])
            })
            .catch((err) => {
                setIsError(true)
                console.log(err)
            })
            .finally(() => {
                setIsLoading(false)
            })

        return () => {
            console.log("Component unmounted")
        }
    }, [page])

    return isError ? (
        <h1>Error</h1>
    ) : isLoading ? (
        <h3>Loading</h3>
    ) : jsonSurvey == null ? (
        <h3>Empty</h3>
    ) : (
        <div className="flex flex-col w-full h-screen overflow-hidden">
            <div className="mt-[64px] mb-[64px] h-screen w-full flex flex-row sm:flex-col item">
                {specialQuestion!.length > 0 && (
                    <div className="w-1/2 h-screen overflow-auto p-10 bg-[#ffed9bad] justify-center items-center">
                        <h3 dangerouslySetInnerHTML={{ __html: jsonSurvey.page.title.en_US }}></h3>

                        {specialQuestion!.map((question) => SpecQuestionFactory(question))}
                    </div>
                )}

                <div
                    className={`${
                        specialQuestion!.length == 0 ? "w-full" : "w-1/2"
                    } h-screen overflow-scroll px-10 pt-10 pb-64 relative`}
                >
                    <QuestionSection questions={normalQuestion} />
                </div>

                {/* btn action  */}
                {/* <div
                className={classNames(
                    " bg-[#d4dae0] h-[60px] w-1/2 absolute bottom-16  right-0 flex justify-between items-center",
                    {
                        "flex-row": pageNumber > 0 && pageNumber < questionRes.pages.length - 1,
                        "flex-row-reverse": pageNumber === 0,
                    }
                )}
            >
                {pageNumber === 0 ? null : (
                    <button
                        value="previous"
                        className="text-white mx-4 px-3 py-1 rounded bg-[#767676e7] flex items-center h-3/5"
                        onClick={() => {
                            if (pageNumber >= 1) {
                                setPageNumber(pageNumber - 1)
                                setPageData(questionRes.pages[pageNumber - 1])
                            }
                        }}
                    >
                        <NavigateBeforeIcon className="pr-1" /> Previous
                    </button>
                )}
                {pageNumber <= questionRes.pages.length - 1 ? (
                    <button
                        value="next"
                        className="text-white mx-4 px-3 py-1 rounded bg-[#767676e7] flex items-center h-3/5"
                        onClick={() => {
                            if (pageNumber < questionRes.pages.length - 1) {
                                setPageNumber(pageNumber + 1)
                                setPageData(questionRes.pages[pageNumber + 1])
                            }
                        }}
                    >
                        Next <NavigateNextIcon className="pl-1" />
                    </button>
                ) : null}
            </div> */}
            </div>
            <FooterTest />
        </div>
    )
}

export default FullTest
