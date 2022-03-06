import { useHistory } from "react-router";
import "./style.scss";

const Nav = function () {
    const history = useHistory();
    return (
        <nav className="nav">
            <p onClick={() => history.push("/setting")}>설정</p>
        </nav>
    );
};

export default Nav;
