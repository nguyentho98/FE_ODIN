"use client"
import React from "react"
import { Input } from "@mui/material"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"
import { DateField } from "@mui/x-date-pickers"
import classNames from "classnames"
import SimpleChoice from "../ListeningTest/SimpleChoiceElements"
import { NormQuestionFactory } from "./Factory/NormQuestionFactory"

interface pageProps {
    data?: any
}
const QuestionSection: React.FC<pageProps> = (props: pageProps) => {
    props.data?.map((item: any) => {
        console.log("item", item)
        if (item.questionType === "simple_choice") {
            const suggestedAnswers = item.suggestedAnswers
        }
    })
    return (
        <React.Fragment>
            <ul className="border-solid border-2 border-[#005e12]">
                {props.data?.map((item: any, index: any) => (
                    <li key={index}>
                        <div
                            className={classNames(
                                "flex flex-row p-10 items-center justify-between border-solid  border-[#005e12] px-4",
                                {
                                    "border-b-2":
                                        index !== props.data?.length - 1,
                                }
                            )}
                        >
                            <div className="mr-4  rounded-full w-100% h-[42px] text-center flex flex-row items-center">
                                <div className=" bg-[#005e12] w-fit h-fit mb-0 rounded-full text-white">
                                    <p className="p-2 w-[42px] h-[42px] mb-0">
                                        {index + 1}
                                    </p>
                                </div>
                                <div className="ml-4">{item.title.en_US}</div>
                            </div>

                            <div>
                                { NormQuestionFactory(item, index) }
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </React.Fragment>
    )
}

export default QuestionSection
