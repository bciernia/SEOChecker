import {useRef} from "react";

import './Question.css'

function Question(props) {
    const inputRef = useRef(null);

    const onQuestionSubmit = event => {
        event.preventDefault();

        props.onQuestionSubmit(inputRef.current.value);
        inputRef.current.value = '';
    }

    return (
        <form className="question-form" onSubmit={onQuestionSubmit}>
            <label>Ask a question</label>
            <input className="question-form-input" type="text" ref={inputRef}/>
            <button className="question-form-btn" type="submit">Ask</button>
        </form>
    );
}

export default Question;