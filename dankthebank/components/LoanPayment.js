import React from 'react';
import swal from 'sweetalert';

function LoanPayment(props) {
    const handler = () => { props.setLoanPayment(false) };

    useEffect(() => {
        handler;
    }, []);
    const handleLoanPayment = (e) => {
        e.preventDefault();
        const data = {
            LoanID: e.target.LoanID.value,
            Amount: e.target.amount.value,
            AccountNo: e.target.account.value,
        }
        axios.post('http://localhost:5000/loanPayment', data)
            .then(function (response) {
                console.log(response);
                if (response.data === "Success") {
                    swal("Good Job !", "Loan Payment Successful !", "success");
                    props.setAccount(false);
                } else {
                    alert("Wrong ID or Password");
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
                    <form onSubmit={handleLoanPayment}>
                        <div className="form-row">
                            <div className="form-group col-md 6">
                                <label htmlFor="account">Account No</label>
                                <input type="text" id="account" className="form-control" placeholder="Enter Account No" />
                            </div>
                            <div className="form-group col-md 6">
                                <label htmlFor="LoanID">Loan ID</label>
                                <input type="text" id="LoanID" className="form-control" placeholder="Enter LoanID" />
                            </div>
                        </div>
                        <div className="form-row">
                            <label htmlFor="amount">Amount</label>
                            <input type="text" id="amount" className="form-control" placeholder="Enter Amount" />
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