import React from 'react'
import './SideNav.scss'
// import userProfile from './Icons/user-profile-64.png';
// import calendar from './Icons/calendar-50.png';
// import settings from './Icons/settings-64.png';
// import logout from './Icons/logout-50.png';

function SideNav() {

  return (
    <div className="sideNav">
        <div className='navItem'>
          P
          {/* <img src="/user-profile-64.png" alt="" /> */}
          {/* <img src={userProfile} alt='user profile' />; */}
        </div>
        <div>
            <div className='navItem'>
              C
              {/* <img src={calendar} alt='calendar' />; */}
            </div>
            <div className='navItem'>
              S
              {/* <img src={settings} alt='settings' />; */}
            </div>
             <div className='navItem'>
              L
               {/* <img src={logout} alt='log out' />; */}
            </div>
        </div>
    </div>
  )
}

export default SideNav