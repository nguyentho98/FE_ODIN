import { createSlice } from "@reduxjs/toolkit"
import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

import { AuthenticationUserState } from "@/constants/AuthenticationState"
import { AuthLoginInputState } from "@/constants/AuthenticationState"

const initialState: AuthenticationUserState = {
    isAuthenticated: false,
    token: "",
    refreshToken: "",
    tokenExpires: 0,
    keepSign: false,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logOut: (state) => {
            localStorage.removeItem("session")
            return initialState
        },
    },
    extraReducers: (builder) => {
        builder.addCase(postLogin.fulfilled, (state, action) => {
            state.token = action.payload.data.token
            state.isAuthenticated = action.payload.data.isAuthenticated
            state.keepSign = action.payload.userInput.keepSign
            state.user = action.payload.data.user
            state.keepSign ? localStorage.setItem("session", JSON.stringify(action.payload.data)) : null
            return state
        })
        builder.addCase(loadTokenFromLocal.fulfilled, (state, action) => {
         
            if (action.payload) {
                const data = JSON.parse(action.payload)

                return {
                    ...state,
                    ...data,
                }
            } else {
                return {
                    ...state,
                }
            }

        })
    },
})

export const postLogin = createAsyncThunk("auth/postLogin", async (userInput: AuthLoginInputState) => {
    const res = await axios.post(`${process.env.NEXT_PUBLIC_API}/auth/email/login`, userInput)

    return { data: res.data, userInput: userInput }
})
export const loadTokenFromLocal = createAsyncThunk("auth/loadToken", async () => {
    const session = localStorage.getItem("session")

    return session
})

export default authSlice

export const { logOut } = authSlice.actions
