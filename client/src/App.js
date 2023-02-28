import Prompt from "./components/Prompt/Prompt";

function App() {

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
            <Prompt />
            {/*<Prompt question={userQuestion} answer={chatAnswer.prompt}/>*/}
        </div>
    );
}

export default App;