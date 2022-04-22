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
        <div className='PROFILEHEADER'>
        <div className="USER_DETAILS">
          <div className="USER_PROFILE_IMAGE">
            <img  className="img" src="/user.png" />
          </div>
            <div className="USER_DETAILS_DATA">
            <div className="USER_DETAILS_NAME">
              <p>{userData.Name}</p>
            </div>
            <div className="USER_DETAILS_PHONE">
              <p>Phone No : {userData.ContactNo}</p>
            </div>
          </div>
          
        </div>
        <div className="BORDER"><p className="ADDRESS">ADDRESS</p></div>
        <div className="USER_DETAILS_ADDRESS">
         </div>
          <div className="USER_DETAILS_ADDRESS_DATA">
              <div className="USER_DETAILS_ADDRESS_DATA_1">
              <p className="ADDRESS"><p className="HEADERS">House No:</p>{userData.HouseNo}</p>
              <p className="ADDRESS"><p className="HEADERS"> Locality: </p>{userData.Locality}</p>
              </div>
              <div className="USER_DETAILS_ADDRESS_DATA_2"><p className="ADDRESS"><p className="HEADERS"> City:</p>{userData.City}</p>
              </div>
              <div className="USER_DETAILS_ADDRESS_DATA_3">
                <Link href='/User/accounts'>
                  <button type="submit" className="btn btn-primary GRADIENT">ACCOUNTS</button>
                </Link>
              </div>  
            </div>
              
        </div>
        <img className="PROFILEIMAGE" onClick={handler} src="/close.png" />
      </div>
    </div>
  )
}

export default UProfile


/*

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



*/