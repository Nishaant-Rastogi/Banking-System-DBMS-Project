import React, { useState } from "react";


function customcard({ Loans }) {
    const handler = (i) => { console.log(i); }
    const hashtag = "#H";
    const heading = "H";
    let id = 0;
    return (
        <div className="CUSTOMCARDT" id="accordion">
            {Loans[0] == null ? null : Loans[0].map((accoundata) => (
                <div key={id} className="card CARD">
                    <div className="card-header COL" id="HeadingTwO">
                        <button className="btn btn-link BUTTON" data-toggle="collapse" data-target={hashtag.concat(id).toString()} aria-expanded="true" aria-controls="collapseOne">
                            <div className="DATA ACCOUNT">
                                <div className="HEAD HEAD1">
                                    Loan ID:
                                </div>
                                <div className="VALUE">
                                    {accoundata.Loan_ID}
                                </div>
                            </div>
                            <div className="DATA BALANCE">
                                <div className="HEAD">
                                    Amount:
                                </div>
                                <div className="VALUE">
                                    {accoundata.Amount}
                                </div>
                            </div>
                            <div className="DATA STATUS">
                                <div className="HEAD">
                                    Status:
                                </div>
                                <div id="NULL" className="VALUE">
                                    {accoundata.Status}
                                </div>

                            </div>
                        </button>
                    </div>
                    <div id={heading.concat(id++).toString()} className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                        <div className="card-body CBODY">
                            <div className="DATA FROM">
                                <div className="HEAD">
                                    Rate of Interest :
                                </div>
                                <div className="VALUE">
                                    {accoundata.InterestRate}
                                </div>
                            </div>
                            <div className="DATA TO">
                                <div className="HEAD">
                                    Term :
                                </div>
                                <div className="VALUE">
                                    {accoundata.Term}
                                </div>
                            </div>
                            <div className="DATA DATE">
                                <div className="HEAD">
                                    Start Date :
                                </div>
                                <div className="VALUE">
                                    {accoundata.StartDate}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

function CardL({ Loans }) {

    return (
        <>
            {Loans == null ?
                <div className="CUSTOMCARD" id="accordion">
                    <div className="card CARD">
                        <div className="card-header COL" id="headingOne"> No Loans
                        </div>
                    </div>
                </div> : customcard({ Loans })}
        </>
    );
}

export default CardL;