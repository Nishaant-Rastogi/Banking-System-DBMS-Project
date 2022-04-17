import React from 'react';
import Userbar from '../../components/Userbar';
import LoansT from '../../components/LoansT';
function UserLoan() {
  const [User, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
      console.log(foundUser);
    }
  }, []);
  useEffect(() => {
    axios.post('http://localhost:5000/userLoans', User)
      .then(function (response) {
        console.log(response.data);
        setUserData(response.data);
        //Perform action based on response
      })
      .catch(function (error) {
        console.log(error);
        //Perform action based on error
      });
    console.log("GENERATE");
  }, [User]);
  return (
    <div>
      <Userbar userData={userData} />
      <LoansT />
    </div>
  )
}

export default UserLoan