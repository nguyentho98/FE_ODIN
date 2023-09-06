"use client"
import { postLogin } from "@/redux/Slice/Auth/authSlice"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ChangeEvent, useState } from "react"
import { useDispatch } from "react-redux"
import { toast } from "react-toastify"

const SignInMain: React.FC = () => {
    const [userLogin, setUserLogin] = useState({
        username: "test@gmail.com",
        password: "testapi123",
        keepSign: false,
    })

    const dispatch = useDispatch()
    const router = useRouter()

    //   console.log("token", authState.token);

    const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setUserLogin((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleKeepSignChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUserLogin({ ...userLogin, keepSign: e.target.checked })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const userPost = userLogin
        dispatch<any>(postLogin(userPost)).then(
            (originalPromiseResult: any) => {
                if (originalPromiseResult.type === "auth/postLogin/fulfilled") {
                    toast.success("Login Success!", {
                        position: "top-right",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    })
                    localStorage.setItem("TOKEN", originalPromiseResult?.payload?.data?.token)
                    localStorage.setItem("USER", JSON.stringify(originalPromiseResult?.payload?.data?.user))
                    router.back()
                    return
                }
                // toast.error("Login Fail!", {
                //     position: "top-right",
                //     autoClose: 1000,
                //     hideProgressBar: false,
                //     closeOnClick: true,
                //     pauseOnHover: true,
                //     draggable: true,
                //     progress: undefined,
                //     theme: "light",
                // })
            }
        )
    }

    return (
        <main>
            <section className="signup__area po-rel-z1 pt-100 pb-145">
                <div className="sign__shape">
                    <img
                        className="man-1"
                        src="assets/img/icon/sign/man-1.png"
                        alt="img not found"
                    />
                    <img
                        className="man-2"
                        src="assets/img/icon/sign/man-2.png"
                        alt="img not found"
                    />
                    <img
                        className="circle"
                        src="assets/img/icon/sign/circle.png"
                        alt="img not found"
                    />
                    <img
                        className="zigzag"
                        src="assets/img/icon/sign/zigzag.png"
                        alt="img not found"
                    />
                    <img
                        className="dot"
                        src="assets/img/icon/sign/dot.png"
                        alt="img not found"
                    />
                    <img
                        className="bg"
                        src="assets/img/icon/sign/sign-up.png"
                        alt="img not found"
                    />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-8 offset-xxl-2 col-xl-8 offset-xl-2">
                            <div className="section__title-wrapper text-center mb-55">
                                <h2 className="section__title">
                                    Sign in to <br /> recharge direct.
                                </h2>
                                <p>
                                    it you don't have an account you can{" "}
                                    <Link href="/sign-up">Register here!</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xxl-6 offset-xxl-3 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
                            <div className="sign__wrapper white-bg">
                                <div className="sign__header mb-35">
                                    <div className="sign__in text-center">
                                        {/* <a
                                            href="#"
                                            className="sign__social text-start mb-15"
                                        >
                                            <i className="fab fa-facebook-f"></i>
                                        </a> */}
                                        <p>
                                            {" "}
                                            <span>........</span> Or,{" "}
                                            <Link href="/sign-in">sign in</Link>{" "}
                                            with your email
                                            <span> ........</span>{" "}
                                        </p>
                                    </div>
                                </div>
                                <div className="sign__form">
                                    <form
                                        action=""
                                        onSubmit={handleSubmit}
                                    >
                                        <div className="sign__input-wrapper mb-6">
                                            <h5>Work email</h5>
                                            <div className="sign__input">
                                                <input
                                                    name="email"
                                                    type="text"
                                                    value={userLogin.username}
                                                    onChange={handleChangeInput}
                                                    placeholder="e-mail address"
                                                />
                                                <i className="fas fa-envelope"></i>
                                            </div>
                                        </div>
                                        <div className="sign__input-wrapper mb-10">
                                            <h5>Password</h5>
                                            <div className="sign__input">
                                                <input
                                                    name="password"
                                                    type="text"
                                                    value={userLogin.password}
                                                    onChange={handleChangeInput}
                                                    placeholder="Password"
                                                />
                                                <i className="fas fa-lock"></i>
                                            </div>
                                        </div>
                                        <div className="sign__action d-sm-flex justify-content-between mb-30">
                                            <div className="sign__agree d-flex align-items-center">
                                                <input
                                                    className="m-check-input"
                                                    type="checkbox"
                                                    id="m-agree"
                                                    checked={userLogin.keepSign}
                                                    onChange={
                                                        handleKeepSignChange
                                                    }
                                                />
                                                <label
                                                    className="m-check-label"
                                                    htmlFor="m-agree"
                                                >
                                                    Keep me signed in
                                                </label>
                                            </div>
                                            <div className="sign__forgot">
                                                <a href="#">
                                                    Forgot your password?
                                                </a>
                                            </div>
                                        </div>
                                        <button className="e-btn mt-6 w-100">
                                            <span></span> Sign In
                                        </button>
                                        <div className="sign__new text-center mt-10">
                                            <p>
                                                New to Markit?{" "}
                                                <Link href="/sign-up">
                                                    Sign Up
                                                </Link>
                                            </p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default SignInMain
