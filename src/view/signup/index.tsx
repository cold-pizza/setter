import "./style.scss";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const SignUp = function () {
    const history = useHistory();
    return (
        <div className="signup">
            <p>회원가입</p>
            <form>
                <input type="text" name="name" placeholder="name" />
                <input type="text" name="id" placeholder="id" />
                <input type="password" name="password" placeholder="password" />
                <input
                    type="password"
                    name="passwordCheck"
                    placeholder="password check"
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
