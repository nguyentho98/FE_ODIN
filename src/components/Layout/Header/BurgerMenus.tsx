import Link from "next/link"
import { usePathname } from "next/navigation"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"

interface BurgerMenusProps {
    setMenuOpen: any
    menuOpen: any
}

const BurgerMenus: React.FC<BurgerMenusProps> = ({ setMenuOpen, menuOpen }) => {
    const [home, setHome] = useState(false)
    const [courses, setcourses] = useState(false)
    const [blog, setBlog] = useState(false)
    const [pages, setPages] = useState(false)

    const pathname = usePathname()
    const [path, setPath] = useState("")
    useEffect(() => {
        setPath(pathname)
    }, [pathname])

    const openMobileMenu = (menu: any) => {
        if (menu == "home") {
            setHome(!home)
            setcourses(false)
            setBlog(false)
            setPages(false)
        } else if (menu == "courses") {
            setHome(false)
            setcourses(!courses)
            setBlog(false)
            setPages(false)
        } else if (menu == "blog") {
            setHome(false)
            setcourses(false)
            setBlog(!blog)
            setPages(false)
        } else if (menu == "pages") {
            setHome(false)
            setcourses(false)
            setBlog(false)
            setPages(!pages)
        }
    }
    return (
        <div className={menuOpen ? "sidebar__area open" : "sidebar__area"}>
            <div className="sidebar__wrapper">
                <div className="sidebar__close">
                    <button
                        className="sidebar__close-btn"
                        id="sidebar__close-btn"
                        onClick={() => setMenuOpen(false)}
                    >
                        <span>
                            <i className="fas fa-times"></i>
                        </span>
                        <span>close</span>
                    </button>
                </div>
                <div className="sidebar__content">
                    <div className="logo mb-40">
                        <Link href="/">
                            <img
                                src="/assets/img/logo/odin-logo-square.png"
                                alt="logo"
                                style={{ width: "50%", height: "50%" }}
                            />
                        </Link>
                    </div>
                    <div className="mm-menu">
                        <ul>
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li
                                className={
                                    courses
                                        ? "has-droupdown active"
                                        : "has-droupdown"
                                }
                            >
                                <a
                                    onClick={() => {
                                        openMobileMenu("courses")
                                    }}
                                >
                                    Courses
                                </a>
                                <ul
                                    className={
                                        courses ? "sub-menu active" : "sub-menu"
                                    }
                                >
                                    <li>
                                        <Link href="/course-grid">Courses</Link>
                                    </li>
                                    <li>
                                        <Link href="/course-list">
                                            Course List
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/course-sidebar">
                                            Course Sidebar
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/course-details">
                                            Course Details
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li
                                className={
                                    blog
                                        ? "has-droupdown active"
                                        : "has-droupdown"
                                }
                            >
                                <a
                                    onClick={() => {
                                        openMobileMenu("blog")
                                    }}
                                >
                                    Blog
                                </a>
                                <ul
                                    className={
                                        blog ? "sub-menu active" : "sub-menu"
                                    }
                                >
                                    <li>
                                        <Link
                                            href="/blog"
                                            as="/blog"
                                        >
                                            Blog
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/blog-details">
                                            Blog Details
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li
                                className={
                                    pages
                                        ? "has-droupdown active"
                                        : "has-droupdown"
                                }
                            >
                                <a
                                    onClick={() => {
                                        openMobileMenu("pages")
                                    }}
                                >
                                    Pages
                                </a>
                                <ul
                                    className={
                                        pages ? "sub-menu active" : "sub-menu"
                                    }
                                >
                                    <li>
                                        <Link href="/about">About</Link>
                                    </li>
                                    <li>
                                        <Link href="/instructor">
                                            Instructor
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/instructor-details">
                                            Instructor Details
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/event-details">
                                            Event Details
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/cart">My Cart</Link>
                                    </li>
                                    <li>
                                        <Link href="/wishlist">
                                            My Wishlist
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/checkout">Checkout</Link>
                                    </li>
                                    <li>
                                        <Link href="/sign-in">Sign In</Link>
                                    </li>
                                    <li>
                                        <Link href="/sign-up">Sign Up</Link>
                                    </li>
                                    <li>
                                        <Link href="/error">Error</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link href="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    {/* <div className="sidebar__search p-relative mt-40 ">
            <form action="#">
              <input type="text" placeholder="Search..." />
              <button type="submit">
                <i className="fas fa-search"></i>
              </button>
            </form>
          </div> */}
                </div>
            </div>
        </div>
    )
}

export default BurgerMenus
