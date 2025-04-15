import { useCounter } from '../hooks/useCounter';
import '../styles/GameScore.css';

const GameScore = () => {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div className='game-score-container'>
      <h2 className='game-score-title'>How old am i</h2>
      <div className='score-display'>
        <span className='score-value'>{count}</span>
        <span className='score-label'>Change my age and get some point</span>
      </div>
      <div className='score-controls'>
        <button onClick={decrement} className='score-button'>
          Lose Point
        </button>
        <button onClick={reset} className='score-button'>
          Reset Score
        </button>
        <button onClick={increment} className='score-button'>
          Gain Point
        </button>
      </div>
    </div>
  );
};

export default GameScore;
