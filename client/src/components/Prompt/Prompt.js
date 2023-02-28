import Card from "../UI/Card/Card";
import Answer from "./Answer";

import './Prompt.css';
import Question from "./Question";
import Wrapper from "../Helper/Wrapper";

function Prompt(props) {
    const userQuestion = question => {
        props.question(question);
    }

    return (
        <Wrapper>
            <Card additionalClasses="prompt">
                <Question question={userQuestion}/>
            </Card>
            <Card additionalClasses="prompt">
                <Answer answer={props.answer}/>
            </Card>
        </Wrapper>
    );
}

export default Prompt;