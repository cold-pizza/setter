import { useHistory } from "react-router";
import "./style.scss";

const Word = function () {
    const history = useHistory();
    return (
        <div>
            <p>단어 관리</p>
            <ul>
                <li>
                    <p>영어</p>
                    <p>뜻</p>
                    <button>삭제</button>
                </li>
                <li>
                    <p>영어</p>
                    <p>뜻</p>
                    <button>삭제</button>
                </li>
                <li>
                    <p>영어</p>
                    <p>뜻</p>
                    <button>삭제</button>
                </li>
            </ul>
            <form>
                <p>추가할 영어를 입력해주세요!</p>
                <input type="text" placeholder="영단어를 입력해주세요." />
                <input
                    type="text"
                    placeholder="단어를 맞출 한글을 입력해주세요."
                />
                <button>추가</button>
            </form>
            <button onClick={() => history.push("/main")}>뒤로가기</button>
        </div>
    );
};

export default Word;
