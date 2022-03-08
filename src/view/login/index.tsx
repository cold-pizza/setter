import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./style.scss";
import { useHistory } from "react-router-dom";
// import { LoginIprops } from "../../types";
import onChange from "../../controller/onChange";
import { LoginIprops } from "../../types";

const Login = function () {
    const history = useHistory();
    const [loginState, setLoginState] =
        useState<LoginIprops["loginState"]>(null);
    console.log(loginState);
    return (
        <div className="login">
            <form>
                <input
                    type="text"
                    name="id"
                    placeholder="id"
                    onChange={(e) => onChange(e, loginState, setLoginState)}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="password"
                    onChange={(e) => onChange(e, loginState, setLoginState)}
                />
                <Button
                    onClick={() => history.push("/main")}
                    className="login-btn"
                    type="submit"
                    variant="success"
                >
                    로그인
                </Button>
                <Button onClick={() => history.push("/signUp")} variant="light">
                    회원가입
                </Button>
            </form>
        </div>
    );
};

export default Login;
