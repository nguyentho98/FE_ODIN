'use client'
import SpeakingTestMain from "@/components/Survey/SpeakingTestElsa/SpeakingTestMain"
import FooterThree from "@/components/Layout/Footer/FooterThree"
import Header from "@/components/Layout/Header/Header"

import React from "react"

const Record: React.FC = () => {
    return (
        <React.Fragment>
            <Header />
            <SpeakingTestMain />
            <FooterThree />
        </React.Fragment>
    )
}

export default Record
