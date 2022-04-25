import React, { useState, useEffect } from 'react';
import Userbar from '../../components/UserBar';
import SAccountsT from '../../components/SAccountsT';
import axios from 'axios';
import Error from "../../components/error";

function savings() {
  const [User, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [AccountData, setAccountData] = useState(null);
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    const loggedInUserData = localStorage.getItem("userData");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
      console.log(foundUser);
    }
    else {
      setUser(null);
    }
    if (loggedInUserData) {
      const foundUserData = JSON.parse(loggedInUserData);
      setUserData(foundUserData);
      console.log(foundUserData);
    } else {
      setUserData(null);
    }
  }, [""]);
  useEffect(() => {
    if (User != null) {
      axios.post('http://localhost:5000/userSavings', User)
        .then(function (response) {
          console.log(response);
          if (response.data == 'Failure') {
            setAccountData(null);
          }
          else {
            setAccountData(response.data);
          }
          //Perform action based on response
        })
        .catch(function (error) {
          console.log(error);
          //Perform action based on error
        });
      console.log("GENERATE");
    }
  }, [User]);
  return (
    <>
      {User == null ? <Error /> :
        <div className="HOME">
          <Userbar userData={userData} />
          <SAccountsT AccountData={AccountData} />
          {console.log(AccountData)}
        </div>}
    </>
  )
}

export default savings