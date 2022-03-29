import React from 'react';
import Userbar from './Userbar';
import AdCarousel from './AdCarousel';
import Link from 'next/link';

function UHome() {
  const [index, setIndex] = React.useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className='UHOME'>
        <Userbar/>
        <AdCarousel/>
        <div className="UHCONTAINER1">
          {/*...............................................................................................................*/}
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
                  <div className = 'HEADING'>SAVINGS ACCOUNT</div>
                  <div className = 'SUBHEADING'>View All Your Account Details</div>
                  <div className = 'LINK'><Link href="/User/savings">
                        <a>View</a>
                  </Link> </div>
                </div>
              </div>
              <div className='COL'>
                <div className='IMGCONTAINER'>
                <img className='IMG ACIMG' src="questions.png"/>
                </div>
                <div className='DATA'> 
                  <div className = 'HEADING'>CURRENT ACCOUNT</div>
                  <div className = 'SUBHEADING'>View All Your Account Details</div>
                  <div className = 'LINK'><Link href="/User/current">
                        <a>View</a>
                  </Link> </div>
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
                  <div className = 'LINK'><Link href="/User/transactions">
                        <a>View</a>
                  </Link> </div>
                </div>
              </div>
              <div className='COL'>
                <div className='IMGCONTAINER'>
                <img className='IMG ACIMG' src="loan.png"/>
                </div>
                <div className='DATA'> 
                  <div className = 'HEADING'> LOANS</div>
                  <div className = 'SUBHEADING'>View All Your Loan Details</div>
                  <div className = 'LINK'><Link href="/User/loan">
                        <a>View</a>
                  </Link> </div>
                </div>
              </div>
            </div>
            
          </div>
          <div className='UHFLEX2'>
          <div className='ROW'>
              <div className='COL'>
                <div className='IMGCONTAINER'>
                <img className='IMG ACIMG' src="account.png"/>
                </div>
                <div className='DATA'> 
                  <div className = 'HEADING'>New Account</div>
                  <div className = 'SUBHEADING'>Create New Account</div>
                </div>
              </div>
              <div className='COL'>
                <div className='IMGCONTAINER'>
                <img className='IMG ACIMG' src="questions.png"/>
                </div>
                <div className='DATA'> 
                  <div className = 'HEADING'>New Loan</div>
                  <div className = 'SUBHEADING'>Apply For New Loan</div>
                </div>
              </div>
            </div>
          </div>
          <div className='UHFLEX3'>
          <div className='ROW ROW2'>
              <div className='COL'>
                <div className='IMGCONTAINER'>
                <img className='IMG ACIMG' src="account.png"/>
                </div>
                <div className='DATA'> 
                  <div className = 'HEADING'>Loan Payment</div>
                  <div className = 'SUBHEADING'>Pay Your Dues</div>
                </div>
              </div>
            </div>
          </div>  
        </div>
    </div>
  )
}

export default UHome