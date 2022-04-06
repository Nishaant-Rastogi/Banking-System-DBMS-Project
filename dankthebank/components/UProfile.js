import Link from 'next/link';
import React from 'react';


function UProfile(props) {
  const handler = () => { props.setProfile(false) };

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
              <p className="Account_No">AAAAAAAAAAAAAAAA</p>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Account No</label>
              <p className="Account_No">XXXXXXXXXXXXXXXX</p>
            </div>
            <div className="form-group">
              <Link href='/User/accounts'>
                <label htmlFor="exampleInputPassword1">Accounts</label>
              </Link>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Phone Number</label>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Address</label>
            </div>
          </div>
        </div>
        <img className="PROFILEIMAGE" onClick={handler} src="/close.png" />
      </div>
    </div>

  )
}

export default UProfile