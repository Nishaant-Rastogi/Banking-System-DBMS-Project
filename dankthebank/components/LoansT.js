import * as React from 'react';
import CustomCard from './Card';
import NewLoan from './NewLoan';

export default function LoansT() {
    const [loan, setLoan] = React.useState(false);
    const handleNewLoan = () => {
        setLoan(true);
      };
    return (
        <div className = "LOANTABLE">
            {loan ? <NewLoan setLoan={setLoan} /> : null}
            <div className="COL COL1">
                <div className="ROW ROW2">
                    <div className="DATA">
                        <div className="HEADER">
                            <h5>Apply For New Loan</h5>
                        </div>
                        <div className='IMGCONTAINER' onClick={handleNewLoan}>
                            <img className='FLEXIMG' src="/loan.png" />
                        </div>
                    </div>
                </div> 
            </div>
            <div className="COL COL2">
                <div className='ROW ROW1'>
                    <CustomCard />
                </div>
            </div>
        </div>
        
    );
}
