import React, { useEffect } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
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
                    swal("Congratulations !", "Loan Created and Approved !", "success");
                    props.setLoan(false);
                } else {
                    swal("Failed to Create Loan", "Try Again Later!", "error");
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
                            <br></br>
                            <select type="text" id="roi" className="form-control">
                                <option value="Defualt">Choose Interest Rate</option>
                                <option value="0">0%</option>
                                <option value="6">6%</option>
                            </select>

                        </div>
                        <div className="form-group">
                            <label htmlFor="term">Term</label>
                            <input type="text" id="term" className="form-control" placeholder="Term" />
                        </div>
                        <button type="submit" className="btn btn-primary GRADIENT">Request New Loan</button>
                    </form>
                </div>
                <img className="CLOSEIMAGE" onClick={handler} src="/close.png" />
            </div>
        </div>

    )
}

export default NewLoan;