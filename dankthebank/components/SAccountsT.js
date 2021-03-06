import * as React from 'react';
import CardA from './CardA';
import UNew from './UNew';
import { useState, useEffect } from 'react';

export default function SAccountsT({ AccountData } ) {
    const [account, setAccount] = React.useState(false);
    const handleNewAccount = () => {
        setAccount(true);
    };
    return (
        <div className="SAVINGACCOUNT">
            {account ? <UNew setAccount={setAccount} /> : null}
            <div className="COL COL1">
                <div className="ROW ROW2">
                    <div className="DATA">
                        <div className="HEADER">
                            <h5>Create New Account</h5>
                        </div>
                        <div className='IMGCONTAINER' onClick={handleNewAccount}>
                            <img className='FLEXIMG' src="/add-user.png" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="COL COL2">
                <div className='ROW ROW1'>
                    <CardA AccountData={AccountData}/>
                </div>
            </div>
        </div>

    );
}
