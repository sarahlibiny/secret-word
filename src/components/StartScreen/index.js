import "./style.css";

export function StartScreen({ startGame }) {
  return (
    <div className="Container">
      <h1>Secret Word</h1>
      <p>Click the button to start the game!</p>
      <button onClick={startGame}>Start</button>
    </div>
  );
}
