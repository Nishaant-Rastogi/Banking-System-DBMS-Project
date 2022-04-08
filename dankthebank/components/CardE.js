import React, { useState } from "react";
import Table from "./Table";

function CardE(props) {
    return (
        <div className="CUSTOMCARD" id="accordion">
            <div className="card CARD">
                <div className="card-header COL" id="headingOne">
                    <button className="btn btn-link BUTTON" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <div className="DATA ACCOUNT">
                            <div className="HEAD">
                                Employee ID:
                            </div>
                            <div className="VALUE">
                                123456789
                            </div>
                        </div>
                        <div className="DATA BALANCE">
                            <div className="HEAD">
                                Name:
                            </div>
                            <div className="VALUE">
                                Mr. ABCDE<image src="/greenup.png" className="VALUEIMG" />
                                {/*<image src="/reddown.png" className="VALUEIMG"/>*/}
                            </div>
                        </div>
                        <div className="DATA STATUS">
                            <div className="HEAD">
                                Status:
                            </div>
                            <div id="SUCCESS" className="VALUE">
                                Active
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
                                Designation:
                            </div>
                            <div className="VALUE">
                                Branch Manager
                            </div>
                        </div>
                        <div className="DATA TO">
                            <div className="HEAD">
                                Salary:
                            </div>
                            <div className="VALUE">
                                200000
                            </div>
                        </div>
                        <div className="DATA DATE">
                            <div className="HEAD">
                                Joining Date:
                            </div>
                            <div className="VALUE">
                                1 April 2017
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
                                Employee ID:
                            </div>
                            <div className="VALUE">
                                123456789
                            </div>
                        </div>
                        <div className="DATA BALANCE">
                            <div className="HEAD">
                                Name:
                            </div>
                            <div className="VALUE">
                                Mr. XYZA<image src="/greenup.png" className="VALUEIMG" />
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
                            <div id="FAILURE" className="VALUE">
                                Deactivated
                            </div>

                        </div>
                    </button>
                </div>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                    <div className="card-body CBODY">
                        <div className="DATA FROM">
                            <div className="HEAD">
                                Designation:
                            </div>
                            <div className="VALUE">
                                Customer Service Manager
                            </div>
                        </div>
                        <div className="DATA TO">
                            <div className="HEAD">
                                Salary:
                            </div>
                            <div className="VALUE">
                                20000
                            </div>
                        </div>
                        <div className="DATA DATE">
                            <div className="HEAD">
                                Joining Date:
                            </div>
                            <div className="VALUE">
                                1 April 2020
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardE;