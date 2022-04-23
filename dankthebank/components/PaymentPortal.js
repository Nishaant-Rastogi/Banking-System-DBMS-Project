import React, { useEffect } from 'react';
import axios from 'axios';

function PaymentPortal(props) {
    const handler = () => { props.setTransact(false) };

    useEffect(() => {
        handler;
    }, []);
    const handlePayment = (e) => {
        e.preventDefault();
        const data = {
            SAccountNo: e.target.SAccountNo.value,
            RAccountNo: e.target.RAccountNo.value,
            Amount: e.target.Amount.value,
        }
        axios.post('http://localhost:5000/newTransaction', data)
            .then(function (response) {
                console.log(response);
                if (response.data === "Success") {
                    alert("Payment Successful");
                    props.setTransact(false);
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
        <div className='UNEW'>
            <div className='BLUR' onClick={handler} ></div>
            <div className='ACCONTAINER'>
                <div className='FORM'>
                    <form onSubmit={handlePayment}>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label html="SAccountNo">Your Account No</label>
                                <input type="text" className="form-control" id="SAccountNo" placeholder="Enter Account No" />
                            </div>
                            <div className="form-group col-md-6">
                                <label html="RAccountNo">Recipient Account No</label>
                                <input type="text" className="form-control" id="RAccountNo" placeholder="Enter Account No" />
                            </div>
                            <div className="form-group col-md-6">
                                <label html="Amount">Amount</label>
                                <input type="text" className="form-control" id="Amount" placeholder="Enter Amount" />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary GRADIENT">Transfer Funds</button>
                    </form>
                </div>
                <img className="CLOSEIMAGE" onClick={handler} src="/close.png" />
            </div>
        </div>

    )
}

export default PaymentPortal