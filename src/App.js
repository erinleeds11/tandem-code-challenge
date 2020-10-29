import React, { useState } from 'react';
import { useEffect } from 'react';
import triviaQs from "./questions/Apprentice_TandemFor400_Data.json";

for (let i in triviaQs) {
    let options = triviaQs[i].incorrect;
    options.push(triviaQs[i].correct);
    console.log(options);
    triviaQs[i].allOptions = options;
}

export default function App() {
    
    const [currentQ, setCurrentQ] = useState(0);
    const [numCorrect, setNumCorrect] = useState(0);
    const [finalResults, displayFinalResults] = useState(false);
    const [welcomeScreen, setWelcomeScreen] = useState(true);

    const handleWelcomeScreen = (value) => {
        if (value == "yes") {
            setWelcomeScreen(false);
        }

    }
    
    const handleUserAnswer = (answerClicked) => {
        if (answerClicked == triviaQs[currentQ].correct) {
            // alert("correct");
            setNumCorrect(numCorrect+1); 
        } else {
            // alert("incorrect")
        }

        const nextQ = currentQ + 1
        if (nextQ < triviaQs.length) {
            setCurrentQ(currentQ+1)
        } else {
            displayFinalResults(true)
        }


    }

    return (
        <div>
            {welcomeScreen? (
            <div>
                <h1 id="welcome">Welcome to trivia!</h1>
                    <div>Would you like to play Tandem's trivia game?</div>
                        <button id="yes" value="yes" onClick={(e)=> handleWelcomeScreen(e.target.value)}>yes</button>
                        <button  id="yes" value="no" onClick={(e)=> handleWelcomeScreen(e.target.value)}>no</button>
                    
            </div>
            ) : (
            <div className="question-box">
                <h3>Question {currentQ+1}/{triviaQs.length}</h3>
                <h6>{triviaQs[currentQ].question}</h6>
                <ul className="show-options">
                    {triviaQs[currentQ].allOptions.map(allOptions => (
                        <li><button onClick={() => handleUserAnswer(allOptions)}>{allOptions}</button></li>
                    ))}
                </ul>
                
            </div>
            )}
            <div>{finalResults ? <p>Results: {numCorrect}/{triviaQs.length}</p> : null}</div>
            
        </div>


    )
    
}