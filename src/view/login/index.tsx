import { Button } from "react-bootstrap";
import "./style.scss";
import { useHistory } from "react-router-dom";
// import { LoginIprops } from "../../types";

const Login = function () {
    const history = useHistory();
    return (
        <div className="login">
            <p>setter</p>
            <form>
                <input type="text" placeholder="id" />
                <input type="password" placeholder="password" />
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
