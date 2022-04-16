import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import UProfile from './UProfile';
import axios from 'axios';

function UserBar() {
  const [profile, setProfile] = useState(false);
  const [User, setUser] = useState(null);
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
      console.log(foundUser);
    }
  }, []);
  const handler1 = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/userProfile', User)
      .then(function (response) {
        setUser(response);
        //Perform action based on response
      })
      .catch(function (error) {
        console.log(error);
        //Perform action based on error
      });
    console.log("GENERATE");
    setProfile(true)
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark USERBAR COLOR1">
        <Link href="/User/user"><a className="navbar-brand HEADING"><b>DANK THE BANK</b></a></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto"></ul>
          <div>
            <div className='nav-item dropdown USERDROPDOWN'>
              <img className="PROFILEIMAGE" src="/user.png" />
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                User
              </a>
              <div className="dropdown-menu DROPDOWN COLOR2" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" onClick={handler1}>Profile</a>
                <div className="dropdown-divider"></div>
                <Link href='/'>
                  <a className="dropdown-item">Logout</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>

        </div>
      </nav>
      <div>
        {profile ? <UProfile User={User} setProfile={setProfile} /> : null}
      </div>
    </div>
  )
}
export default UserBar