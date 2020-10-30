import React, { useState } from 'react';
import triviaQs from "./questions/Apprentice_TandemFor400_Data.json";

//Create array with all questions
for (let i in triviaQs) {
    let options = triviaQs[i].incorrect;
    options.push(triviaQs[i].correct);
    triviaQs[i].allOptions = options;
}

//Create array of random 10 questions
const n = 10;
    const triviaTenQs = triviaQs
    .map(x => ({ x, r: Math.random() }))
    .sort((a, b) => a.r - b.r)
    .map(a => a.x)
    .slice(0, n);

export default function App() {
    
    const [currentQ, setCurrentQ] = useState(0);
    const [numCorrect, setNumCorrect] = useState(0);
    const [finalResults, displayFinalResults] = useState(false);
    const [continueCount, setContinueCount] = useState(true);
    
    const handleUserAnswer = (answerClicked) => {
        //Set state to correct number of questions and display results if finished
        const correct = triviaTenQs[currentQ].correct;
        if (answerClicked === correct && continueCount == true) {
            setNumCorrect(numCorrect+1); 
        }
        alert("Correct Answer is "+ correct);
        const nextQ = currentQ + 1

        if (nextQ < triviaTenQs.length) {
            setCurrentQ(currentQ+1)
        } else {
            setContinueCount(false);
            displayFinalResults(true);
            
        }
    }
    const handlePlayAgain = (ans) => {
        //Handle state changes if user wants to play again
        if (ans == "yes") {
            console.log("yes")
            setCurrentQ(0);
            setNumCorrect(0);
            displayFinalResults(false);
            setContinueCount(true);
        } else {
            alert("Thanks for playing!")    
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
                            <h3 className="center">{numCorrect}/{triviaTenQs.length}</h3>
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
                        <h3 className="center underline">Question {currentQ+1}/{triviaTenQs.length}</h3>
                        <h6 className="center q">{triviaTenQs[currentQ].question}</h6>
                        <ul className="show-options">
                            {triviaTenQs[currentQ].allOptions.map(allOptions => (
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