import React from 'react';


function PaymentPortal(props) {
    const handler = () => { props.setTransact(false) };

    React.useEffect(() => {
        handler;
    }, []);
    return (
        <div className='UNEW'>
            <div className='BLUR' onClick={handler} ></div>
            <div className='ACCONTAINER'>
                <div className='FORM'>
                    <form>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label html="AccountNo">Recipient Account No</label>
                                <input type="text" className="form-control" id="AccountNo" placeholder="Enter Account No" />
                            </div>
                            <div className="form-group col-md-6">
                                <label html="Name">Name</label>
                                <input type="text" className="form-control" id="name" placeholder="Enter Name" />
                            </div>
                            <div className="form-group col-md-6">
                                <label html="Amount">Amount</label>
                                <input type="text" className="form-control" id="amount" placeholder="Enter Amount" />
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