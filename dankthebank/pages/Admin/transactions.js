import React, { useEffect,useState } from 'react'
import AdminBar from '../../components/Adminbar';
import TransactionsT from '../../components/TransactionsT';
import axios from 'axios';

const transactions = () => {
    const [Admin, setAdmin] = useState(null);
    const [adminData, setAdminData] = useState(null);
    useEffect(() => {
        const loggedInUser = localStorage.getItem("admin");
        if (loggedInUser) {
            const foundUser = JSON.parse(loggedInUser);
            setAdmin(foundUser);
            console.log(foundUser);
        }
        else{
            setAdmin(null);
        }
    }, [""]);
    useEffect(() => {
        if(Admin!=null){
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
    return (
        <div>
            {Admin == null ? null :
                <div>
                    <AdminBar adminData={adminData} />
                    <TransactionsT />
                </div>
            }
        </div>
    )
}

export default transactions