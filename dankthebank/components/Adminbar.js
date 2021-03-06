import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import AProfile from './AProfile';
import axios from 'axios';
import swal from 'sweetalert';
import BankInfo from './BankInfo';

export default function Adminbar({ adminData }) {
  const router = useRouter();
  const [profile, setProfile] = useState(false);
  const handler1 = () => { setProfile(true) };
  const [info, setInfo] = useState(false);

  const handleInfo = () => {
    setInfo(true);
  }
  const LogOutHandler = (e) => {
    router.push('/');
    axios.post('http://localhost:5000/adminLogOut', adminData)
      .then(function (response) {
        console.log(response.data);
        localStorage.clear();
        swal("Logged Out Successfully !", "You are logged out !", "success");
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
      {info ? <BankInfo setInfo={setInfo} /> : null}
      <nav className="navbar navbar-expand-lg navbar-dark ADMINBAR COLOR1">
        <Link href="/Admin/admin"><a className="navbar-brand HEADING"><b>DANK THE BANK</b></a></Link>
        {/* <div><img className="BANKINFO" onClick={handleInfo} src="/information.png" /></div> */}
        <div>
          <div className='nav-item dropdown ADMINDROPDOWN'>
            <img className="PROFILEIMAGE" src="/user.png" />
            {adminData == null ? null : <p className="USERNAME">{adminData.Name}</p>}
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            </a>
            <div className="dropdown-menu DROPDOWN" aria-labelledby="navbarDropdown">
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
        {profile ? <AProfile userData={adminData} setProfile={setProfile} /> : null}
      </div>
    </div>
  )
}
