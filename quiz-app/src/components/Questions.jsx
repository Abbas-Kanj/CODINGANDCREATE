import React, { useState } from "react";

const Questions = ({
  index,
  questions,
  setIsAnswered,
  setIsAnsweredCorrectly,
}) => {
  const { question, answers, hint, correct_answer } = questions;
  const [radioValue, setRadioValue] = useState("");

  const handleAnswer = (e) => {
    e.preventDefault();
    setIsAnswered(true);
    if (radioValue === correct_answer) {
      setIsAnsweredCorrectly(true);
    } else {
      setIsAnsweredCorrectly(false);
    }
  };

  return (
    <section key={index}>
      <div className="flex justify-between">
        <h1 className="prose-2xl text-secondary font-semibold">{question}</h1>
        <div className="tooltip" data-tip={hint}>
          <button className="btn rounded-full text-primary">Hint</button>
        </div>
      </div>
      <form onSubmit={handleAnswer} className="form-control">
        {answers.map((answer, i) => (
          <label
            key={i}
            className="label cursor-pointer flex justify-start gap-5"
          >
            <input
              type="radio"
              name="radio-10"
              className="radio checked:bg-primary"
              checked={radioValue === answer}
              value={answer}
              onChange={() => setRadioValue(answer)}
            />
            <span className="label-text">{answer}</span>
          </label>
        ))}
        <button type="submit" className="btn mt-5">
          Next Question
        </button>
      </form>
    </section>
  );
};

export default Questions;
