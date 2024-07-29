import React from "react";

export const FinalResult = ({
  scoreCounter,
  setQuesionIndex,
  setScoreCounter,
}) => {
  const resetQuiz = () => {
    setScoreCounter(0);
    setQuesionIndex(0);
    return;
  };
  return (
    <div className="flex flex-col items-center gap-14">
      <h1 className="text-3xl text-secondary">FinalResult:</h1>
      <h3 className="text-xl text-primary font-bold"> {scoreCounter}</h3>
      <button className="btn" onClick={resetQuiz}>
        Retry Quiz
      </button>
    </div>
  );
};
