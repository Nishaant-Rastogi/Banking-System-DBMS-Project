import React, { useState, useEffect } from 'react';
import Userbar from '../../components/Userbar';
import SAccountsT from '../../components/SAccountsT';
import axios from 'axios';

function savings() {
  const [User, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
      console.log(foundUser);
    }
    else{
      setUser(null);
    }
  }, []);
  useEffect(() => {
    axios.post('http://localhost:5000/userSavings', User)
      .then(function (response) {
        console.log(response);
        //Perform action based on response
      })
      .catch(function (error) {
        console.log(error);
        //Perform action based on error
      });
    console.log("GENERATE");
  }, [User]);
  return (
    <>
    {User == null ? null :
    <div>
      <Userbar userData={userData} />
      <SAccountsT />
    </div> }
    </>
  )
}

export default savings