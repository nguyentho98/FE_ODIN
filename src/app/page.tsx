'use client'
import HomeMain from "@/components/Home/HomeMain"
import Footer from "@/components/Layout/Footer/Footer"
import Header from "@/components/Layout/Header/Header"
import React from "react"

import "tailwindcss/tailwind.css"

export default function Home() {
    
    return (
        <React.Fragment>
            <Header />
            <HomeMain />
            <Footer />
        </React.Fragment>
    )
}
