import Link from 'next/link';
import { useState } from 'react';

const Login = () =>{
  const [loginasuser, setloginasuser] = useState(true);
  const handler1 = () => setloginasuser(true);
  const handler2 = () => setloginasuser(false);
  return(
    <div className='LOGIN'>
      <img className="LOGINIMG" src = "bankimage.png"/>
      <div className='LOGINCONTAINER'>
        <div className='LOGINS'>
        <div className='USER'>
          <button onClick={handler1} type="button" class="btn COLOR" active= "true" >Login As User</button>
        </div>

        <div className='ADMIN'>
        <button onClick={handler2} type="button" class="btn COLOR" >Login As Admin</button>
        </div>
        </div>
          <div className='FORMCONTAINER'>
        { loginasuser ? null : 
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
          <Link href="/admin">
            <button type="submit" class="btn COLOR LOGINB">Login as Admin</button>
          </Link> 
          </form> }
          { loginasuser ? 
          <form> 
          <div class="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
          <Link href="/user">
            <button type="submit" class="btn COLOR LOGINB">Login as User</button>
          </Link> 
          </form> : null}
        </div>
      </div>
    </div>
    )
}
export default Login;