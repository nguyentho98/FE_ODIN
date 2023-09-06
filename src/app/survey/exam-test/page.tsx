import ExamTestMain from "@/components/Survey/ExamTest/ExamTestMain"
import FooterTest from "@/components/Layout/Footer/FooterOnTest"
import HeaderTest from "@/components/Layout/Header/HeaderOnTest"
import React from "react"

const ExamTest: React.FC = () => {
    return (
        <React.Fragment>
            <HeaderTest />
            <ExamTestMain />
            <FooterTest />
        </React.Fragment>
    )
}

export default ExamTest
