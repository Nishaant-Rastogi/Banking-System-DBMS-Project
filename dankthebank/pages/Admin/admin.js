import React, { useState, useEffect } from "react";
import Adminbar from "../../components/Adminbar";
import axios from "axios";
import Error from "../../components/error";
import AManager from "../../components/AManager";
import CManager from "../../components/CManager";
import SManager from "../../components/SManager";
import BManager from "../../components/BManager";

const Admin = () => {
  const [Admin, setAdmin] = useState(null);
  const [adminData, setAdminData] = useState(null);
  const [Designation, setDesignation] = React.useState('');
  const [count, setCount] = React.useState(0);
  useEffect(() => {
    const loggedInUser = localStorage.getItem("admin");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setAdmin(foundUser);
      console.log(foundUser);
    } else {
      setAdmin(null);
    }
  }, [""]);
  useEffect(() => {
    if (Admin != null) {
      axios.post('http://localhost:5000/adminProfile', Admin)
        .then(function (response) {
          console.log("API request");
          console.log(response.data);
          setAdminData(response.data);
          localStorage.setItem('adminData', JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
      console.log("GENERATE");
    }
    else {
      setAdminData(null);
    }
  }, [Admin]);
  useEffect(() => {
    const loggedInAdminData = localStorage.getItem("adminData");
    if (count <= 100) {
      setCount(count + 1);
    }
    if (loggedInAdminData) {
      const foundAdminData = JSON.parse(loggedInAdminData);
      setDesignation(foundAdminData.Designation);
    } else {
      setDesignation('');
    }
  }, [count]);
  return (
    <div>
      {Admin == null ? <Error /> :
        <div>
          <Adminbar adminData={adminData} />
          {Designation === "Account Manager" ? <AManager /> : null}
          {Designation === "Service Manager" ? <SManager /> : null}
          {Designation === "Customer Service" ? <CManager /> : null}
          {Designation === "Branch Manager" ? <BManager /> : null}
        </div>
      }
    </div>
  )
}
export default Admin;