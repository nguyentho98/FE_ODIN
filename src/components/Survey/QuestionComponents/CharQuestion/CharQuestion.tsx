import { QuestionProps } from "@/constants/props"
import { Question } from "@/constants/question.types"
import React, { useRef } from "react"
import { Input } from "@mui/material"
import { SurveyQuestionType } from "@/constants/QuestionType"
export const CharQuestion = ({
    question,
    index,
    isScored,
}: QuestionProps & {
    index: number
    isScored?: boolean
}) => {
    const questionType = useRef(
        isScored ? SurveyQuestionType.SINGLE_LINE_WITH_ANSWER : SurveyQuestionType.SINGLE_LINE_WIHTOUT_ANSWER
    )

    return (
        <>
            <div className="mr-4  rounded-full w-100% h-[42px] text-center flex flex-row items-center">
                <div className=" bg-[#005e12] w-fit h-fit mb-0 rounded-full text-white">
                    <p className="p-2 w-[42px] h-[42px] mb-0">{index + 1}</p>
                </div>
                <div
                    className="ml-4"
                    dangerouslySetInnerHTML={{ __html: question.title.en_US }}
                />
            </div>

            <div>
                <Input />
            </div>
        </>
    )
}
