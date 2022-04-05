import React from 'react';


function NewLoan(props) {
    const handler = () => { props.setLoan(false) };

    React.useEffect(() => {
        handler;
    }, []);
    return (
        <div className='UPROFILE'>
            <div className='BLUR' onClick={handler} ></div>
            <div className='PROFILECONTAINER'>
                <div className="DUMMYFORM">
                    <form>
                        <div className="form-group">
                            <label htmlFor="account">Account No</label>
                            <input type="text" className="form-control" placeholder="Enter Account No" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="amount">Amount</label>
                            <input type="text" className="form-control" placeholder="Amount" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="roi">Rate of Interest</label>
                            <input type="text" className="form-control" placeholder="Rate of Interest" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="term">Term</label>
                            <input type="text" className="form-control" placeholder="Term" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="start">Start Date</label>
                            <input type="text" className="form-control" placeholder="Start Date" />
                        </div>
                        <button type="submit" className="btn COLOR LOGINB">Take New Loan</button>
                    </form>

                </div>
                <img className="PROFILEIMAGE" onClick={handler} src="close.png" />
            </div>
        </div>

    )
}

export default NewLoan