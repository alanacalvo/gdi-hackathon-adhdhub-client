import React from "react";
import "./HomePage.scss";
import Timer from "../../Components/Timer/Timer";
import ToDoList from "../../Components/ToDoList/ToDoList";
import DailyGoalTracker from "../../Components/DailyGoalTracker/DailyGoalTracker";
import SideNav from '../../Components/SideNav/SideNav';

function HomePage() {
  return (
    <div className="homepageContainer">
      <div className="homepage">
        <ToDoList />
        <div className="rightSide">
          <Timer />
          <DailyGoalTracker />
        </div>
      </div>
        <SideNav /> 
    </div>
  );
}

export default HomePage;
