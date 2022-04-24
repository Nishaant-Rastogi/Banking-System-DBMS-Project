import React, { useEffect, useState } from 'react'
import AdminBar from '../../components/Adminbar';
import Employees from '../../components/Employees';
import axios from 'axios';

const employees = () => {
    const [Admin, setAdmin] = useState(null);
    const [adminData, setAdminData] = useState(null);
    const [EmpData, setEmpData] = useState(null);
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
            axios.post('http://localhost:5000/adminEmployees', Admin)
                .then(function (response) {
                    console.log("this data");
                    console.log(response.data);
                    setEmpData(response);
                    console.log("heree is employee")
                    console.log(EmpData);
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
                    <Employees EmpData={EmpData == null ? null : EmpData.data} />
                </div>
            }
        </div>
    )
}

export default employees