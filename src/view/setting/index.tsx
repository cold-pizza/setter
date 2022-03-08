import { useHistory } from "react-router-dom";
import "./style.scss";

const Setting = function () {
    const history = useHistory();
    return (
        <ul className="setting">
            <li onClick={() => history.push("/word")}>단어관리</li>
            <li onClick={() => history.replace("/")}>로그아웃</li>
            <li onClick={() => history.goBack()}>뒤로가기</li>
        </ul>
    );
};
export default Setting;
