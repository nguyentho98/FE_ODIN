"use client"

import Link from "next/link"
import { ChangeEvent, useState } from "react"
import axios from "axios"

const SignUpMain: React.FC = () => {
    const [formSignUp, setFormSignUp] = useState({
        fullName: "",
        email: "",
        password: "",
        rePassword: "",
        agreed: false,
    })
    const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormSignUp({ ...formSignUp, [name]: value })
    }
    const handleAgreeChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormSignUp({ ...formSignUp, agreed: e.target.checked })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const userPost = {
            username: "",
            password: "",
        }
        userPost.username = formSignUp.email
        userPost.password = formSignUp.password

        formSignUp.password === formSignUp.rePassword && formSignUp.agreed
            ? axios.post(`${process.env.NEXT_PUBLIC_API}/auth/email/register`, userPost).then((res) => {
                  console.log(res)
              })
            : console.log("Lỗi trong quá trình đăng ký!!")
    }
    return (
        <main>
            <section className="signup__area po-rel-z1 pt-100 pb-145">
                <div className="sign__shape">
                    <img
                        className="man-1"
                        src="assets/img/icon/sign/man-3.png"
                        alt="img not found"
                    />
                    <img
                        className="man-2 man-22"
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
                    <img
                        className="flower"
                        src="assets/img/icon/sign/flower.png"
                        alt="img not found"
                    />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-8 offset-xxl-2 col-xl-8 offset-xl-2">
                            <div className="section__title-wrapper text-center mb-55">
                                <h2 className="section__title">
                                    Create a free <br /> Account
                                </h2>
                                <p>I'm a subhead that goes with a story.</p>
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
                      className="sign__social g-plus text-start mb-15"
                    >
                      <i className="fab fa-google"></i>Sign Up with Google
                    </a> */}
                                        <p>
                                            {" "}
                                            <span>........</span> Or, <Link href="/sign-up">sign up</Link> with your
                                            email
                                            <span> ........</span>{" "}
                                        </p>
                                    </div>
                                </div>

                                <div className="sign__form">
                                    <form
                                        action="#"
                                        onSubmit={handleSubmit}
                                    >
                                        {/* <div className="sign__input-wrapper mb-25">
                  <h5>Full Name</h5>
                  <div className="sign__input">
                    <input
                      type="text"
                      name="fullName"
                      value={formSignUp.fullName}
                      onChange={handleChangeInput}
                      placeholder="Full name"
                    />
                    <i className="fas fa-user"></i>
                  </div>
                </div> */}
                                        <div className="sign__input-wrapper mb-6">
                                            <h5>Work email</h5>
                                            <div className="sign__input">
                                                <input
                                                    type="text"
                                                    name="email"
                                                    value={formSignUp.email}
                                                    onChange={handleChangeInput}
                                                    placeholder="e-mail address"
                                                />
                                                <i className="fas fa-envelope"></i>
                                            </div>
                                        </div>
                                        <div className="sign__input-wrapper  mb-6">
                                            <h5>Password</h5>
                                            <div className="sign__input">
                                                <input
                                                    type="text"
                                                    name="password"
                                                    value={formSignUp.password}
                                                    onChange={handleChangeInput}
                                                    placeholder="Password"
                                                />
                                                <i className="fas fa-lock"></i>
                                            </div>
                                        </div>
                                        <div className="sign__input-wrapper  mb-6">
                                            <h5>Re-Password</h5>
                                            <div className="sign__input">
                                                <input
                                                    type="text"
                                                    name="rePassword"
                                                    value={formSignUp.rePassword}
                                                    onChange={handleChangeInput}
                                                    placeholder="Re-Password"
                                                />
                                                <i className="fas fa-lock"></i>
                                            </div>
                                        </div>
                                        <div className="sign__action d-flex justify-content-between mb-30">
                                            <div className="sign__agree d-flex align-items-center">
                                                <input
                                                    className="m-check-input"
                                                    type="checkbox"
                                                    id="m-agree"
                                                    checked={formSignUp.agreed}
                                                    onChange={handleAgreeChange}
                                                />
                                                <label
                                                    className="m-check-label"
                                                    htmlFor="m-agree"
                                                >
                                                    I agree to the <a href="#">Terms & Conditions</a>
                                                </label>
                                            </div>
                                        </div>
                                        <button className="e-btn mt-6 w-100">
                                            {" "}
                                            <span></span> Sign Up
                                        </button>
                                        <div className="sign__new text-center mt-10">
                                            <p>
                                                Already in Markit ? <Link href="/sign-in">Sign In</Link>
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

export default SignUpMain
