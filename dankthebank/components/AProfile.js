import React from 'react';
import Link from 'next/link';

function AProfile({ userData, setProfile }) {
  const handler = () => { setProfile(false) };

  React.useEffect(() => {
    handler;
  }, []);
  return (
    <div className='APROFILE'>
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
              <p>PAN : {userData.PAN}</p>
            </div>
          </div>
          
        </div>
        <div className="BORDER"><p className="ADDRESS">Professional Background</p></div>
        <div className="USER_DETAILS_ADDRESS">
         </div>
          <div className="USER_DETAILS_ADDRESS_DATA">
              <div className="USER_DETAILS_ADDRESS_DATA_1">
              <p className="ADDRESS"><p className="HEADERS">Designation:</p>{userData.Designation}</p>
              <p className="ADDRESS"><p className="HEADERS">Salary: </p>{userData.Salary}</p>
              </div>
              <div className="USER_DETAILS_ADDRESS_DATA_2"><p className="ADDRESS"><p className="HEADERS">Date of Joining : </p>{userData.Joining_Date}</p>
              </div>
              <div className="USER_DETAILS_ADDRESS_DATA_3">
              </div>  
            </div>
              
        </div>
        <img className="PROFILEIMAGE" onClick={handler} src="/close.png" />
      </div>
    </div>
  )
}

export default AProfile