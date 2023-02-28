import {useState} from "react";

import './Question.css'

function Question(props) {
    const [userQuestion, setUserQuestion] = useState('');

    const askQuestion = event => {
        event.preventDefault();

        props.question(userQuestion);
        setUserQuestion('');
    }

    const userQuestionChangeHandler = (event)  =>{
        setUserQuestion(event.target.value);
    }

    return (
        <form className="question-form" onSubmit={askQuestion}>
            <label>Ask a question</label>
            <input className="question-form-input" type="text" value={userQuestion} onChange={userQuestionChangeHandler} />
            <button className="question-form-btn" type="submit">Ask</button>
        </form>
    );
}

export default Question;