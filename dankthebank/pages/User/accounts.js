import React, { useState, useEffect } from 'react';
import Userbar from '../../components/UserBar';
import SAccountsT from '../../components/SAccountsT';
import axios from 'axios';
function accounts() {
    const [User, setUser] = useState(null);
    const [userData, setUserData] = useState(null);
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
        axios.post('http://localhost:5000/userAccounts', User)
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
        <>
            {User == null ? null :
                <div>
                    <Userbar userData={userData} />
                    <SAccountsT />
                </div>}
        </>
    )
}

export default accounts