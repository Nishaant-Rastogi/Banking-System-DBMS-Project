import Link from 'next/link';
import { useState } from 'react';

const Login = () => {
  const [loginasuser, setloginasuser] = useState(true);
  const handler1 = () => setloginasuser(true);
  const handler2 = () => setloginasuser(false);
  return (
    <div className='LOGIN'>
      <img className="LOGINIMG" src="bankimage.png" />
      <div className='LOGINCONTAINER'>
        <div className='LOGINS'>
          <div className='USER'>
            <button onClick={handler1} type="button" className="btn COLOR" active="true" >Login As User</button>
          </div>

          <div className='ADMIN'>
            <button onClick={handler2} type="button" className="btn COLOR" >Login As Admin</button>
          </div>
        </div>
        <div className='FORMCONTAINER'>
          {loginasuser ? null :
            <form>
              <div className="form-group">
                <label html="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                <small id="emailHelp" className="form-text text-muted">We will never share your email with anyone else.</small>
              </div>
              <div className="form-group">
                <label html="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
              </div>
              <Link href="./Admin/admin">
                <button type="submit" className="btn COLOR LOGINB">Login as Admin</button>
              </Link>
            </form>}
          {loginasuser ?
            <form>
              <div className="form-group">
                <label htmlhtml="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                <small id="emailHelp" className="form-text text-muted">We will never share your email with anyone else.</small>
              </div>
              <div className="form-group">
                <label htmlhtml="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
              </div>
              <Link href="./User/user">
                <button type="submit" className="btn COLOR LOGINB">Login as User</button>
              </Link>
            </form> : null}
        </div>
      </div>
    </div>
  )
}
export default Login;