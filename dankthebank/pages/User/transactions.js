import React, { useState, useEffect } from 'react';
import Userbar from '../../components/UserBar';
import TransactionsT from '../../components/TransactionsT';
import axios from 'axios';
import Error from "../../components/error";

function transactions() {
  const [User, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [transactions, setTransactions] = useState(null);
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
      console.log("here");
    }
  }, [""]);

  useEffect(() => {
    axios.post('http://localhost:5000/userTransactions', User)
      .then(function (response) {
        console.log(response);
        if (response.data != "Failure") {
          setTransactions(response.data);
        }
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
      {User == null ? <Error/> :
        <div>
          <Userbar userData={userData} />
          <TransactionsT data={transactions} />
        </div>}
    </>
  )
}

export default transactions;