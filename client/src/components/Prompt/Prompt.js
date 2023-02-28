import {useState} from "react";
import Card from "../UI/Card/Card";

import Answer from "./Answer";
import './Prompt.css';
import Question from "./Question";
import Wrapper from "../Helper/Wrapper";
import Spinner from "../UI/Spinner/Spinner";

function Prompt() {

    const [chatAnswer, setChatAnswer] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const onQuestionSubmit = question => {

        setIsLoading(true);

        fetch(`http://127.0.0.1:3000/api`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({question}),
        })
            .then(res => res.json())
            .then(data => setChatAnswer(data.question))
            .finally(() => {
                setIsLoading(false);
            })
    };

    return (
        <Wrapper>
            <Card additionalClasses="prompt">
                <Question onQuestionSubmit={onQuestionSubmit}/>
            </Card>
            <Card additionalClasses="prompt">
                <Answer answer={chatAnswer}/>
                {isLoading && <Spinner />}
            </Card>
        </Wrapper>
    );
}

export default Prompt;