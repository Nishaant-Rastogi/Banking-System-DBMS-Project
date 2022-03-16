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
        <div className="DUMMYFORM">
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
            <button type="submit" className="btn COLOR LOGINB">Login as Admin</button>
          </form>
          <form> 
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
            <button type="submit" className="btn COLOR LOGINB">Login as User</button>
          </form>
          </div>
          <img className="PROFILEIMAGE" onClick={handler} src = "close.png"/>
    </div>
    </div>
    
  )
}

export default UProfile