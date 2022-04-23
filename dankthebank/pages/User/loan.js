import React, { useState, useEffect } from 'react';
import Userbar from '../../components/UserBar';
import LoansT from '../../components/LoansT';
import axios from 'axios';
function UserLoan() {
  const [User, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [loans, setLoans] = useState(null);
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
    if (User != null) {
      axios.post('http://localhost:5000/userLoans', User)
        .then(function (response) {
          console.log(response.data);
          if(response.data == 'Failure'){
            setLoans(null);
          }
          else{
            setLoans(response.data);
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
      {User == null ? null :
        <div>
          <Userbar userData={userData} />
          <LoansT Loans={loans}/>
        </div>}
    </>
  )
}

export default UserLoan