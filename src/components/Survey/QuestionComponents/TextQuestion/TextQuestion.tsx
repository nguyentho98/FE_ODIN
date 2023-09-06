import { SurveyQuestionType } from "@/constants/QuestionType"
import { QuestionProps } from "@/constants/props"
import { Input, TextareaAutosize } from "@mui/material"

import React, { useRef } from 'react'

export const TextQuestion = ({ question, index }: QuestionProps & {
  index : number
}) => {
      const questionType = useRef(SurveyQuestionType.MULTIPLE_LINE )

  // lam cai su kien onchange cho moi cai input nay la ok
  const handleChange = () => { 
    
  }
  return (
            <>
            <div className="mr-4  rounded-full w-100% h-[42px] text-center flex flex-row items-center">
                <div className=" bg-[#005e12] w-fit h-fit mb-0 rounded-full text-white">
                    <p className="p-2 w-[42px] h-[42px] mb-0">{index + 1}</p>
                </div>
                <div className="ml-4" dangerouslySetInnerHTML={{__html: question.title.en_US}} />
            </div>

            <div>
            <TextareaAutosize  minRows={3} className="border" />
            </div>
        </>

  )
}
