import Card from "../UI/Card/Card";
import Answer from "./Answer";

import './Prompt.css';
import Question from "./Question";
import Wrapper from "../Helper/Wrapper";
import {useState} from "react";

function Prompt() {

    const [chatAnswer, setChatAnswer] = useState("");

    const onQuestionSubmit = question => {

        fetch(`http://127.0.0.1:3000/api`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({question}),
        })
            .then(res => res.json())
            .then(data => setChatAnswer(data.question))
    };

    return (
        <Wrapper>
            <Card additionalClasses="prompt">
                <Question onQuestionSubmit={onQuestionSubmit}/>
            </Card>
            <Card additionalClasses="prompt">
                <Answer answer={chatAnswer}/>
            </Card>
        </Wrapper>
    );
}

export default Prompt;