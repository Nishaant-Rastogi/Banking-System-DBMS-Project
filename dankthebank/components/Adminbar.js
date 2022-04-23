import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import AProfile from './AProfile';
import axios from 'axios';
export default function Adminbar({ adminData }) {
  const [profile, setProfile] = React.useState(false);
  const handler1 = () => { setProfile(true) };
  const LogOutHandler = (e) => {
    localStorage.clear();
    router.push('/');
    axios.post('http://localhost:5000/adminLogOut', adminData)
      .then(function (response) {
        console.log(response.data);
        //Perform action based on response
      })
      .catch(function (error) {
        console.log(error);
        //Perform action based on error
      });
    console.log("GENERATE");
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark ADMINBAR COLOR1">
        <Link href="/Admin/admin"><a className="navbar-brand HEADING"><b>DANK THE BANK</b></a></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto"></ul>
          <div>

            <div className='nav-item dropdown ADMINDROPDOWN'>
              <img className="PROFILEIMAGE" src="/user.png" />
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Admin
              </a>
              <div className="dropdown-menu DROPDOWN" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" onClick={handler1}>Profile</a>
                <div className="dropdown-divider"></div>
                <Link href='/'>
                  <a className="dropdown-item" onCLick={LogOutHandler}>Logout</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>

        </div>
      </nav>
      <div>
        {profile ? <AProfile setProfile={setProfile} /> : null}
      </div>
    </div>
  )
}
