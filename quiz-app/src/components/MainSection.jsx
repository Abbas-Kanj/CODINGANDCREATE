import React, { useState } from "react";
import HeroSection from "./HeroSection";
import QuizBox from "./QuizBox";

const MainSection = () => {
  const [showQuizBox, setShowQuizBox] = useState(false);
  console.log(showQuizBox);
  return (
    <>
      {showQuizBox ? (
        <QuizBox />
      ) : (
        <HeroSection setShowQuizBox={setShowQuizBox} />
      )}
    </>
  );
};

export default MainSection;
