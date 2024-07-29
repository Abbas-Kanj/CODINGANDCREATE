import React, { useEffect, useState } from "react";
import Stepper from "./Stepper";
import Questions from "./Questions";
import questionsArray from "../quiz.json";
import { FinalResult } from "./FinalResult";

const QuizBox = () => {
  const questions = questionsArray.quiz;

  // States
  const [isAnswered, setIsAnswered] = useState(false);
  const [isAnsweredCorrectly, setIsAnsweredCorrectly] = useState(null);
  const [scoreCounter, setScoreCounter] = useState(0);
  let [questionIndex, setQuesionIndex] = useState(0);

  // Update the states after each answer
  useEffect(() => {
    if (isAnswered) {
      if (isAnsweredCorrectly) {
        setScoreCounter(scoreCounter + 1);
      }
      setQuesionIndex(questionIndex + 1);
      setIsAnswered(false);
      setIsAnsweredCorrectly(null);
    }
  }, [isAnswered]);

  return (
    <section className="flex flex-col mt-28 mx-96 glass p-6 rounded-xl gap-7">
      {questions.length === questionIndex ? (
        <FinalResult
          scoreCounter={scoreCounter}
          setQuesionIndex={setQuesionIndex}
          setScoreCounter={setScoreCounter}
        />
      ) : (
        <>
          <Questions
            questions={questions[questionIndex]}
            setIsAnswered={setIsAnswered}
            setIsAnsweredCorrectly={setIsAnsweredCorrectly}
          />
          <Stepper
            questionIndex={questionIndex}
            isAnsweredCorrectly={isAnsweredCorrectly}
          />
        </>
      )}
    </section>
  );
};

export default QuizBox;
