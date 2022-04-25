import React, { useEffect, useState } from 'react'
import LoansT from '../../components/LoansT'
import Adminbar from '../../components/Adminbar'
import axios from 'axios';
import Error from "../../components/error";

const loans = () => {
    const [Admin, setAdmin] = useState(null);
    const [adminData, setAdminData] = useState(null);
    const [LoanData, setLoanData] = useState(null);
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
            axios.post('http://localhost:5000/adminLoans', Admin)
                .then(function (response) {
                    console.log(response.data);
                    setLoanData(response.data);
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
            {Admin == null ? <Error/> :
                <div className="HOME">
                    <Adminbar adminData={adminData} />
                    <LoansT Loans={LoanData} />
                </div>
            }
        </div>


    )
}

export default loans