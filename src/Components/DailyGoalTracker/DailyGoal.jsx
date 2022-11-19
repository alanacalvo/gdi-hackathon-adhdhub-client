import React from "react";

import "./DailyGoalTracker.scss";

const completeGoal = (e) => {
  e.preventDefault();
  let text = document.querySelector(".goal");
  text.style.textDecoration = "line-through";
};

const removeGoal = (e) => {
  e.preventDefault();
};

function DailyGoal() {
  return (
    <div className="goal">
      Take Medication
      <button className="completed-btn" onClick={completeGoal}>
        <i className="fa-solid fa-check" aria-hidden="true"></i>
      </button>
      <button className="remove-btn" onClick={removeGoal}>
        <i class="fa-solid fa-xmark"></i>
      </button>
    </div>
  );
}

export default DailyGoal;
