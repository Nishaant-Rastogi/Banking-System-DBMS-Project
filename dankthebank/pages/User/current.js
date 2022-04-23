import React, { useState, useEffect } from 'react';
import Userbar from '../../components/UserBar';
import SAccountsT from '../../components/SAccountsT';
import axios from 'axios';
function current() {
  const [User, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [AccountData, setAccountData] = useState(null);
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
          console.log(response.data);
          setUserData(response.data);
          //Perform action based on response
        })
        .catch(function (error) {
          console.log(error);
          //Perform action based on error
        });
      console.log("GENERATE");
    }
  }, [User]);
  useEffect(() => {
    axios.post('http://localhost:5000/userCurrent', User)
      .then(function (response) {
        console.log(response);
        setAccountData(response.data);
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
          <SAccountsT AccountData={AccountData} />
        </div>}
    </>
  )
}

export default current