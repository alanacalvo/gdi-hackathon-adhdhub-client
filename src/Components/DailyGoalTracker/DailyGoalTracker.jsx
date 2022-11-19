import React from "react";
import DailyGoal from "./DailyGoal";

import "./DailyGoalTracker.scss";

function DailyGoalTracker() {
  return (
    <div className="dailyGoalTracker">
      <h2>Daily Goals</h2>
      <form className="goals-form">
        <DailyGoal />
        <DailyGoal />
        <DailyGoal />
        <DailyGoal />
      </form>
    </div>
  );
}

export default DailyGoalTracker;
