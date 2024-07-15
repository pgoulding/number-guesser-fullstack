import logo from './styling/coin.svg';
import './styling/App.css';
import LeftBar from './LeftBar';
import RightBar from './RightBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Number Guesser</h1>
      </header>
      <main className="Bar-container">
        <LeftBar/>
        <RightBar/>
      </main>
    </div>
  );
}

export default App;
