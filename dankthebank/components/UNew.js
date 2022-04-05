import React from 'react';


function UNew(props) {
    const handler = () => { props.setAccount(false) };

    React.useEffect(() => {
        handler;
    }, []);
    return (
        <div className='UPROFILE'>
            <div className='BLUR' onClick={handler} ></div>
            <div className='PROFILECONTAINER'>
                <div className="DUMMYFORM">
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" placeholder="Enter Name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="age">Age</label>
                            <input type="text" className="form-control" placeholder="Enter Age" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="pan">PAN</label>
                            <input type="text" className="form-control" placeholder="Enter PAN" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Phone No">Phone No</label>
                            <input type="text" className="form-control" placeholder="Enter Phone No." />
                        </div>
                        <button type="submit" className="btn COLOR LOGINB">Create New Account</button>
                    </form>
                </div>
                <img className="PROFILEIMAGE" onClick={handler} src="close.png" />
            </div>
        </div>

    )
}

export default UNew