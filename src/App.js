import React, { useState } from 'react';
import triviaQs from "./questions/Apprentice_TandemFor400_Data.json";
// export default function Homepage() {
//     const [playStatus, setPlayStatus] = useState(false);

//     return (
//         <div>Hi</div>
//     )

    
// }
export default function App() {
    
    const [currentQ, setCurrentQ] = useState(0);
    const [playStatus, setPlayStatus] = useState(false);

    // const allOptions = [];
    for (let i in triviaQs) {
        // triviaQs[i].allOptions = .push(triviaQs[i].correct)
        let options = triviaQs[i].incorrect
        options.push(triviaQs[i].correct)
        // console.log(options)
        triviaQs[i].allOptions = options;
        options = '';
        
    }
    
    const handleUserAnswer = (answerClicked) => {
        if (answerClicked == triviaQs[currentQ].correct) {
            alert("correct");
        } else {
            alert("incorrect")
        }


    }
    return (
        <div>
            <h1 id="welcome">Welcome to trivia!</h1>

            <div className="question-box">
                <h3>Question #{currentQ+1}/{triviaQs.length}</h3>
                <h6>{triviaQs[currentQ].question}</h6>
                <div className="show-options">
                    {triviaQs[currentQ].allOptions.map(allOptions => (
                        <button onClick={() => handleUserAnswer(allOptions)}>{allOptions}</button>
                    ))}

                    

            
                </div>
            </div>
        </div>


    )
    
}