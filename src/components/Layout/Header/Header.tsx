"use client"
import Head from "next/head"
import Link from "next/link"
import React, { ReactEventHandler, useEffect, useRef, useState } from "react"
import BurgerMenus from "./BurgerMenus"
import { userAuthSelector } from "@/redux/Selector/userAuthorSelector"
import { useDispatch, useSelector } from "react-redux"
import { logOut } from "@/redux/Slice/Auth/authSlice"

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const userInfo = useSelector(userAuthSelector)
    const dispatch = useDispatch()

    const headerRef = useRef<HTMLDivElement>(null)
    const clearLocal = () => {
        dispatch<any>(logOut())
    }

    const sticky = (e: Event) => {
        const header = headerRef.current
        const scrollTop = window.scrollY
        scrollTop >= 1 ? header?.classList.add("sticky") : header?.classList.remove("sticky")
    }

    useEffect(() => {
        window.addEventListener("scroll", sticky)
        return () => {
            window.removeEventListener("scroll", sticky)
        }
    }, [])
    console.log({ userInfo })

    return (
        <React.Fragment>
            <Head>
                <title>Educal – Online Course and Education React, Nextjs Template</title>
                <link
                    href="https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500;600;700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <header>
                <div
                    ref={headerRef}
                    id="header-sticky"
                    className="header__area header__transparent header__padding"
                >
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-4 col-6">
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
                            <div className="col-xxl-9 col-xl-9 col-lg-8 col-md-8 col-sm-8 col-6">
                                <div className="header__right d-flex justify-content-end align-items-center">
                                    <div className="main-menu d-none d-xl-block">
                                        <nav id="mobile-menu">
                                            <ul>
                                                <li className="has-dropdown1">
                                                    <Link href="/">Home</Link>
                                                </li>
                                                {userInfo.isAuthenticated ? (
                                                    <li className="has-dropdown">
                                                        <Link href="/course-grid">Courses</Link>
                                                        <ul className="submenu">
                                                            <li>
                                                                <Link href="/course-list">Courses List</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/my-course">My Courses</Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                ) : null}
                                                {userInfo.isAuthenticated ? (
                                                    <li className="has-dropdown">
                                                        <Link href="/survey/survey-list">Test</Link>
                                                        <ul className="submenu">
                                                            <li>
                                                                <Link href="/survey/exam-test">IELTS Test</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/survey/speak-test">IELTS Speaking Test</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/survey/listening-test">IELTS Listening Test</Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                ) : null}
                                                <li>
                                                    <Link href="/about-us">About Us</Link>
                                                </li>

                                                <li>
                                                    <Link href="/contact">Contact</Link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>

                                    {userInfo.isAuthenticated ? (
                                        <div className="header__btn ml-20 d-none d-sm-block">
                                            <Link
                                                href="/info"
                                                className="e-btn"
                                            >
                                                {userInfo.user?.username}
                                            </Link>
                                            <Link
                                                onClick={clearLocal}
                                                href="/sign-in"
                                            >
                                                Log out
                                            </Link>
                                        </div>
                                    ) : (
                                        <div className="header__btn ml-20 d-none d-sm-block">
                                            <Link
                                                href="/contact"
                                                className="e-btn"
                                            >
                                                Try for free
                                            </Link>
                                            <Link href="/sign-in">Sign-in</Link>
                                        </div>
                                    )}
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

                <BurgerMenus
                    menuOpen={menuOpen}
                    setMenuOpen={setMenuOpen}
                />
                {/* <div
                    onClick={() => setMenuOpen(false)}
                    className={menuOpen ? "body-overlay show" : "body-overlay"}
                ></div> */}
            </header>
        </React.Fragment>
    )
}

export default Header
