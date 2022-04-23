import React, { useEffect } from 'react'
import AdminBar from '../../components/AdminBar';
import Employees from '../../components/Employees';
import axios from 'axios';

const employees = () => {
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

export default employees