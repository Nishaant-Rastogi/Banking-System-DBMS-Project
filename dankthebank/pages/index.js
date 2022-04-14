import Link from 'next/link';
import { useRouter } from 'next/router'
import axios from 'axios';
import { useEffect, useState } from 'react';


const Login = () => {
  const router = useRouter()
  const [loginasuser, setloginasuser] = useState(true);
  const [id, setid] = useState('');
  const [password, setpassword] = useState('');

  const handler1 = () => { setloginasuser(true) };
  const handler2 = () => setloginasuser(false);


  const handleLoginUser = (e) => {
    axios.post('http://localhost:5000/authUser', { id, password })
      .then(function (response) {
        console.log(response);
        if (response.data === "Success") {
          e.preventDefault();
          router.push('/User/user');
        } else {
          alert("Wrong ID or Password");
        }
        //Perform action based on response
      })
      .catch(function (error) {
        console.log(error);
        //Perform action based on error
      });
    console.log("GENERATE");
  }
  const handleLoginAdmin = (e) => {
    axios.post('http://localhost:5000/authAdmin', { id, password })
      .then(function (response) {
        console.log(response);
        if (response === "Success") {
          e.preventDefault();
          router.push('/Admin/admin');
        } else {
          alert("Wrong ID or Password");
        }
        //Perform action based on response
      })
      .catch(function (error) {
        console.log(error);
        //Perform action based on error
      });
  }
  return (
    <div className='LOGIN'>
      <img className="LOGINIMG" src="bankimage.png" />
      <div className='LOGINCONTAINER'>
        <div className='LOGINS'>
          <div className='USER'>
            <button onClick={handler1} type="button" className="btn COLOR" active="true" >USER</button>
          </div>

          <div className='ADMIN'>
            <button onClick={handler2} type="button" className="btn COLOR" >ADMIN</button>
          </div>
        </div>
        <div className='FORMCONTAINER'>
          {loginasuser ? null :
            <form>
              <div className="form-group">
                <label html="exampleInputid1">Employee ID</label>
                <input onChange={event => setid(event.target.value)} type="text" className="form-control" id="exampleInputid1" aria-describedby="idHelp" placeholder="Enter id" />
                <small id="idHelp" className="form-text text-muted">We will never share your id with anyone else.</small>
              </div>
              <div className="form-group">
                <label html="exampleInputPassword1">Password</label>
                <input onChange={event => setpassword(event.target.value)} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
              </div>
              <button onClick={handleLoginAdmin} type="submit" className="btn COLOR LOGINB">Login as Admin</button>
            </form>}
          {loginasuser ?
            <form>
              <div className="form-group">
                <label htmlhtml="exampleInputid1">Customer ID</label>
                <input onChange={event => setid(event.target.value)} type="id" className="form-control" id="exampleInputid1" aria-describedby="idHelp" placeholder="Enter id" />
                <small id="idHelp" className="form-text text-muted">We will never share your id with anyone else.</small>
              </div>
              <div className="form-group">
                <label htmlhtml="exampleInputPassword1">Password</label>
                <input onChange={event => setpassword(event.target.value)} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
              </div>
              <button onClick={handleLoginUser} type="submit" className="btn COLOR LOGINB">Login as User</button>
            </form> : null}
        </div>
      </div>
    </div>
  )
}
export default Login;