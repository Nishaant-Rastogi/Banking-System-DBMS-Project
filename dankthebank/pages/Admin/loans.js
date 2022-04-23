import React, { useEffect, useState } from 'react'
import LoansT from '../../components/LoansT'
import Adminbar from '../../components/Adminbar'
import axios from 'axios'

const loans = () => {
    const [Admin, setAdmin] = useState(null);
    const [adminData, setAdminData] = useState(null);
    useEffect(() => {
        const loggedInUser = localStorage.getItem("admin");
        if (loggedInUser) {
            const foundUser = JSON.parse(loggedInUser);
            setAdmin(foundUser);
            console.log(foundUser);
        }
        else {
            setAdmin(null);
        }
    }, [""]);
    useEffect(() => {
        if (Admin != null) {
            axios.post('http://localhost:5000/adminProfile', Admin)
                .then(function (response) {
                    console.log(response.data);
                    setAdminData(response.data);
                    //Perform action based on response
                })
                .catch(function (error) {
                    console.log(error);
                    //Perform action based on error
                });
            console.log("GENERATE");
        }
    }, [Admin]);
    useEffect(() => {
        if (Admin != null) {
            axios.post('http://localhost:5000/adminLoans', Admin)
                .then(function (response) {
                    console.log(response.data);
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
                    <Adminbar adminData={adminData} />
                    <LoansT />
                </div>
            }
        </div>


    )
}

export default loans