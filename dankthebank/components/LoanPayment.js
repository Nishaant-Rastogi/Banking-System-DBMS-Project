import React from 'react';


function LoanPayment(props) {
    const handler = () => { props.setLoanPayment(false) };

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
                            <label htmlhtml="account">Account No</label>
                            <input type="text" className="form-control" placeholder="Enter Account No" />
                        </div>
                        <div className="form-group">
                            <label htmlhtml="Loan ID">Loan ID</label>
                            <select className="dropdown" id="loanId" name="loanId">
                                <option value="defualt">Choose Loan ID</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary">Pay</button>
                    </form>
                </div>
                <img className="CLOSEIMAGE" onClick={handler} src="/close.png" />
            </div>
        </div>

    )
}

export default LoanPayment;