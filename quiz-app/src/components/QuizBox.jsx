import React from "react";
import Stepper from "./Stepper";
import Questions from "./Questions";

const QuizBox = () => {
  return (
    <section className="flex flex-col mt-36 mx-96 glass p-6 rounded-xl gap-7">
      <Questions />
      <Stepper />
    </section>
  );
};

export default QuizBox;
