import AHome from "../../components/AHome";
import { useState, useEffect } from "react";
import Adminbar from "../../components/Adminbar";
import axios from "axios";
import Error from "../../components/error";

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
      if(Admin !=null) {
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
      else{
        setAdminData(null);
      }
  }, [Admin]);
  return (
    <div>
      {Admin == null ? <Error/> :
        <div>
          <Adminbar adminData={adminData} />
          <AHome  />
        </div>
      }
    </div>
  )
}
export default Admin;