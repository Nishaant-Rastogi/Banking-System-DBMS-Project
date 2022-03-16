import React from 'react';
import Userbar from './Userbar';

function UHome() {
  return (
    <div className='UHOME'>
        <Userbar/>
        {/* <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form> */}
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
                  <div className = 'HEADING'> LOAN</div>
                  <div className = 'SUBHEADING'>View ALl Your Loan Details</div>
                  <div className = 'LINK'><a href="#">View</a></div>
                </div>
              </div>
              <div className='COL'>
                <div className='IMGCONTAINER'>
                <img className='IMG ACIMG' src="account.png"/>
                </div>
                <div className='DATA'> 
                  <div className = 'HEADING'> LOAN</div>
                  <div className = 'SUBHEADING'>View ALl Your Loan Details</div>
                  <div className = 'LINK'><a href="#">View</a></div>
                </div>
              </div>
            </div>
            <div className='ROW ROW3 '>
            <div className='COL'>
                <div className='IMGCONTAINER'>
                <img className='IMG ACIMG' src="account.png"/>
                </div>
                <div className='DATA'> 
                  <div className = 'HEADING'> LOAN</div>
                  <div className = 'SUBHEADING'>View ALl Your Loan Details</div>
                  <div className = 'LINK'><a href="#">View</a></div>
                </div>
              </div>
              <div className='COL'>
                <div className='IMGCONTAINER'>
                <img className='IMG ACIMG' src="account.png"/>
                </div>
                <div className='DATA'> 
                  <div className = 'HEADING'> LOAN</div>
                  <div className = 'SUBHEADING'>View ALl Your Loan Details</div>
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