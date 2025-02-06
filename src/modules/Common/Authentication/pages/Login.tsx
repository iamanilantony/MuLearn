import { useEffect, useState } from "react";
import styles from "./Login.module.css";
import {
    login,
    requestEmailOrMuidOtp,
    otpVerification
} from "../services/apis";
import { useNavigate } from "react-router-dom";
import {
    MuButton,
    PowerfulButton
} from "@/MuLearnComponents/MuButtons/MuButton";

const Login = () => {
    const [showOrHidePassword, setShowOrHidePassword] = useState("password");
    const [muid, setMuID] = useState("");
    const [emailOrMuid, setEmailOrMuid] = useState("");
    const [hasError, setHasError] = useState(true);
    const [status, setStatus] = useState(0);
    const [password, setPassword] = useState("");
    const [otpForm, setOtpForm] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [otpVerifyLoading, setOtpVerifyLoading] = useState(false);
    const [otpLoading, setOtpLoading] = useState(false);
    const [otpError, setOtpError] = useState(false);
    let ruri = window.location.href.split("=")[1];
    const navigate = useNavigate();
    useEffect(() => {
        setHasError(true);
        setPassword("");
        setStatus(0);
    }, [emailOrMuid]);
    return (
        <div className={styles.login_page}>
            <div className={styles.login_container}>
                {!otpForm ? (
                    <div className={styles.login_form}>
                        <h1>User Login</h1>
                        <p className={styles.p_welcome}>
                            Hey welcome, please enter your details to sign in to
                            your account
                        </p>
                        <form>
                            <input
                                type="text"
                                placeholder="Enter µID or Email"
                                required
                                value={muid}
                                onChange={e => setMuID(e.target.value)}
                            />
                            <div className={styles.password_div}>
                                <input
                                    type={showOrHidePassword}
                                    placeholder="Password"
                                    required
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />
                                <p
                                    className={styles.password_icon}
                                    onClick={e => {
                                        e.preventDefault();
                                        showOrHidePassword == "password"
                                            ? setShowOrHidePassword("text")
                                            : setShowOrHidePassword("password");
                                    }}
                                >
                                    {showOrHidePassword === "text" ? (
                                        <i className="fi fi-sr-eye"></i>
                                    ) : (
                                        <i className="fi fi-sr-eye-crossed"></i>
                                    )}
                                </p>
                            </div>
                            <p style={{ textAlign: "left" }}>
                                <a href="forgot-password">
                                    Forgot your <b>password?</b>
                                </a>
                                <a
                                    onClick={() => {
                                        setOtpForm(true);
                                    }}
                                >
                                    Login with <b>OTP</b>
                                </a>
                            </p>

                            <PowerfulButton
                                variant="plain"
                                type="submit"
                                className={styles.signin_button}
                                onClick={e => {
                                    e.preventDefault();
                                    if (muid != "" && password != "") {
                                        login(
                                            muid,
                                            password,
                                            navigate,
                                            setIsLoading,
                                            ruri
                                        );
                                    }
                                }}
                                isLoading={isLoading}
                            >
                                Sign In
                            </PowerfulButton>
                            <span className={styles.register}>
                                <a href="/register">
                                    Don't have an account? Sign up
                                </a>
                            </span>
                            <span className={styles.register}>
                                <a href="/register">
                                    Home Page
                                </a>
                            </span>
                        </form>
                    </div>
                ) : null}

                {otpForm ? (
                    <div className={styles.login_form}>
                        <h1>User Login</h1>
                        <p className={styles.p_welcome}>
                            Hey welcome, please enter your details to sign in to
                            your account
                        </p>
                        <form>
                            <input
                                type="text"
                                placeholder="Enter email or µID"
                                required
                                value={emailOrMuid}
                                onChange={e => setEmailOrMuid(e.target.value)}
                            />
                            {status === 200 ? (
                                <div className={styles.password_div}>
                                    <input
                                        type={showOrHidePassword}
                                        placeholder="OTP"
                                        required
                                        value={password}
                                        onChange={e =>
                                            setPassword(e.target.value)
                                        }
                                    />
                                    <p
                                        className={styles.password_icon}
                                        onClick={e => {
                                            e.preventDefault();
                                            showOrHidePassword == "password"
                                                ? setShowOrHidePassword("text")
                                                : setShowOrHidePassword(
                                                      "password"
                                                  );
                                        }}
                                    >
                                        {showOrHidePassword === "text" ? (
                                            <i className="fi fi-sr-eye"></i>
                                        ) : (
                                            <i className="fi fi-sr-eye-crossed"></i>
                                        )}
                                    </p>
                                </div>
                            ) : null}
                            <p style={{ textAlign: "left" }}>
                                <a href="forgot-password">
                                    Forgot your <b>password?</b>
                                </a>
                                <a
                                    onClick={() => {
                                        setOtpForm(false);
                                    }}
                                >
                                    Login with <b>password</b>
                                </a>
                            </p>

                            <PowerfulButton
                                variant="plain"
                                type="submit"
                                className={styles.signin_button}
                                onClick={e => {
                                    setHasError(false);
                                    e.preventDefault();
                                    if (emailOrMuid != "" && hasError) {
                                        requestEmailOrMuidOtp({
                                            emailOrMuid,
                                            setHasError,
                                            setStatus,
                                            setOtpLoading,
                                            setOtpError
                                        });
                                    }
                                    if (!hasError && password != "") {
                                        otpVerification(
                                            emailOrMuid,
                                            password,
                                            navigate,
                                            setOtpVerifyLoading,
                                            ruri
                                        );
                                    }
                                }}
                                // disabled={status === 1 ? true : false}
                                isLoading={
                                    otpLoading ? otpLoading : otpVerifyLoading
                                }
                            >
                                {hasError
                                    ? "Request OTP"
                                    : otpLoading
                                      ? "Processing"
                                      : otpError
                                        ? "Request OTP"
                                        : "Sign In"}
                            </PowerfulButton>
                            <span className={styles.register}>
                                {" "}
                                <a href="/register">
                                    Don't have an account? Sign up
                                </a>
                            </span>
                            <span className={styles.register}>
                                {" "}
                                <a href="/register">
                                    Go To Home Page
                                </a>
                            </span>
                        </form>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default Login;
