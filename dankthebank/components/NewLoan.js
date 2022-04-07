import React from 'react';


function NewLoan(props) {
    const handler = () => { props.setLoan(false) };

    React.useEffect(() => {
        handler;
    }, []);
    return (
        <div className='NEWLOAN'>
            <div className='BLUR' onClick={handler} ></div>
            <div className='LOANCONTAINER'>
                <div className='FORM'>
                    <form>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlhtml="account">Account No</label>
                                <input type="text" className="form-control" placeholder="Enter Account No" />
                            </div>
                            <div className="form-group">
                                <label htmlhtml="amount">Amount</label>
                                <input type="text" className="form-control" placeholder="Amount" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlhtml="roi">Rate of Interest</label>
                            <input type="text" className="form-control" placeholder="Rate of Interest" />
                        </div>
                        <div className="form-group">
                            <label htmlhtml="term">Term</label>
                            <input type="text" className="form-control" placeholder="Term" />
                        </div>
                        <div className="form-group">
                            <label htmlhtml="start">Start Date</label>
                            <input type="text" className="form-control" placeholder="Start Date" />
                        </div>
                        <button type="submit" className="btn btn-primary">Create Account</button>
                    </form>
                </div>
                <img className="CLOSEIMAGE" onClick={handler} src="/close.png" />
            </div>
        </div>

    )
}

export default NewLoan;