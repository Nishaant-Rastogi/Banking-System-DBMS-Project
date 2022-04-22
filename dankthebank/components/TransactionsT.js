import React, { useState } from 'react';
import CardT from './CardT';
import PaymentPortal from './PaymentPortal';

export default function TransactionsT({ data }) {
    const [transact, setTransact] = useState(false);
    const handleNewTransact = () => {
        setTransact(true);
    }
    return (
        <div className="TRANSACTIONS">
            {transact ? <PaymentPortal setTransact={setTransact} /> : null}
            <div className="COL COL1">
                <div className="ROW ROW2">
                    <div className="DATA">
                        <div className="HEADER">
                            <h5>Transfer Funds</h5>
                        </div>
                        <div className='IMGCONTAINER' onClick={handleNewTransact}>
                            <img className='FLEXIMG' src="/transaction.png" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="COL COL2">
                <div className='ROW ROW1'>
                    <CardT data = {data}/>
                </div>
            </div>
        </div>

    );
}
