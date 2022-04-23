import React, { useState, useEffect } from 'react';
import Userbar from '../../components/Userbar';
import TransactionsT from '../../components/TransactionsT';
import axios from 'axios';


function transactions() {
  const [User, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [transactions, setTransactions] = useState(null);
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
      {User == null ? null :
        <div>
          <Userbar userData={userData} />
          <TransactionsT data={transactions} />
        </div>}
    </>
  )
}

export default transactions;