import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link';
import UProfile from './UProfile';
import axios from 'axios';

function Userbar({ userData }) {
  const router = useRouter()
  const [profile, setProfile] = useState(false);
  const handler1 = (e) => {
    setProfile(true)
  };
  const Logouthandler = (e) => {
    localStorage.clear();
    router.push('/');
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark USERBAR COLOR1">
        <Link href="/User/user"><a className="navbar-brand HEADING"><b>DANK THE BANK</b></a></Link>
          <div>
            <div className='nav-item dropdown USERDROPDOWN'>
              <img className="PROFILEIMAGE" src="/user.png" />
              { userData== null ? null : <p className="USERNAME">{userData.Name}</p> }
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              </a>
              <div className="dropdown-menu DROPDOWN COLOR2" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" onClick={handler1}>Profile</a>
                <div className="dropdown-divider"></div>
                  <a className="dropdown-item" onClick={Logouthandler}>Logout</a>
              </div>
            </div>
          </div>
        <div>

        </div>
      </nav>
      <div>
        {profile ? <UProfile userData={userData} setProfile={setProfile} /> : null}
      </div>
    </div>
  )
}
export default Userbar;