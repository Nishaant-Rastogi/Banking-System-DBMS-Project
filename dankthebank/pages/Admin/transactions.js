import React, { useEffect, useState } from 'react'
import AdminBar from '../../components/Adminbar';
import TransactionsT from '../../components/TransactionsT';
import axios from 'axios';

const transactions = () => {
    const [Admin, setAdmin] = useState(null);
    const [adminData, setAdminData] = useState(null);
    const [TransData, setTransData] = useState(null);
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
            axios.post('http://localhost:5000/adminTransactions', Admin)
                .then(function (response) {
                    console.log(response.data);
                    setTransData(response.data);
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
        <div>
            {Admin == null ? null :
                <div>
                    <AdminBar adminData={adminData} />
                    <TransactionsT data={TransData} />
                </div>
            }
        </div>
    )
}

export default transactions