import React, { useEffect } from 'react';
import Link from 'next/link';

function BankInfo({ setInfo }) {
    const handler = () => { setInfo(false) };

    useEffect(() => {
        handler;
    }, []);
    return (
        <div className='APROFILE'>
            <div className='BLUR' onClick={handler} ></div>
            <div className='PROFILECONTAINER'>
                <div className='PROFILEHEADER'>
                    <div className="USER_DETAILS">
                        <div className="USER_PROFILE_IMAGE">
                            <img className="img" src="/informations.png" />
                        </div>
                        <div className="USER_DETAILS_DATA">
                            <div className="USER_DETAILS_NAME">
                                <p>A</p>
                            </div>
                            <div className="USER_DETAILS_PHONE">
                                <p>ID : A</p>
                            </div>
                        </div>

                    </div>
                    <div className="BORDER"><p className="ADDRESS">Professional Background</p></div>
                    <div className="USER_DETAILS_ADDRESS">
                    </div>
                    <div className="USER_DETAILS_ADDRESS_DATA">
                        <div className="USER_DETAILS_ADDRESS_DATA_1">
                            <p className="ADDRESS"><p className="HEADERS">Designation:</p>A</p>
                            <p className="ADDRESS"><p className="HEADERS">Salary: </p>A</p>
                        </div>
                        <div className="USER_DETAILS_ADDRESS_DATA_2"><p className="ADDRESS"><p className="HEADERS">Date of Joining : </p>A</p>
                        </div>
                        <div className="USER_DETAILS_ADDRESS_DATA_3">
                        </div>
                    </div>

                </div>
                <img className="PROFILEIMAGE" onClick={handler} src="/close.png" />
            </div>
        </div>
    )
}

export default BankInfo