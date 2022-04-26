import React, { useState } from "react";
import TableAccount from "./TableAccount";


function customcard({ AccountData }) {
    const handler = (i) => { console.log(i); }

    const hashtag = "#H";
    const heading = "H";
    let id = 0;
    return (
        <div className="CUSTOMCARDA" id="accordion">
            {AccountData[0] == null ? null : AccountData[0].map((accoundata) => (
                <div key={id} className="card CARD">
                    <div className="card-header COL" id="HeadingTwO">
                        <button className="btn btn-link BUTTON" data-toggle="collapse" data-target={hashtag.concat(id).toString()} aria-expanded="true" aria-controls="collapseOne">
                            <div className="DATA ACCOUNT">
                                <div className="HEAD HEAD1">
                                    Customer ID :
                                </div>
                                <div className="VALUE">
                                    {accoundata.Customer_ID}
                                </div>
                            </div>
                            <div className="DATA BALANCE">
                                <div className="HEAD">
                                    Name :
                                </div>
                                <div className="VALUE">
                                    {accoundata.Name}
                                </div>
                            </div>
                            <div className="DATA STATUS">
                                <div className="HEAD">
                                    Contact No.:
                                </div>
                                <div className="VALUE">
                                    {accoundata.ContactNo}
                                </div>

                            </div>
                        </button>
                    </div>
                    <div id={heading.concat(id).toString()} className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                        <div className="card-body CBODY">
                            <TableAccount AcData={AccountData[1][id]} AccountNum={AccountData[1][id++].AccountNo} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}






function CardC({ AccountData }) {
    const handler = (i) => { console.log(i); }
    const hashtag = "#H";
    const heading = "H";
    let id = 0;
    return (
        <>
            {AccountData == null ?
                <div className="CUSTOMCARD" id="accordion">
                    <div className="card CARD">
                        <div className="card-header COL" id="headingOne"> No Savings Account {console.log(AccountData)}
                        </div>
                    </div>
                </div> : customcard({ AccountData })}
        </>
    );
}

export default CardC;