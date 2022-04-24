import React, { useEffect } from 'react';
import axios from 'axios';
import swal from 'sweetalert';

function ENew(props) {
    const handler = () => { props.setEmployee(false) };

    useEffect(() => {
        handler;
    }, []);
    const handleNewEmployee = (e) => {
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
        axios.post('http://localhost:5000/newEmployee', data)
            .then(function (response) {
                console.log(response);
                if (response.data === "Success") {
                    swal("Welcome New Employee !", "New Employee Added !", "success");
                    props.setEmployee(false)
                } else {
                    swal("Invalid Data Entry !", "Try Again !", "error");
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div className='ENEW'>
            <div className='BLUR' onClick={handler} ></div>
            <div className='ACCONTAINER'>
                <div className='FORM'>
                    <form onSubmit={handleNewEmployee}>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="Name">Name</label>
                                <input type="text" className="form-control" id="Name" placeholder="Enter Name" />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="Age">Age</label>
                                <input type="text" className="form-control" id="Age" placeholder="Enter Age" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="PAN">PAN</label>
                            <input type="text" className="form-control" id="PAN" placeholder="Enter PAN" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Salary">Salary</label>
                            <input type="text" className="form-control" id="Salary" placeholder="Enter Salary" />
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="Designation">Designation</label>
                                <input type="text" className="form-control" id="Designation" placeholder="Enter Designation" />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="Branch_ID">Branch ID</label>
                                <input type="text" className="form-control" id="Branch_ID" placeholder="Enter Branch ID" />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="Joining_Date">Joining Date</label>
                                <input type="text" className="form-control" id="Joining_Date" placeholder="Enter Joining Date" />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="Password">Password</label>
                                <input type="text" className="form-control" id="Password" placeholder="Enter Password" />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary GRADIENT">Add New Employee</button>
                    </form>
                </div>
                <img className="CLOSEIMAGE" onClick={handler} src="/close.png" />
            </div>
        </div>

    )
}

export default ENew