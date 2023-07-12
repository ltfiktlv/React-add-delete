import React, { useState, useRef } from "react";
import "./CourseGoalEnter.css";
const CourseGoalEnter = ({ goalHandler }) => {
  const goalInput = useRef();

  // const [userInput, setUserInput] = useState({
  //   value: "",
  //   id: Math.random().toString(),
  // });

  // const inputHandler = (e) => {
  //   setUserInput((prevState) => {
  //     return { ...prevState, value: {e.target.value} };
  //   });
  // };

  const submitHandler = (e) => {
    e.preventDefault();
    const holdGoal = goalInput.current.value;
    goalHandler(holdGoal);
    goalInput.current.value = ""; // bu sekilde de kullanılabilir => e.target.reset( )
    // setUserInput({ value: "", id: Math.random().toString() });
  };
  return (
    <div className="style-div">
      <form className="style-form" onSubmit={submitHandler}>
        <h1>Course Goals</h1>
        <label>
          Goal:&nbsp;
          <input
            type="text"
            name="goal"
            // value={userInput.value}
            // onChange={inputHandler}
            ref={goalInput}
            required
          />
        </label>

        <button className="style-button" type="submit">
          Add Goal
        </button>
      </form>
    </div>
  );
};

export default CourseGoalEnter;
