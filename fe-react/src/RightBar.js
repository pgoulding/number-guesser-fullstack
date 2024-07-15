import { useState } from "react";

function RightBar({guesses}){
    return (
        <div className="Right-Bar">
            <ol>
            {  guesses.length != 0 &&
                    guesses.map(eachGuess => {
                    return (
                        <li>Guess:{eachGuess.guessVal} Status:{eachGuess.status}</li>
                    )
                })                
            }
            </ol>
        </div>
    )
}

export default RightBar;