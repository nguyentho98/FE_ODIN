"use client"
import ListeningTestMain from "@/components/Survey/ListeningTest/ListeningTestMain"
import FooterTest from "@/components/Layout/Footer/FooterOnTest"
import HeaderTest from "@/components/Layout/Header/HeaderOnTest"
import React from "react"

const page = () => {
    return (
        <React.Fragment>
            <HeaderTest />
            <ListeningTestMain />
            <FooterTest />
        </React.Fragment>
    )
}

export default page
