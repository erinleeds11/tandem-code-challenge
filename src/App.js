import React, { useState } from 'react';
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
    const [continueCount, setContinueCount] = useState(true);
    

    const handleUserAnswer = (answerClicked) => {
        if (answerClicked == triviaQs[currentQ].correct && continueCount == true) {
            // alert("Correct");
            setNumCorrect(numCorrect+1); 
        } else {
            // alert("Incorrect");
            
        }

        const nextQ = currentQ + 1
        if (nextQ < triviaQs.length) {
            setCurrentQ(currentQ+1)
        } else {
            setContinueCount(false);
            displayFinalResults(true);
            
        }
    }
    const handlePlayAgain = (ans) => {
        if (ans == "yes") {
            console.log("yes")
            setCurrentQ(0);
            setNumCorrect(0);
            displayFinalResults(false);
            setContinueCount(true);
        } else {
            setPlayAgain(false);
            console.log(playAgain)
        }
        
    }

    

    return (
        <div>
            <div className="title container-fluid"><h1>Tandem Trivia!</h1></div>
            {finalResults? (
                <div className="final-results">
                    <div className="row">
                        <div className="col"></div>
                        <div className="results col" >
                            <h3 className="top center">Trivia Results </h3>
                            <h3 className="center">{numCorrect}/{triviaQs.length}</h3>
                            <div className="center"><h6>Play again?</h6></div>
                            <button className="btn btn-sml btn-block"id="yes" value="yes" onClick={(e) => handlePlayAgain(e.target.value)}>Yes</button>
                            <button  className="btn btn-sml btn-block" id="no" value="no"onClick={(e) => handlePlayAgain(e.target.value)}>No</button>
                        </div>
                        <div className="col"></div>
                    </div>
                </div>
                
            ) : (
            <div className="question-box container-fluid">
                <div className="row">
                    <div className="col"></div>
                    <div className="single-q col">
                        <h3 className="center underline">Question {currentQ+1}/{triviaQs.length}</h3>
                        <h6 className="center q">{triviaQs[currentQ].question}</h6>
                        <ul className="show-options">
                            {triviaQs[currentQ].allOptions.map(allOptions => (
                                <button class="btn btn-lg btn-block"  onClick={() => handleUserAnswer(allOptions)}>{allOptions}</button>
                            ))}
                        </ul>
                    </div>
                    <div className="col"></div>
                </div>
                
            </div>
            )} 
        
            <div className =" footer container-fluid">
            <p className="center">Erin Leeds |
            <i class="fas fa-envelope-square padding"></i>erin@erinleeds.com |
            <a href="https://linkedin.com/in/erin-leeds"><i className="fab fa-linkedin padding"></i>LinkedIn </a>|
            <a className="padding"href="https://github.com/erinleeds11"><i className="fab fa-github"></i> GitHub</a></p>
            </div>
        </div>


    )
    
}