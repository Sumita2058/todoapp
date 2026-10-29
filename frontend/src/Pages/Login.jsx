import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import API from './../api/Api';
import "../index.css";
function Login() {
    const nav = useNavigate()
    const [form, setForm] = useState({
        email: "",
        password: ""
    })
    const [otp, setOtp] = useState("")
    const [showOtp, setShowOtp] = useState(false)

    const sendOTP = async () => {

        try {
            const res = await API.post("/auth/sendOTP", form)
            alert("otp sent.check your email ")
            setShowOtp(true)

        } catch (error) {
            alert("failed to send otp")

        }
    }


    const verifyOTP = async () => {

        try {
            const res = await API.post("/auth/verifyOTP", {
                email: form.email,
                otp
            })
            localStorage.setItem("token", res.data.token)

            alert("Login successful")
            nav("/")

            setTimeout(() => {      
                window.location.reload()
            }, 500)

        } catch (error) {
            alert("otp verification failed")

        }
    }

    return (
        <div className='flex min-h-screen justify-center items-center'>
            <div className='flex flex-col gap-6 text-center' >
                <h1>Login</h1>

                {
                    !showOtp ? (
                        <>
                            <input type="email" placeholder='Enter your email'
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        email: e.target.value

                                    })
                                }

                            />
                            <input type="password" placeholder='Enter your password'
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        password: e.target.value

                                    })
                                }

                            />

                            <button type='submit' onClick={sendOTP}>Login</button>

                            <p>Don't have an account ?
                                <Link to="/signup">Signup</Link>
                            </p>
                        </>

                    ) : (
                        <>
                            <input type="number" placeholder='Enter your otp'
                                onChange={(e) => setOtp(e.target.value)}

                            />
                            <button onClick={verifyOTP}>Verify OTP</button>
                        </>
                    )
                }


            </div>

        </div>
    )
}

export default Login