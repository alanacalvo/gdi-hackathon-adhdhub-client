import React from 'react'
import './DailyGoalTracker.scss'

function DailyGoalTracker() {

  return (
    <div className="dailyGoalTracker">
      <h2>Daily Goals</h2>
      <div className="icons">
        <img src="/journal.png" alt="journal" />
        <img src="/medication.png" alt="medication" />
        <img src="/water.png" alt="water" />
        <img src="/meditation.png" alt="meditation" />
      </div>
    </div>
  )
}

export default DailyGoalTracker