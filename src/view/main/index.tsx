import React, { useState } from "react";
import "./style.scss";
import { Button } from "react-bootstrap";

const Main = function () {
    const [start, setStart] = useState(false);
    return (
        <div className="main">
            {!start ? (
                <Button
                    onClick={() => setStart(!start)}
                    style={{ width: "200px" }}
                    variant="success"
                >
                    Start
                </Button>
            ) : (
                <Button
                    onClick={() => setStart(!start)}
                    style={{ width: "200px" }}
                    variant="secondary"
                >
                    정지
                </Button>
            )}
            <section className="vaca-form">
                <p>Stage 1</p>
                <p>랜덤단어</p>
                <form>
                    <input type="text" placeholder="단어를 입력해주세요!" />
                    <button type="submit">전송</button>
                </form>
            </section>
        </div>
    );
};

export default Main;
