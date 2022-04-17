import Link from 'next/link';
import React from 'react';


function UProfile({ userData, setProfile }) {
  const handler = () => { setProfile(false) };

  React.useEffect(() => {
    handler;
  }, []);
  return (
    <div className='UPROFILE'>
      <div className='BLUR' onClick={handler} ></div>
      <div className='PROFILECONTAINER'>
        <div className="USER_DETAILS">
          <div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Name</label>
              <p className="Account_No">{userData.Name}</p>
            </div>
            <div className="form-group">
              <Link href='/User/accounts'>
                <label htmlFor="exampleInputPassword1">Accounts</label>
              </Link>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Phone Number</label>
              <p className="Phone">{userData.ContactNo}</p>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Address</label>
              <p className="Address">House No: {userData.HouseNo}</p>
              <p className="Address"> Locality: {userData.Locality}</p>
              <p className="Address"> City: {userData.City}</p>
            </div>
          </div>
        </div>
        <img className="PROFILEIMAGE" onClick={handler} src="/close.png" />
      </div>
    </div>

  )
}

export default UProfile