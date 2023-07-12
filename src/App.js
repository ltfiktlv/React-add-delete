import React, { useState } from "react";
import CourseGoalEnter from "./Courses/CourseGoalEnter";
import Data from "./Data/Data";
import CourseGoals from "./Courses/CourseGoals";
function App() {
  const [goal, setGoal] = useState(Data);
  const goalHandler = (item) => {
    setGoal((prevState) => {
      return [
        ...prevState,
        {
          value: item,
          id: Math.random().toString(),
        },
      ];
    });
  };
  const deleteHandler = (id) => {
    setGoal(
      goal.filter((el) => {
        return el.id !== id;
      })
    );
  };
  return (
    <div>
      <CourseGoalEnter goalHandler={goalHandler} />
      <CourseGoals goal={goal} deleteHandler={deleteHandler} />
    </div>
  );
}

export default App;
