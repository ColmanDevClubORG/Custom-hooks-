import { useCounter } from './hooks/useCounter';
import GameScore from './components/GameScore';
import './App.css';

function App() {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div className='app-container'>
      <h1 className='app-title'>Custom Hooks Demo</h1>

      <div className='counter-container'>
        <h2>How many bananas are on my island?</h2>
        <div className='counter-value'>{count}</div>
        <div className='button-group'>
          <button onClick={decrement} className='counter-button'>
            -
          </button>
          <button onClick={reset} className='counter-button'>
            Reset
          </button>
          <button onClick={increment} className='counter-button'>
            +
          </button>
        </div>
      </div>

      <GameScore />
    </div>
  );
}

export default App;
