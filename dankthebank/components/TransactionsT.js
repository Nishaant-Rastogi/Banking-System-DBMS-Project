import * as React from 'react';
import CardT from './CardT';

export default function TransactionsT() {
    return (
        <div className="DROPDOWNCONTAINER">
            <div className="COL COL1">
                <div className="ROW ROW2">
                    <div>
                        <div className='IMGCONTAINER'>
                            <img className='IMG ACIMG' src="/insurance.png" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="COL COL2">
                <div className='ROW ROW1'>
                    <CardT />
                </div>
            </div>
        </div>

    );
}
