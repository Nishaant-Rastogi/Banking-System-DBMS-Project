import React, { useState } from "react";

function customcard({ data }) {
    const handler = (i) => { console.log(i); }
    const hashtag = "#H";
    const heading = "H";
    let id = 0;
    return (
        <div className="CUSTOMCARDT" id="accordion">
            {data[0] == null ? null : data[0].map((accoundata) => (
                <div className="card CARD">
                    {handler(id)}
                    {handler(hashtag)}
                    {handler(hashtag.concat(id))}
                    <div className="card-header COL" id="HeadingTwO">
                        <button className="btn btn-link BUTTON" data-toggle="collapse" data-target={hashtag.concat(id).toString()} aria-expanded="true" aria-controls="collapseOne">
                            <div className="DATA ACCOUNT">
                                <div className="HEAD HEAD1">
                                    Payment ID:
                                </div>
                                <div className="VALUE">
                                    {accoundata.Payment_ID}
                                </div>
                            </div>
                            <div className="DATA BALANCE">
                                <div className="HEAD">
                                    Amount:
                                </div>
                                <div id={accoundata.Amount > 0 ? "PROCESSED" : "FAILED"} className="VALUE">
                                    {accoundata.Amount > 0 ? accoundata.Amount : accoundata.Amount * -1}
                                </div>
                            </div>
                            <div className="DATA STATUS">
                                <div className="HEAD">
                                    Status:
                                </div>
                                <div id={accoundata.Status} className="VALUE">
                                    {accoundata.Status}
                                </div>

                            </div>
                        </button>
                    </div>
                    <div id={heading.concat(id++).toString()} className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                        <div className="card-body CBODY">
                            <div className="DATA FROM">
                                <div className="HEAD">
                                    FROM:
                                </div>
                                <div className="VALUE">
                                    123456789
                                </div>
                            </div>
                            <div className="DATA TO">
                                <div className="HEAD">
                                    TO:
                                </div>
                                <div className="VALUE">
                                    XDXDXDXDXXDXD
                                </div>
                            </div>
                            <div className="DATA DATE">
                                <div className="HEAD">
                                    Date :
                                </div>
                                <div className="VALUE">
                                    {accoundata.Date}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

function CardT({ data }) {
    return (
        <>
            {data == null ?
                <div className="CUSTOMCARD" id="accordion">
                    <div className="card CARD">
                        <div className="card-header COL" id="headingOne"> No Transactions
                        </div>
                    </div>
                </div> : customcard({ data })}
        </>
    );
}

export default CardT;