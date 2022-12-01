import React from "react";
import DailyGoal from "./DailyGoal";

import "./DailyGoalTracker.scss";

function DailyGoalTracker() {
  return (
    <div className="dailyGoalTracker">
      <h2>Daily Goals</h2>
      <DailyGoal />
    </div>
  );
}

export default DailyGoalTracker;
