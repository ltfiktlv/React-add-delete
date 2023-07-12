import React from "react";
import "./CourseGoals.css";
import Goal from "./Goal";
const CourseGoals = ({ goal, deleteHandler }) => {
  return (
    <div className="goal-div">
      {goal.length !== 0 ? (
        <>
          {goal.map((el) => (
            <Goal
              goal={el.value}
              id={el.id}
              key={el.id}
              deleteHandler={deleteHandler}
            />
          ))}
        </>
      ) : (
        <p>There is no added goal yet.</p>
      )}
    </div>
  );
};

export default CourseGoals;
