import React from 'react';
import Link from 'next/link';
import UProfile from './UProfile';

function Userbar() {
  const [profile, setProfile] = React.useState(false);
  const handler1 = () => { setProfile(true) };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark USERBAR COLOR1">
        <a className="navbar-brand" href="#">Navbar</a>
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
        {profile ? <UProfile setProfile={setProfile} /> : null}
      </div>
    </div>
  )
}
export default Userbar