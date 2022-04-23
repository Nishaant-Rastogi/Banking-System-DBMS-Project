import React, { useEffect } from 'react';
import axios from 'axios';

function NewLoan(props) {
    const handler = () => { props.setLoan(false) };

    useEffect(() => {
        handler;
    }, []);
    const handleNewLoan = (e) => {
        e.preventDefault();
        const data = {
            account: e.target.account.value,
            amount: e.target.amount.value,
            roi: e.target.roi.value,
            term: e.target.term.value,
        }
        axios.post('http://localhost:5000/newLoan', data)
            .then(function (response) {
                console.log(response);
                if (response.data === "Success") {
                    alert("Loan Created");
                    props.setLoan(false);
                } else {
                    alert("Failed to Create Loan");
                }
                //Perform action based on response
            })
            .catch(function (error) {
                console.log(error);
                //Perform action based on error
            });
        console.log("GENERATE");
    }
    return (
        <div className='NEWLOAN'>
            <div className='BLUR' onClick={handler} ></div>
            <div className='LOANCONTAINER'>
                <div className='FORM'>
                    <form onSubmit={handleNewLoan}>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="account">Account No</label>
                                <input type="text" id="account" className="form-control" placeholder="Enter Account No" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="amount">Amount</label>
                                <input type="text" id="amount" className="form-control" placeholder="Amount" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="roi">Rate of Interest</label>
                            <input type="text" id="roi" className="form-control" placeholder="Rate of Interest" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="term">Term</label>
                            <input type="text" id="term" className="form-control" placeholder="Term" />
                        </div>
                        <button type="submit" className="btn btn-primary GRADIENT">Approve New Loan</button>
                    </form>
                </div>
                <img className="CLOSEIMAGE" onClick={handler} src="/close.png" />
            </div>
        </div>

    )
}

export default NewLoan;