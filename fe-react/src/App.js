import logo from './styling/coin.svg';
import './styling/App.css';
import LeftBar from './LeftBar';
import RightBar from './RightBar';
import { useState } from 'react';

function App() {
  const [guesses, setGuesses] = useState([])
  
  function handleClick(inputVal) {
    // fetch to the Back End to calculate and return
    // fetch(/api/v1/checkguess)

    //mock out for now
    let guessStatus = 'High'
    let guessObj = {guessVal:inputVal, status:guessStatus}
    setGuesses([...guesses, guessObj])
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Number Guesser</h1>
      </header>
      <main className="Bar-container">
        <LeftBar handleClick={handleClick}/>
        <RightBar guesses={guesses} />
      </main>
    </div>
  );
}

export default App;
