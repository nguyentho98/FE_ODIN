import { ExamTest } from "@/constants/exam.type"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { headers } from "next/dist/client/components/headers"

const initialState: ExamTest = {
    accessToken: "",
    answerToken: "",
    timeLimit: 0,
    isTimeLimited: 0,
    timeLSLimit: 0,
    title: {},
}

const InputExam = createSlice({
    name: "exam",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(StartExam.fulfilled, (state, action) => {
            console.log({ action })
            return {
                ...state,
                ...action.payload,
            }
        })
    },
})

export const StartExam = createAsyncThunk("Exam/startExam", async (data: any) => {
    const res = await axios.patch(
        `${process.env.NEXT_PUBLIC_API}/survey/start/${data.accessToken}`,
        {},
        {
            headers: {
                Authorization: `Bearer ${data.userInfo.token}`,
            },
        }
    )
    return res.data
})

export default InputExam
