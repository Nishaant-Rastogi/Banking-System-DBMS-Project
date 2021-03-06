import React, { useState, useEffect } from 'react';
import axios from 'axios';
import swal from 'sweetalert';

function CNew(props) {
    const handler = () => { props.setAccount(false) };
    const [Admin, setAdmin] = useState(null);
    useEffect(() => {
        handler;
        const loggedInUser = localStorage.getItem("admin");
        if (loggedInUser) {
            const foundUser = JSON.parse(loggedInUser);
            setAdmin(foundUser);
            console.log(foundUser);
        } else {
            setAdmin(null);
        }
    }, [""]);
    const handleNewCustomer = (e) => {
        e.preventDefault();
        const data = {
            Admin: Admin,
            Name: e.target.Name.value,
            Age: e.target.Age.value,
            Phone: e.target.Phone.value,
            HouseNo: e.target.HouseNo.value,
            Locality: e.target.Locality.value,
            City: e.target.City.value,
            PAN: e.target.PAN.value,
            Password: e.target.Password.value
        }
        axios.post('http://localhost:5000/newCustomer', data)
            .then(function (response) {
                console.log(response);
                if (response.data === "Success") {
                    swal("Welcome New Customer !", "New Customer Added !", "success");
                    props.setAccount(false)
                } else {
                    swal("Invalid Data Entry !", "Try Again !", "error");
                }
                //Perform action based on response
            })
            .catch(function (error) {
                console.log(error);
                //Perform action based on error
            });
    }
    return (
        <div className='UNEW'>
            <div className='BLUR' onClick={handler} ></div>
            <div className='ACCONTAINER' style={{ left: 270 }}>
                <div className='FORM'>
                    <form onSubmit={handleNewCustomer}>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label html="Name">Name</label>
                                <input type="text" className="form-control" id="Name" placeholder="Enter Name" />
                            </div>
                            <div className="form-group col-md-6">
                                <label html="Age">Age</label>
                                <input type="text" className="form-control" id="Age" placeholder="Enter Age" />
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
                            <div className="form-group col-md-6">
                                <label html="Password">Password</label>
                                <input type="text" className="form-control" id="Password" placeholder="Enter Password" />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary GRADIENT">Create Customer Account</button>
                    </form>
                </div>
                <img className="CLOSEIMAGE" onClick={handler} src="/close.png" />
            </div>
        </div >

    )
}
export default CNew;