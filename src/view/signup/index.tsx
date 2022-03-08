import { useState } from "react";
import "./style.scss";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import onChange from "../../controller/onChange";
import { SignUpIprops } from "../../types";

const SignUp = function () {
    const history = useHistory();
    const [signUpState, setSignUpState] =
        useState<SignUpIprops["signUpState"]>(null);
    return (
        <div className="signup">
            <p>회원가입</p>
            <form>
                <input
                    type="text"
                    name="name"
                    placeholder="name"
                    onChange={(e) => onChange(e, signUpState, setSignUpState)}
                />
                <input
                    type="text"
                    name="id"
                    placeholder="id"
                    onChange={(e) => onChange(e, signUpState, setSignUpState)}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="password"
                    onChange={(e) => onChange(e, signUpState, setSignUpState)}
                />
                <input
                    type="password"
                    name="passwordCheck"
                    placeholder="password check"
                    onChange={(e) => onChange(e, signUpState, setSignUpState)}
                />
                <Button type="submit" variant="success">
                    완료
                </Button>
            </form>
            <Button onClick={() => history.goBack()} variant="secondary">
                취소
            </Button>
        </div>
    );
};

export default SignUp;
