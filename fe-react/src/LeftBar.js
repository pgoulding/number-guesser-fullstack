import { useState } from "react";

function LeftBar({handleClick}){
    const [num, setNum] =useState('')

    const verifyNum = () => {
        const guessAsNumber = Number(num)
        if(guessAsNumber>=0) {
            handleClick(num)
        } else {
            alert('You must guess higher than 0')
        }
    }

    return (
        <div className="Left-Bar">
            <input 
                placeholder="Pick a number" 
                type="number"
                value={num}
                onChange={(e) => setNum(e.target.value)}
            />
            <button onClick={()=> verifyNum()} >
                Submit Guess
            </button>
        </div>
    )
}

export default LeftBar;