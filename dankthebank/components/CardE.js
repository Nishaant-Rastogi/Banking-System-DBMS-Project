import React, { useState } from "react";

function customcard({EmpData}){
    const handler = (i) => { console.log(i);}
    const hashtag = "#H";
    const heading = "H";
    let id = 0;
    return(
        <div className="CUSTOMCARDE" id="accordion">
            {EmpData.emp == null ? null : EmpData.emp.map((accoundata) => (
                <div className="card CARD">
                <div className="card-header COL" id="HeadingTwO">
                    <button className="btn btn-link BUTTON" data-toggle="collapse" data-target={hashtag.concat(id).toString()} aria-expanded="true" aria-controls="collapseOne">
                        <div className="DATA ACCOUNT">
                            <div className="HEAD HEAD1">
                                Name:
                            </div>
                            <div className="VALUE NAME">
                                {accoundata.Name}
                            </div>
                        </div>
                        <div className="DATA BALANCE">
                            <div className="HEAD">
                                Employee ID:
                            </div>
                            <div className="VALUE">
                                {accoundata.Employee_ID}
                            </div>
                        </div>
                        <div className="DATA STATUS">
                            <div className="HEAD">
                                Designation :
                            </div>
                            <div className="VALUE">
                                {accoundata.Designation}
                            </div>

                        </div>
                    </button>
                </div>
                <div id={heading.concat(id++).toString()} className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                    <div className="card-body CBODY">
                        <div className="DATA FROM">
                            <div className="HEAD">
                                PAN :
                            </div>
                            <div className="VALUE">
                            {accoundata.PAN}
                            </div>
                        </div>
                        <div className="DATA TO">
                            <div className="HEAD">
                                Salary :
                            </div>
                            <div className="VALUE">
                            {accoundata.Salary}
                            </div>
                        </div>
                        <div className="DATA DATE">
                            <div className="HEAD">
                                Joining Date :
                            </div>
                            <div className="VALUE">
                                {accoundata.Joining_Date}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            ))}
        </div>
    )
}



function CardE({ EmpData }) {
    return (
        <>
        {console.log(EmpData)}
        {EmpData == null ? 
        <div className="CUSTOMCARDE" id="accordion">
        <div className="card CARD">
            <div className="card-header COL" id="headingOne"> No Employees 
            </div>
        </div>
        </div> : <div>{ customcard({ EmpData }) }
        {console.log("here")}
        </div>}
        </>
    );
}

export default CardE;