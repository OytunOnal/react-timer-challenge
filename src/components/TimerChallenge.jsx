import { useRef, useState } from "react";
import ResultModal from "./ResultModal.jsx";

export default function TimerChalenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const isTimerActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }

  function handleStartChallenge() {
    timer.current = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
    }, 10);
  }

  function handleStopChallenge() {
    clearInterval(timer.current);
    dialog.current.open();
  }

  function handleReset() {
    setTimeRemaining(targetTime * 1000);
  }

  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        timeRemaining={timeRemaining}
        onReset={handleReset}
      />
      <section className="challenge">
        <h1> {title} </h1>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button
            onClick={isTimerActive ? handleStopChallenge : handleStartChallenge}
          >
            {isTimerActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={isTimerActive ? "active" : undefined}>
          {isTimerActive ? "Time is running" : "timer is inactive"}
        </p>
      </section>
    </>
  );
}
