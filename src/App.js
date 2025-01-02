import Player from "./components/Player";
import TimerChalenge from "./components/TimerChallenge";

function App() {
  return (
    <>
      <Player />
      <div id="challenges"></div>
      <TimerChalenge title="Easy" targetTime={1} />
      <TimerChalenge title="Not So Easy" targetTime={5} />
      <TimerChalenge title="Getting Though" targetTime={10} />
      <TimerChalenge title="Hard" targetTime={15} />
    </>
  );
}

export default App;
