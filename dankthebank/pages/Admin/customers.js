import React, { useState, useEffect } from 'react';
import AdminBar from '../../components/Adminbar';
import axios from 'axios';
import Error from "../../components/error";
import Customers from '../../components/Customers';

function customers() {
    const [AccountData, setAccountData] = useState(null);
    const [Admin, setAdmin] = useState(null);
    const [adminData, setAdminData] = useState(null);
    const [Designation, setDesignation] = React.useState('');
    useEffect(() => {
        const loggedInUser = localStorage.getItem("admin");
        const loggedInUserData = localStorage.getItem("adminData");
        if (loggedInUser) {
            const foundUser = JSON.parse(loggedInUser);
            setAdmin(foundUser);
            console.log(foundUser);
        }
        else {
            setAdmin(null)
        }
        if (loggedInUserData) {
            const foundUserData = JSON.parse(loggedInUserData);
            setAdminData(foundUserData);
            console.log(foundUserData);
        } else {
            setAdminData(null);
        }
    }, [""]);
    useEffect(() => {
        if (Admin != null) {
            axios.post('http://localhost:5000/adminCustomers', Admin)
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
    }, [Admin]);
    return (
        <>
            {Admin == null ? <Error /> :
                <div className="HOME">
                    <AdminBar adminData={adminData} />
                    <Customers AccountData={AccountData} />
                    {console.log(AccountData)}
                </div>}
        </>
    )
}

export default customers