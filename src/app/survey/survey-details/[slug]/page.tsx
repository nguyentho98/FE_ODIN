"use client"
import Header from "@/components/Layout/Header/Header"
import HeaderFour from "@/components/Layout/Header/HeaderFour"
import SurveyDetailMain from "@/components/Survey/SurveyDetail/SurveyDetailMain"
import { useRouter } from "next/navigation"
import { Fragment } from "react"

export default function Page({ params }: { params: { slug: string } }) {
    
    return (
        <Fragment>
            <Header />
            <SurveyDetailMain idSurveyDetails={params?.slug} />
        </Fragment>
    )
}
