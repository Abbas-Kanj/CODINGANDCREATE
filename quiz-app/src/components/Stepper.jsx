import React from "react";

const Stepper = () => {
  return (
    <ul className="steps">
      <li data-content="?" className="step step-neutral">
        Q 1
      </li>
      <li data-content="!" className="step step-neutral">
        Q 2
      </li>
      <li data-content="✓" className="step step-neutral">
        Q 3
      </li>
      <li data-content="✕" className="step step-neutral">
        Q 4
      </li>
      <li data-content="★" className="step step-neutral">
        Q 5
      </li>
    </ul>
  );
};

export default Stepper;
