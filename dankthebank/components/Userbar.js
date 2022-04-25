import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link';
import UProfile from './UProfile';
import axios from 'axios';
import swal from 'sweetalert';

function Userbar({ userData }) {
  const router = useRouter()
  const [profile, setProfile] = useState(false);
  const handler1 = (e) => {
    setProfile(true)
  };
  const LogOutHandler = (e) => {
    axios.post('http://localhost:5000/userLogOut')
      .then(function (response) {
        console.log(response.data);
        localStorage.clear();
        swal("Logged Out Successfully !", "You are logged out !", "success");
        router.push('/');
        //Perform action based on response
      })
      .catch(function (error) {
        console.log(error);
        swal("Log Out Failed !", "You are not logged out !", "error");
        //Perform action based on error
      });
    console.log("GENERATE");
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark USERBAR COLOR1">
        <Link href="/User/user"><a className="navbar-brand HEADING"><b>DANK THE BANK</b></a></Link>
        <div>
          <div className='nav-item dropdown USERDROPDOWN'>
            <img className="PROFILEIMAGE" src="/user.png" />
            {userData == null ? null : <p className="USERNAME">{userData.Name}</p>}
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            </a>
            <div className="dropdown-menu DROPDOWN COLOR2" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" onClick={handler1}>Profile</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" onClick={LogOutHandler}>Logout</a>
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