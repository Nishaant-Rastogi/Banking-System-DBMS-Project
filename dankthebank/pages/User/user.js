import UHome from "../../components/UHome";
import UserBar from '../../components/UserBar';
import { useState, useEffect } from "react";
import axios from "axios";

const User = () => {
  const [User, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
      console.log(foundUser);
    }
  }, []);
  useEffect(() => {
    axios.post('http://localhost:5000/userProfile', User)
      .then(function (response) {
        console.log(response.data);
        setUserData(response.data);
        //Perform action based on response
      })
      .catch(function (error) {
        console.log(error);
        //Perform action based on error
      });
    console.log("GENERATE");
  }, [User]);
  return (
    <div>
      <UserBar userData={userData} />
      {User == null ? null : <UHome userData={userData} />}
    </div>
  )
}
export default User;