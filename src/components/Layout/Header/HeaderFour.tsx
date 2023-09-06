"use client"
import Head from "next/head"
import Link from "next/link"
import React, { useEffect, useRef, useState } from "react"
import BurgerMenus from "./BurgerMenus"
import { usePathname } from "next/navigation"
import path from "path"

const HeaderFour: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const [isSignInPage, setIsSignInPage] = useState(false)

    const pathname = usePathname()

    const headerRef = useRef<HTMLDivElement>(null)

    const sticky = (e: Event) => {
        const header = headerRef.current
        const scrollTop = window.scrollY
        scrollTop >= 1
            ? header?.classList.add("sticky")
            : header?.classList.remove("sticky")
    }

    useEffect(() => {
        window.addEventListener("scroll", sticky)

        // Hủy đăng ký sự kiện khi component unmount
        return () => {
            window.removeEventListener("scroll", sticky)
        }
    }, [])

    useEffect(() => {
        pathname === "/sign-in" ? setIsSignInPage(true) : setIsSignInPage(false)
    }, [pathname])

    return (
        <React.Fragment>
            <Head>
                <title>
                    Educal – Online Course and Education React, Nextjs Template
                </title>
                <link
                    href="https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500;600;700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <header>
                <div
                    ref={headerRef}
                    id="header-sticky"
                    className="header__area header__padding-2 header__shadow"
                >
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-5 col-6">
                                <div className="header__left d-flex">
                                    <div className="logo">
                                        <Link href="/">
                                            <img
                                                src="/assets/img/logo/odin-logo-login.png"
                                                alt="logo"
                                                style={{
                                                    width: "100%",
                                                    height: "auto",
                                                }}
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-9 col-xl-9 col-lg-8 col-md-8 col-sm-7 col-6">
                                <div className="header__right d-flex justify-content-end align-items-center">
                                    <div className="main-menu main-menu-2 d-none d-xl-block">
                                        <nav id="mobile-menu">
                                            <ul>
                                                <li className="has-dropdown1">
                                                    <Link href="/">Home</Link>
                                                </li>
                                                {/* <li className="has-dropdown">
                                                    <Link href="/course-grid">
                                                        Courses
                                                    </Link>
                                                    <ul className="submenu">
                                                        <li>
                                                            <Link href="/course-grid">
                                                                Courses
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/course-list">
                                                                Courses List
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/course-sidebar">
                                                                Courses Sidebar
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/course-details">
                                                                Courses Details
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </li> */}
                                                <li>
                                                    <Link href="/contact">
                                                        Contact
                                                    </Link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <div className="header__btn header__btn-2 ml-50 d-none d-sm-block">
                                        {isSignInPage ? (
                                            <Link
                                                href="/sign-up"
                                                className="e-btn"
                                            >
                                                Sign Up
                                            </Link>
                                        ) : (
                                            <Link
                                                href="/sign-in"
                                                className="e-btn"
                                            >
                                                Sign In
                                            </Link>
                                        )}
                                    </div>
                                    <div className="sidebar__menu d-xl-none">
                                        <div
                                            className="sidebar-toggle-btn ml-30"
                                            id="sidebar-toggle"
                                            onClick={() => {
                                                setMenuOpen(!menuOpen)
                                            }}
                                        >
                                            <span className="line"></span>
                                            <span className="line"></span>
                                            <span className="line"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <BurgerMenus menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                <div
                    onClick={() => setMenuOpen(false)}
                    className={menuOpen ? "body-overlay show" : "body-overlay"}
                ></div>
            </header>
        </React.Fragment>
    )
}

export default HeaderFour
