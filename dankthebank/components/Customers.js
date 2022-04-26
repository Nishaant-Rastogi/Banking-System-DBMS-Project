import * as React from 'react';
import CardC from './CardC';
import CNew from './CNew';
import { useState, useEffect } from 'react';

export default function Customers({ AccountData }) {
    const [account, setAccount] = useState(false);
    const handleNewCustomer = () => {
        setAccount(true);
    };

    return (
        <div className="SAVINGACCOUNT">
            {account ? <CNew setAccount={setAccount} /> : null}
            <div className="COL COL1">
                <div className="ROW ROW2">
                    <div className="DATA">
                        <div className="HEADER">
                            <h5>Add New Customer</h5>
                        </div>
                        <div className='IMGCONTAINER' onClick={handleNewCustomer}>
                            <img className='FLEXIMG' src="/add-user.png" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="COL COL2">
                <div className='ROW ROW1'>
                    <CardC AccountData={AccountData} />
                </div>
            </div>
        </div>

    );
}
