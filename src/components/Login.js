import React, { useState } from "react";
import { UserIcon, LockClosedIcon } from "@heroicons/react/solid";
import loginAnimation from "../assets/login.svg";

// styles
import "./Login.css";
import { useAuth } from "../context/Auth.provider";
import { useNavigate } from "react-router-dom";

const Login = ({ value }) => {
    const { login } = useAuth();

    const [values, setValues] = useState({
        amount: "",
        password: "",
        weight: "",
        weightRange: "",
        showPassword: false,
    });

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            email: e.target.email.value,
            password: e.target.password.value,
        };
        const loggedIn = login(user);
        if (!loggedIn) {
            alert("Invalid credentials");
        } else {
            navigate("/");
        }
    };

    return value === "English" ? (
        <div className="login-page">
            <div className="lottie-animation">
                <img src={loginAnimation} alt="ddd" />
            </div>
            <form className="form" onSubmit={handleSubmit}>
                <h1>Login Form</h1>
                <div className="input-group">
                    <UserIcon className="icon" height={"20px"} />

                    <input
                        type="email"
                        className="input"
                        required
                        name="email"
                        placeholder="Email Id"
                    />
                </div>
                <div className="input-group">
                    <LockClosedIcon className="icon" height={"20px"} />
                    <input
                        type="password"
                        className="input"
                        required
                        name="password"
                        placeholder="Password"
                    />
                </div>
                <p>Forgor Password</p>
                <button className="btn">Log In</button>
                <p>Not Registered? Register Now</p>
            </form>
        </div>
    ) : (
        <div className="login-page">
            <div className="lottie-animation">
                <img src={loginAnimation} alt="ddd" />
            </div>
            <form className="form">
                <h1>Login Form</h1>
                <div className="input-group">
                    <UserIcon className="icon" height={"20px"} />
                    <input
                        type="text"
                        className="input"
                        required
                        placeholder="લૉગિન આઈડી"
                    />
                </div>
                <div className="input-group">
                    <LockClosedIcon className="icon" height={"20px"} />
                    <input
                        type="password"
                        className="input"
                        required
                        placeholder="પાસવર્ડ"
                    />
                </div>
                <p>પાસવર્ડ ભૂલી ગયા?</p>
                <button className="btn">લોગીન કરો</button>
                <p>રજીસ્ટ્રેશન નથી કરાવેલ? અત્યારે જ કરો!</p>
            </form>
        </div>
    );
};

export default Login;
