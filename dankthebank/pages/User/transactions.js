import React from 'react';
import Userbar from '../../components/Userbar';
import TransactionsT from '../../components/TransactionsT';
function transactions() {
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
    axios.post('http://localhost:5000/userTransactions', User)
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
      <TransactionsT />
    </div>
  )
}

export default transactions