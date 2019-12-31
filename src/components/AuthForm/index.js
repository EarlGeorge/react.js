import React, { useState } from 'react'

import { AuthForm } from './style'


const Index = (props) => {
    const { authError, signIn, regUser, loginWithProvider, resetPasswordEmail } = props

    // too much stuff is happening : ))

    const [value, setValue] = useState(true)
    const [text, setText] = useState(false)
    const [signINUser, setSignINUser] = useState({})
    const [signUP, setSignUP] = useState({})

    const [resetP, setResetPass] = useState(false)
    const resetpess = resetP ? (`resetPassword`) : (null)
    const h1Top = resetP ? ('Reset Password') : ('Sign in')

    const change = value ? (null) : (`overlayActive`)
    const textlog = text ? (`formAnim`) : (null)

    const switchStyle = () => {
        setValue(!value)
    }

    // SignIN
    const handleSignINChange = (e) => {
        e.persist()
        setSignINUser(signINUser => ({ ...signINUser, [e.target.name]: e.target.value }))
    }
    const submitSignIN = (e) => {
        e.preventDefault()

        // for form animation
        const delay = () => signIn(signINUser)

        setTimeout(delay, 2000)

        setText(!text)
    }

    // SignUP
    const handleSignUPChange = (e) => {
        e.persist()
        setSignUP(signUP => ({ ...signUP, [e.target.name]: e.target.value }))
    }
    const submitSignUP = (e) => {
        e.preventDefault()
        regUser(signUP)
    }

    const loginUserWithProvider = (provider) => {
        loginWithProvider(provider)
    }

    const resetPassword = (e) => {
        e.preventDefault()
        setResetPass(true)
        resetPasswordEmail(signINUser.email)
    }

    return (
        <AuthForm>
            <div className={`container ${change} ${authError ? (null) : (textlog)} `} >
                <div className={`signUp formCon`}>
                    {/* Sign Up form */}
                    <form onSubmit={submitSignUP}>
                        <h1>Create Account</h1>
                        <span>Use your email for registration</span>
                        <input type="text" name='firstName' placeholder="First Name" onChange={handleSignUPChange} required />
                        <input type="text" name='lastName' placeholder="Last Name" onChange={handleSignUPChange} required />
                        <input type="email" name='email' placeholder="Email" onChange={handleSignUPChange} required />
                        <input type="password" name='password' placeholder="Password" onChange={handleSignUPChange} required />
                        <button> {authError ? <span>{authError}</span> : ('Sign UP')} </button>
                    </form>
                </div>
                <div className={`signIn ${resetpess} formCon`}>
                    {/* Sign In form */}
                    <form onSubmit={submitSignIN}>
                        <h1>{h1Top}</h1>
                        <div className="social">
                            <a href="#" className={`icon facebook`} onClick={() => loginUserWithProvider('facebook')}></a>
                            <a href="#" className={`icon github`} onClick={() => loginUserWithProvider('github')}></a>
                            <a href="#" className={`icon google`} onClick={() => loginUserWithProvider('google')}></a>
                            <a href="#" className={`icon twitter`} onClick={() => loginUserWithProvider('twitter')}></a>
                        </div>
                        <span>Or use your account</span>
                        <input type="email" name="email" placeholder="Email" onChange={handleSignINChange} required />
                        <input type="password" name="password" placeholder="Password" onChange={handleSignINChange} required />
                        <a href="#" onClick={resetPassword}>{resetP ? ('Reset Password!') : ('Forgot your password?')}</a>
                        <button> {authError ? <span>{authError}</span> : ('Sign In')} </button>
                    </form>
                </div>
                <div className="overlayContainer">
                    {/* The overlay */}
                    <div className="overlay">
                        <div className="overlayLeft">
                            <h1>Welcome Back!</h1>
                            <p>
                                To keep connected please login with your personal info
                        </p>
                            <button onClick={switchStyle}>Sign In</button>
                        </div>
                        <div className="overlayRight">
                            <h1>Create Account</h1>
                            <p>
                                Enter your personal details and start journey with us
                        </p>
                            <button onClick={switchStyle}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </AuthForm>
    )
}


export default Index



