import { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

export default function ResultModal({
  ref,
  targetTime,
  timeRemaining,
  onReset,
}) {
  const dialog = useRef();
  const userLost = timeRemaining <= 0;
  const formattedTimeRemaining = (timeRemaining / 1000).toFixed(2);
  const score = Math.round((1 - formattedTimeRemaining / targetTime) * 100);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog} className="result-modal" onClick={onReset}>
      {userLost && <h2> You Lost </h2>}
      {!userLost && <h2> Your Score: {score} </h2>}
      <p>
        {" "}
        Your target time was <strong> {targetTime} seconds </strong>
      </p>
      <p>
        {" "}
        You stopped the timer at with{" "}
        <strong> {formattedTimeRemaining} seconds left.</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
}
