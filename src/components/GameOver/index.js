import "./style.css";

export function GameOver({ retry, score }) {
  return (
    <>
      <h1>Fim de jogo!</h1>
      <h2>
        Your Score: <span>{score}</span>
      </h2>
      <button onClick={retry}>Reiniciar</button>
    </>
  );
}
