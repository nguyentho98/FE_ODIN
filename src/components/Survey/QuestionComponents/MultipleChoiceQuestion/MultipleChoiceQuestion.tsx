import { SurveyQuestionType } from "@/constants/QuestionType"
import { QuestionProps } from "@/constants/props"
import { Answer } from "@/constants/question.types"
import { CheckBox } from "@mui/icons-material"
import { Checkbox, Input } from "@mui/material"
import React, { useRef, useState } from "react"

export const MultipleChoiceQuestion = ({ question, index }: QuestionProps & { index: number }) => {
    const questionType = useRef(SurveyQuestionType.MULTIPLE_CHOICE)
    console.log("question", question)
    const [selectedValue, setSelectedValue] = useState([])
    const handleChange = (e: any) => {
        
        
    }
    
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

            <div className="flex flex-col justify-between items-end">
                {(question.suggestedAnswers as Answer[]).map((answer, aindex) => {
                    return (
                        <div key={aindex}>
                            <span>{answer.value.en_US}</span>
                            <Checkbox
                                value={answer.id}
                                onChange={handleChange}
                                
                            />
                            
                        </div>
                    )
                })}
            </div>
        </>
    )
}
