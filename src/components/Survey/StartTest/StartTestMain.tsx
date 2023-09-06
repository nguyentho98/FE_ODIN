"use client"
import { inputExamSelector } from "@/redux/Selector/inputExamSelector"
import { userAuthSelector } from "@/redux/Selector/userAuthorSelector"
import axios from "axios"
import Link from "next/link"
import { useRouter } from "next/navigation"
import React from "react"
import { useSelector } from "react-redux"

export const StartTestMain: React.FC = () => {
    const selectedExam = useSelector(inputExamSelector)
    const userInfo = useSelector(userAuthSelector)
    const router = useRouter()
    console.log(selectedExam)
    const handleStart = () => {
        if (!selectedExam.answerToken || !selectedExam.accessToken) {
            router.push("survey-list")
        }
        axios
            .patch(
                `${process.env.NEXT_PUBLIC_API}/survey/begin/${selectedExam.accessToken}/${selectedExam.answerToken}`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${userInfo.token}`,
                    },
                }
            )
            .then((res) => {
                const data = res.data

                // start xong phai luu du lieu vao dau do chu?

                router.push("/survey/full-test")
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div className="pt-16 flex flex-col container h-screen justify-center items-center">
            <button
                className="px-5 py-3 bg-green-1 text-yellow-1 rounded-3xl mb-5"
                onClick={handleStart}
            >
                Start?
            </button>
            <button className="mx-5 my-3 text-green-1 mb-5">Back</button>
        </div>
    )
}
