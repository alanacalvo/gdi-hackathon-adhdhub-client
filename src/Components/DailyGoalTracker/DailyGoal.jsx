import React from "react";

import "./DailyGoalTracker.scss";

// const [remove, setRemoved] = useState(null);

// const completeGoal = (e) => {
//   e.preventDefault();
//   let text = document.getElementsByName("input");
//   text.style.textDecoration = "line-through";
// };

const removeGoal = (e) => {
  e.preventDefault();
  let goal = document.querySelector(".goal");
  goal.style.display = "none";
  // setRemoved;
};

function DailyGoal() {
  return (
    <div className="daily-goal">
      <form className="goals-form">
        <div className="goal">
          <input type="checkbox" id="medication" name="medication" unchecked />
          <label for="medication">Take Medication</label>
          <button className="remove-btn" id="first" onClick={removeGoal}>
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div className="goal">
          <input type="checkbox" id="activity" name="activity" unchecked />
          <label for="activity">Take a walk or do yoga</label>
          <button className="remove-btn" id="second">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div className="goal">
          <input type="checkbox" id="water" name="water" unchecked />
          <label for="water">Drink at least 8 cups of water</label>
          <button className="remove-btn" id="third">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div className="goal">
          <input type="checkbox" id="read" name="read" unchecked />
          <label for="read">Read at least 10 pages of a book</label>
          <button className="remove-btn" id="fourth">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
      </form>
    </div>
  );
}

export default DailyGoal;
