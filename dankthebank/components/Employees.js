import React from 'react'
import CardE from './CardE';
import ENew from './ENew';

const Employees = () => {
    const [employee, setEmployee] = React.useState(false);
    const handleNewEmployee = () => {
        setEmployee(true);
    };
    return (
        <div className="SAVINGACCOUNT">
            {employee ? <ENew setEmployee={setEmployee} /> : null}
            <div className="COL COL1">
                <div className="ROW ROW2">
                    <div className="DATA">
                        <div className="HEADER">
                            <h5>Add New Employee</h5>
                        </div>
                        <div className='IMGCONTAINER' onClick={handleNewEmployee}>
                            <img className='FLEXIMG' src="/add-user.png" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="COL COL2">
                <div className='ROW ROW1'>
                    <CardE />
                </div>
            </div>
        </div>

    );
}

export default Employees