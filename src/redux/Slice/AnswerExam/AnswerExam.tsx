import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {}

const AnswerExamSlice = createSlice({
    name: "answer",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(setAnswer.fulfilled, (state, action) => {
            action.payload
        })
    },
})

export const setAnswer = createAsyncThunk("answer/setAnswer", async (item: any) => {
    return item
})

export default AnswerExamSlice
