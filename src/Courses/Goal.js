import React from "react";

const Goal = ({ goal, id, deleteHandler }) => {
  return (
    <button className="goals" onClick={() => deleteHandler(id)}>
      {goal}
    </button>
  );
};

export default Goal;
