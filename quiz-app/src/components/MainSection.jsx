import React, { useState } from "react";
import HeroSection from "./HeroSection";
import QuizBox from "./QuizBox";

const MainSection = () => {
  const [showQuizBox, setShowQuizBox] = useState(false);
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
