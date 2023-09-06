"use client"
import { loadTokenFromLocal } from "@/redux/Slice/Auth/authSlice"
import React, { useEffect } from "react"
import { useDispatch } from "react-redux"

export const AuthProvider: React.FC = () => {
    const dispatch = useDispatch()
  
    useEffect(() => {
        dispatch<any>(loadTokenFromLocal())
    }, [])
    return <></>
}
