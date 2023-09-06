"use client"
import HeaderTest from "@/components/Layout/Header/HeaderOnTest"
import FullTest from "@/components/Survey/FullTest/FullTest"
import React, { Fragment } from "react"

export default function Page({ params }: { params: { slug: any } }) {
    console.log('====================================');
    console.log("params", params);
    console.log('====================================');
    return (
        <Fragment>
            <HeaderTest />
            <FullTest params={params}/>
        </Fragment>
    )
}

