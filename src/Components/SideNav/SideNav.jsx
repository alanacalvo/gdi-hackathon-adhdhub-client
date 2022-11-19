import React from "react";
import "./SideNav.scss";

function SideNav() {
  return (
    <div className="sideNav">
      <div>
        <img
          src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/054/599/original/Profile.png?1668850698"
          alt="profile"
          id="profile-pic"
        />
      </div>
      <div>
        <div className="navItem">
          <i class="fa-regular fa-calendar"></i>
        </div>
        <div className="navItem">
          <i class="fa-solid fa-clipboard"></i>
        </div>
        <div className="navItem">
          <i class="fa-solid fa-arrow-right-to-bracket"></i>
        </div>
      </div>
    </div>
  );
}

export default SideNav;
