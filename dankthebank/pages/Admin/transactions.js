import React, { useEffect } from 'react'
import AdminBar from '../../components/AdminBar';
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
    }, [""]);
    return (
        <div>
            {Admin == null ? null :
                <div>
                    <Adminbar adminData={adminData} />
                    <AHome />
                </div>
            }
        </div>
    )
}

export default transactions