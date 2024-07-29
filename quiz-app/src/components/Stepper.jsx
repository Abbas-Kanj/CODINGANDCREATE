import React, { useEffect, useState } from "react";

const Stepper = ({ questionIndex, isAnsweredCorrectly }) => {
  // States
  const [q1, setQ1] = useState("?");
  const [q2, setQ2] = useState("?");
  const [q3, setQ3] = useState("?");
  const [q4, setQ4] = useState("?");
  const [q5, setQ5] = useState("?");

  useEffect(() => {
    if (questionIndex === 0) {
      if (isAnsweredCorrectly === true) {
        setQ1("✓");
      } else if (isAnsweredCorrectly === false) {
        setQ1("✕");
      }
    } else if (questionIndex === 1) {
      if (isAnsweredCorrectly === true) {
        setQ2("✓");
      } else if (isAnsweredCorrectly === false) {
        setQ2("✕");
      }
    } else if (questionIndex === 2) {
      if (isAnsweredCorrectly === true) {
        setQ3("✓");
      } else if (isAnsweredCorrectly === false) {
        setQ3("✕");
      }
    } else if (questionIndex === 3) {
      if (isAnsweredCorrectly === true) {
        setQ4("✓");
      } else if (isAnsweredCorrectly === false) {
        setQ4("✕");
      }
    } else if (questionIndex === 4) {
      if (isAnsweredCorrectly === true) {
        setQ5("✓");
      } else if (isAnsweredCorrectly === false) {
        setQ5("✕");
      }
    }
  }, [questionIndex, isAnsweredCorrectly]);

  // Questions Array
  const questions = [
    {
      questionNb: "Q 1",
      state: q1,
    },
    {
      questionNb: "Q 2",
      state: q2,
    },
    ,
    {
      questionNb: "Q 3",
      state: q3,
    },
    ,
    {
      questionNb: "Q 4",
      state: q4,
    },
    ,
    {
      questionNb: "Q 5",
      state: q5,
    },
  ];

  return (
    <ul className="steps">
      {questions.map((question, index) => (
        <li
          key={index}
          data-content={question.state}
          className="step step-neutral"
        >
          {question.questionNb}
        </li>
      ))}
    </ul>
  );
};

export default Stepper;
