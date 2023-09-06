"use client"
import { inputExamSelector } from "@/redux/Selector/inputExamSelector"
import { userAuthSelector } from "@/redux/Selector/userAuthorSelector"
import axios from "axios"
import Link from "next/link"
import { useRouter } from "next/navigation"
import React from "react"
import { useSelector } from "react-redux"

export const StartTestMain: React.FC<any> = ({params}) => {
    console.log('====================================');
    console.log("params", params?.slug);
    console.log('====================================');
    const selectedExam = useSelector(inputExamSelector)
    const userInfo = useSelector(userAuthSelector)
    const router = useRouter()
    console.log(selectedExam)
    const handleStart = () => {
        if(params && params?.slug.length < 1) {

            return;
        }
        axios
            .patch(
                `${process.env.NEXT_PUBLIC_API}/survey/begin/${params?.slug[0]}/${params?.slug[1]}`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("TOKEN")}`,
                    },
                }
            )
            .then((res) => {
                const data = res.data

                // start xong phai luu du lieu vao dau do chu?
                console.log('====================================');
                console.log("data",data);
                console.log('====================================');

                router.push(`/survey/full-test/${data?.accessToken}/${data?.answerToken}`)
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
