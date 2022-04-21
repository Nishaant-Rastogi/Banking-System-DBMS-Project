import React from 'react';
import axios from 'axios';

function UNew(props) {
    const handler = () => { props.setAccount(false) };

    React.useEffect(() => {
        handler;
    }, []);
    const handleNewAccount = (e) => {
        e.preventDefault();
        const data = {
            Customer_ID: e.target.Customer_ID.value,
            Balance: e.target.Balance.value,
            AccountType: e.target.AccountType.value,
        }
        axios.post('http://localhost:5000/newAccount', data)
            .then(function (response) {
                console.log(response);
                if (response.data === "Success") {
                    alert("Account Created");
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
        <div className='UNEW'>
            <div className='BLUR' onClick={handler} ></div>
            <div className='ACCONTAINER'>
                <div className='FORM'>
                    <form onSubmit={handleNewAccount}>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="Name">Name</label>
                                <input type="text" className="form-control" id="Name" placeholder="Enter Name" />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="Customer_ID">Customer ID</label>
                                <input type="text" className="form-control" id="Customer_ID" placeholder="Enter Customer ID" />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="PAN">PAN</label>
                                <input type="text" className="form-control" id="PAN" placeholder="Enter PAN" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="Balance">Starting Balance</label>
                            <input type="text" className="form-control" id="Balance" placeholder="Enter Starting Balance" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="AccountType">Account Type</label>
                            <select className="dropdown" id="AccountType" name="AccountType">
                                <option value="defualt">Choose Account Type</option>
                                <option value="Savings">Savings</option>
                                <option value="Current">Current</option>
                            </select>
                            {/* <input type="select" className="form-control" id="AccountType" placeholder="Enter PAN" /> */}
                        </div>
                        <div className="form-group">
                            <label htmlFor="Phone">Phone No</label>
                            <input type="text" className="form-control" id="Phone" placeholder="Enter Phone No" />
                        </div>
                        <button type="submit" className="btn btn-primary">Create Account</button>
                    </form>
                </div>
                <img className="CLOSEIMAGE" onClick={handler} src="/close.png" />
            </div>
        </div>

    )
}

export default UNew