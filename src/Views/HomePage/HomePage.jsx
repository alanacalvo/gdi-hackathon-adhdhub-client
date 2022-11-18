import React from 'react';
import './HomePage.scss';
import Timer from '../../Components/Timer/Timer';
import ToDoList from '../../Components/ToDoList/ToDoList';

function HomePage() {

  return (
  <div className="homepage">
    <ToDoList />
    <Timer />
  </div>
  )
}

export default HomePage;