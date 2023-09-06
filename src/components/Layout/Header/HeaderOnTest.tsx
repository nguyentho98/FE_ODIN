import Link from "next/link"
import React from "react"

const HeaderTest: React.FC = () => {
    return (
        <React.Fragment>
            <div className="px-4 py-3 bg-[#005e12] w-screen h-16 fixed top-0 flex flex-row items-center">
                <Link href="/" className="h-full">
                    <img
                        src="/assets/img/logo/odin-logo-login.png"
                        alt="logo"
                        className="h-[80%]"
                    />
                </Link>
            </div>
        </React.Fragment>
    )
}

export default HeaderTest
