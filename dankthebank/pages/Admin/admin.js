import AHome from "../../components/AHome";
import { useState, useEffect } from "react";
import Adminbar from "../../components/Adminbar";
import axios from "axios";
const Admin = () => {
  const [Admin, setAdmin] = useState(null);
  const [adminData, setAdminData] = useState(null);
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
          console.log(response.data);
          setAdminData(response.data);
          localStorage.setItem('adminData', JSON.stringify(adminData));
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
          <AHome designation={adminData} />
        </div>
      }
    </div>
  )
}
export default Admin;