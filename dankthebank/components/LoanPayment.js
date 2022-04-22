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
                            <div className="form-group col-md-6">
                                <label html="Loan ID">Loan ID</label>
                                <br />
                                <select className="dropdown" id="loanId" name="loanId">
                                    <option value="defualt">Choose Loan ID</option>
                                </select>
                            </div>
                            <div className="form-group col-md-6">
                                <label html="installment">Installment</label>
                                <input type="text" className="form-control" placeholder="Enter Installment" />
                            </div>
                        </div>
                        <div className="form-row">
                            <label html="account">Account No</label>
                            <input type="text" className="form-control" placeholder="Enter Account No" />
                        </div>
                        <div className="form-row">
                            <label html="amount">Amount</label>
                            <input type="text" className="form-control" placeholder="Enter Amount" />
                        </div>
                        <br />
                        <button type="submit" className="btn btn-primary GRADIENT">Pay</button>
                    </form>
                </div>
                <img className="CLOSEIMAGE" onClick={handler} src="/close.png" />
            </div>
        </div>

    )
}

export default LoanPayment;