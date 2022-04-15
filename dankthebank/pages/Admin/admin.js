import AHome from "../../components/AHome";
import { useState, useEffect } from "react";

const Admin = () => {
  const [Admin,setAdmin] = useState(null);
  useEffect(() => {
    const loggedInUser = localStorage.getItem("admin");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setAdmin(foundUser);
      console.log(foundUser);
    }
  }, []);
  return (
    <div>
      { Admin == null ? null : <AHome/>  }
    </div>
  )
}
export default Admin;