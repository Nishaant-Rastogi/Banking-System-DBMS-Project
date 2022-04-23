import React from 'react';


function CNew(props) {
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
                        </div>
                        <div className="form-group">
                            <label html="PAN">PAN</label>
                            <input type="text" className="form-control" id="PAN" placeholder="Enter PAN" />
                        </div>
                        <div className="form-group">
                            <label html="Phone">Phone No</label>
                            <input type="text" className="form-control" id="Phone" placeholder="Enter Phone No" />
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label html="HouseNo">House No</label>
                                <input type="text" className="form-control" id="HouseNo" placeholder="Enter House No" />
                            </div>
                            <div className="form-group col-md-6">
                                <label html="Locality">Locality</label>
                                <input type="text" className="form-control" id="Locality" placeholder="Enter Locality" />
                            </div>
                            <div className="form-group col-md-6">
                                <label html="City">City</label>
                                <input type="text" className="form-control" id="City" placeholder="Enter City" />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary GRADIENT">Create Customer Account</button>
                    </form>
                </div>
                <img className="CLOSEIMAGE" onClick={handler} src="/close.png" />
            </div>
        </div>

    )
}

export default CNew