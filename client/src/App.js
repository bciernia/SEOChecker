import React, {useEffect, useState} from "react";
import Prompt from "./components/Prompt/Prompt";

function App() {

    const [chatAnswer, setChatAnswer] = useState({});
    const [question,setQuestion] = useState("");
    const userQuestion =  question => {
        setQuestion(question);

        fetch(`http://127.0.0.1:3000/api`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({question}),
        })
            .then(res => res.json())
            .then(data => setChatAnswer(data))
    };

    // fetch(`http://127.0.0.1:3000/api/${question}`)
    //     .then(data => setChatAnswer(data))
    //     .catch(err => console.log(err));

    // useEffect(() => {
    //     fetch(`http://127.0.0.1:3000/api/${question}`)
    //         .then(res => res.json())
    //         .catch(err => console.log(err));
    // }, [question])

    // useEffect(() => {
    //     fetch('/openai')
    //         .then(res => res.json())
    //         .then(data => setChatAnswer(data))
    //         .catch(err => console.log(err))
    // }, []);

    return (
        <div>
            <Prompt question={userQuestion} answer={chatAnswer.prompt}/>
            {/*<Prompt question={userQuestion} answer={chatAnswer.prompt}/>*/}
        </div>
    );
}

export default App;