import React from "react";

const Questions = () => {
  return (
    <>
      <div className="flex justify-between">
        <h1 className="prose-2xl text-secondary font-semibold">
          What is the country that...
        </h1>
        <div className="tooltip" data-tip="hello">
          <button className="btn rounded-full text-primary">Hint</button>
        </div>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer flex justify-start gap-5">
          <input
            type="radio"
            name="radio-10"
            className="radio checked:bg-primary"
            defaultChecked
          />
          <span className="label-text">Red pill</span>
        </label>
        <label className="label cursor-pointer flex justify-start gap-5">
          <input
            type="radio"
            name="radio-10"
            className="radio checked:bg-primary"
            defaultChecked
          />
          <span className="label-text">Red pill</span>
        </label>
        <label className="label cursor-pointer flex justify-start gap-5">
          <input
            type="radio"
            name="radio-10"
            className="radio checked:bg-primary"
            defaultChecked
          />
          <span className="label-text">Red pill</span>
        </label>
        <label className="label cursor-pointer flex justify-start gap-5">
          <input
            type="radio"
            name="radio-10"
            className="radio checked:bg-primary"
            defaultChecked
          />
          <span className="label-text">Red pill</span>
        </label>
      </div>
    </>
  );
};

export default Questions;
