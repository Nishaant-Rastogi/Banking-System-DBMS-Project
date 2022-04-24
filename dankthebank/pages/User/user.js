import UHome from "../../components/UHome";
import UserBar from '../../components/UserBar';
import { useState, useEffect } from "react";
import axios from "axios";
import Error from "../../components/error";

const User = () => {
  const [User, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [loggedInUserdata, setLoggedInUserdata] = useState(null);
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
      console.log(foundUser);
    }
    else {
      setUser(null);
    }
  }, [""]);
  useEffect(() => {
      if (User != null) {
        axios.post('http://localhost:5000/userProfile', User)
          .then(function (response) {
            setUserData(response.data);
            if(response.data != null){
              console.log("this is Userdata",userData);
              localStorage.setItem('userData', JSON.stringify(response.data));
              console.log(localStorage.getItem('userData'));
            }
            console.log(response.data);
            console.log("this is Userdata",userData);
            //Perform action based on response
          })
          .catch(function (error) {
            console.log(error);
            //Perform action based on error
          });
        console.log("GENERATE");
      }
      else{
        setUserData(null);
      }
  }, [User]);
  return (
    <>
      {User == null ? <Error/> :
        <div>
          <UserBar userData={userData} />
          <UHome user={User} />
        </div>}
    </>
  )
}
export default User;