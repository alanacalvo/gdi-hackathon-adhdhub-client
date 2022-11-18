import React from 'react';
import './HomePage.scss';
import Timer from '../../Components/Timer/Timer';
import ToDoList from '../../Components/ToDoList/ToDoList';
import DailyGoalTracker from '../../Components/DailyGoalTracker/DailyGoalTracker';

function HomePage() {

  return (
    <div className="homepage">
      <ToDoList />
      <div className="leftSide">
        <Timer />
        <DailyGoalTracker />
      </div>
    </div>
  )
}

export default HomePage;