"use client"
import React from "react"
import { Input } from "@mui/material"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"
import { DateField } from "@mui/x-date-pickers"
import SimpleChoice from "./SimpleChoiceElements"
import classNames from "classnames"
import {  QuestionsProps } from "@/constants/props"
import { NormQuestionFactory } from "../FullTest/Factory/NormQuestionFactory"




const QuestionSection = ({questions}: QuestionsProps | any) => {
    return (
        <React.Fragment>
            <ul className="border-solid border-2 border-[#005e12]">
                {questions.map((item: any, index: any) => (
                    <li key={index}>
                        <div
                            className={classNames(
                                "flex flex-row p-10 items-center justify-between border-solid  border-[#005e12] px-4",
                                {
                                    "border-b-2":
                                        index !== questions?.length - 1,
                                }
                            )}
                        >
                   
                           {NormQuestionFactory(item, index)}
                            
                        </div>
                    </li>
                ))}
            </ul>
        </React.Fragment>
    )
}

export default QuestionSection
