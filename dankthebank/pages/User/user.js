import UHome from "../../components/UHome";
import { useState, useEffect } from "react";


const User = () =>{
  const [User,setUser] = useState(null);
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
      console.log(foundUser);
    }
  }, []);
    return(
      <div>
        { User == null ? null : <UHome/>  }
      </div>
      )
  }
  export default User;