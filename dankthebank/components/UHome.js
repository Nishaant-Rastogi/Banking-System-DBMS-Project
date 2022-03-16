import React from 'react';
import Userbar from './Userbar';

function UHome() {
  return (
    <div className='UHOME'>
        <Userbar/>
        <div className="UHCONTAINER1">
          <div className='UHFLEX1'>
            <div className='ROW ROW1'>
              Services For You
            </div>
            <div className='ROW ROW2'>
              <div className='COL'>
                <div className='IMGCONTAINER'>
                <img className='IMG ACIMG' src="account.png"/>
                </div>
                <div className='DATA'> 
                  <div className = 'HEADING'> ACCOUNTS</div>
                  <div className = 'SUBHEADING'>View All Your Account Details</div>
                  <div className = 'LINK'><a href="#">View</a></div>
                </div>
              </div>
              <div className='COL'>
                <div className='IMGCONTAINER'>
                <img className='IMG ACIMG' src="loan.png"/>
                </div>
                <div className='DATA'> 
                  <div className = 'HEADING'> LOANS</div>
                  <div className = 'SUBHEADING'>View All Your Loan Details</div>
                  <div className = 'LINK'><a href="#">View</a></div>
                </div>
              </div>
            </div>
            <div className='ROW ROW3 '>
            <div className='COL'>
                <div className='IMGCONTAINER'>
                <img className='IMG ACIMG' src="vault.png"/>
                </div>
                <div className='DATA'> 
                  <div className = 'HEADING'> TRANSACTIONS</div>
                  <div className = 'SUBHEADING'>View Transaction History</div>
                  <div className = 'LINK'><a href="#">View</a></div>
                </div>
              </div>
              <div className='COL'>
                <div className='IMGCONTAINER'>
                <img className='IMG ACIMG' src="questions.png"/>
                </div>
                <div className='DATA'> 
                  <div className = 'HEADING'> REQUESTS</div>
                  <div className = 'SUBHEADING'>View All Your Requests</div>
                  <div className = 'LINK'><a href="#">View</a></div>
                </div>
              </div>
            </div>
            
          </div>
          <div className='UHFLEX2'>
          <img className="ACIMG" src="account.png"/>
            LOAN
          </div>
          <div className='UHFLEX3'>
            FLEX3
          </div>  
        </div>
    </div>
  )
}

export default UHome