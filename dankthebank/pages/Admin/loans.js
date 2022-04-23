import React, { useEffect } from 'react'
import LoansT from '../../components/LoansT'
import Adminbar from '../../components/Adminbar'
import axios from 'axios'

const loans = () => {
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

export default loans