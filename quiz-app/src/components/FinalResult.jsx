import React from "react";

export const FinalResult = ({ scoreCounter }) => {
  return (
    <div className="flex flex-col items-center gap-14">
      <h1 className="text-3xl text-secondary">FinalResult:</h1>
      <h3 className="text-xl text-primary font-bold"> {scoreCounter}</h3>
    </div>
  );
};
