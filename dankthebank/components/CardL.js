import React, { useState } from "react";

function CardL(props) {

    return (
        <div className="CUSTOMCARD" id="accordion">
            <div className="card CARD">
                <div className="card-header COL" id="headingOne">
                    <button className="btn btn-link BUTTON" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <div className="DATA ACCOUNT">
                            <div className="HEAD">
                                Loan Id:
                            </div>
                            <div className="VALUE">
                                123456789
                            </div>
                        </div>
                        <div className="DATA BALANCE">
                            <div className="HEAD">
                                Amount:
                            </div>
                            <div className="VALUE">
                                120000<image src="/greenup.png" className="VALUEIMG" />
                                {/*<image src="/reddown.png" className="VALUEIMG"/>*/}
                            </div>
                        </div>
                        <div className="DATA STATUS">
                            <div className="HEAD">
                                Status:
                            </div>
                            <div id="FAILURE" className="VALUE">
                                PENDING
                            </div>
                            {/*
                        <div id="FAILURE" className="VALUE">
                            FAILED
                        </div>
                        */}
                        </div>
                    </button>
                </div>
                <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                    <div className="card-body CBODY">
                        <div className="DATA FROM">
                            <div className="HEAD">
                                Rate of Interest:
                            </div>
                            <div className="VALUE">
                                6%
                            </div>
                        </div>
                        <div className="DATA TO">
                            <div className="HEAD">
                                Term:
                            </div>
                            <div className="VALUE">
                                3 years
                            </div>
                        </div>
                        <div className="DATA DATE">
                            <div className="HEAD">
                                Start Date:
                            </div>
                            <div className="VALUE">
                                1 April 2020
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header COL" id="headingTwo">
                    <button className="btn btn-link BUTTON" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseOne">
                        <div className="DATA ACCOUNT">
                            <div className="HEAD">
                                Loan ID:
                            </div>
                            <div className="VALUE">
                                123456789
                            </div>
                        </div>
                        <div className="DATA BALANCE">
                            <div className="HEAD">
                                Amount:
                            </div>
                            <div className="VALUE">
                                150000<image src="/greenup.png" className="VALUEIMG" />
                                {/*<image src="/reddown.png" className="VALUEIMG"/>*/}
                            </div>
                        </div>
                        <div className="DATA STATUS">
                            <div className="HEAD">
                                Status:
                            </div>
                            {/* <div id="SUCCESS" className="VALUE">
                            Successful
                        </div> */}
                            <div id="SUCCESS" className="VALUE">
                                PAID
                            </div>

                        </div>
                    </button>
                </div>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                    <div className="card-body CBODY">
                        <div className="DATA FROM">
                            <div className="HEAD">
                                Rate of Interest:
                            </div>
                            <div className="VALUE">
                                3%
                            </div>
                        </div>
                        <div className="DATA TO">
                            <div className="HEAD">
                                Term:
                            </div>
                            <div className="VALUE">
                                2 years
                            </div>
                        </div>
                        <div className="DATA DATE">
                            <div className="HEAD">
                                Start Date:
                            </div>
                            <div className="VALUE">
                                1 February 2018
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardL;