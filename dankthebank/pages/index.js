import Link from 'next/link';
import { useRouter } from 'next/router'
import axios from 'axios';
import { useEffect, useState } from 'react';
import swal from 'sweetalert';

const Login = () => {
  const router = useRouter()
  const [loginasuser, setloginasuser] = useState(true);
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const handler1 = () => { setloginasuser(true) };
  const handler2 = () => setloginasuser(false);


  const handleLoginUser = (e) => {
    e.preventDefault();
    const user = { id, password };
    axios.post('http://localhost:5000/authUser', user)
      .then(function (response) {
        console.log(response);
        if (response.data === "Success") {
          localStorage.setItem('user', JSON.stringify(user));
          swal("Welcome !", "Login Successful !", "success");
          router.push('/User/user');
        } else {
          swal("Wrong ID or Password !", "Try Again !", "error");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    e.target.Customer_ID.value = '';
    e.target.Password.value = '';
  }
  const handleLoginAdmin = (e) => {
    e.preventDefault();
    const user = { id, password };
    axios.post('http://localhost:5000/authAdmin', { id, password })
      .then(function (response) {
        console.log(response);
        if (response.data === "Success") {
          localStorage.setItem('admin', JSON.stringify(user));
          swal("Welcome !", "Login Successful !", "success");
          router.push('/Admin/admin');
        } else {
          swal("Wrong ID or Password !", "Try Again !", "error");
        }
        //Perform action based on response
      })
      .catch(function (error) {
        console.log(error);
        //Perform action based on error
      });
    e.target.Employee_ID.value = '';
    e.target.Password.value = '';
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
            <form onSubmit={handleLoginAdmin}>
              <div className="form-group">
                <label html="exampleInputid1">Employee ID</label>
                <input onChange={event => setId(event.target.value)} type="text" className="form-control" id="Employee_ID" aria-describedby="idHelp" placeholder="Enter id" />
                <small id="idHelp" className="form-text text-muted">We will never share your id with anyone else.</small>
              </div>
              <div className="form-group">
                <label html="exampleInputPassword1">Password</label>
                <input onChange={event => setPassword(event.target.value)} type="password" className="form-control" id="Password" placeholder="Password" />
              </div>
              <button type="submit" className="btn COLOR LOGINB">Login as Admin</button>
            </form>}
          {loginasuser ?
            <form onSubmit={handleLoginUser}>
              <div className="form-group">
                <label htmlhtml="exampleInputid1">Customer ID</label>
                <input onChange={event => setId(event.target.value)} type="id" className="form-control" id="Customer_ID" aria-describedby="idHelp" placeholder="Enter id" />
                <small id="idHelp" className="form-text text-muted">We will never share your id with anyone else.</small>
              </div>
              <div className="form-group">
                <label htmlhtml="exampleInputPassword1">Password</label>
                <input onChange={event => setPassword(event.target.value)} type="password" className="form-control" id="Password" placeholder="Password" />
              </div>
              <button type="submit" className="btn COLOR LOGINB">Login as User</button>
            </form> : null}
        </div>
      </div>
    </div>
  )
}
export default Login;