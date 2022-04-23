import React, { useEffect } from 'react';
import axios from 'axios';

function EditCustomer(props) {
    const handler = () => { props.setEdit(false) };

    useEffect(() => {
        handler;
    }, []);
    const handleEditCustomer = (e) => {
        e.preventDefault();
        const data = {
            Name: e.target.Name.value,
            Age: e.target.Age.value,
            Salary: e.target.Salary.value,
            PAN: e.target.PAN.value,
            Joining_Date: e.target.Joining_Date.value,
            Password: e.target.Password.value,
            Designation: e.target.Designation.value,
            Branch_ID: e.target.Branch_ID.value
        }
        axios.post('http://localhost:5000/editCustomer', data)
            .then(function (response) {
                console.log(response);
                if (response.data === "Success") {
                    alert("Customer Updated");
                    props.setEdit(false)
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
                    <form onSubmit={handleEditCustomer}>
                        <div className="form-group">
                            <label html="Customer_ID">Customer ID</label>
                            <input type="text" className="form-control" id="Customer_ID" placeholder="Enter Customer ID" />
                        </div>
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
                        <button type="submit" className="btn btn-primary GRADIENT">Save Customer Details</button>
                    </form>
                </div>
                <img className="CLOSEIMAGE" onClick={handler} src="/close.png" />
            </div>
        </div>

    )
}

export default EditCustomer