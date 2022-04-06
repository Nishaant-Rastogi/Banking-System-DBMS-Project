import React from 'react';


function UNew(props) {
    const handler = () => { props.setAccount(false) };

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
                                <label html="Name">Name</label>
                                <input type="text" className="form-control" id="name" placeholder="Enter Name" />
                            </div>
                            <div className="form-group col-md-6">
                                <label html="Age">Age</label>
                                <input type="text" className="form-control" id="age" placeholder="Enter Age" />
                            </div>
                            <div className="form-group col-md-6">
                                <label html="Customer_ID">Customer ID</label>
                                <input type="text" className="form-control" id="customer_id" placeholder="Enter Customer ID" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label html="PAN">PAN</label>
                            <input type="text" className="form-control" id="PAN" placeholder="Enter PAN" />
                        </div>
                        <div className="form-group">
                            <label html="Phone">Phone No</label>
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