import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import AProfile from './AProfile';
import axios from 'axios';
export default function Adminbar({ adminData }) {
  const router = useRouter();
  const [profile, setProfile] = React.useState(false);
  const handler1 = () => { setProfile(true) };
  
  const LogOutHandler = (e) => {
    localStorage.clear();
    router.push('/');
    axios.post('http://localhost:5000/userLogOut')
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
