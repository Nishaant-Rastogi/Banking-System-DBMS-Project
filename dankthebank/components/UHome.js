import React from 'react';
import Userbar from './Userbar';
import AdCarousel from './AdCarousel';
import Link from 'next/link';
import UNew from './UNew';
import NewLoan from './NewLoan';
import LoanPayment from './LoanPayment';

function UHome() {
  const [account, setAccount] = React.useState(false);
  const [loan, setLoan] = React.useState(false);
  const [loanPayment, setLoanPayment] = React.useState(false);

  const handleNewAccount = () => {
    setAccount(true);
  };
  const handleNewLoan = () => {
    setLoan(true);
  };
  const handleNewLoanPayment = () => {
    setLoanPayment(true);
  };
  return (
    <div className='UHOME'>
      {account ? <UNew setAccount={setAccount} /> : null}
      {loan ? <NewLoan setLoan={setLoan} /> : null}
      {loanPayment ? <LoanPayment setLoanPayment={setLoanPayment} /> : null}
      <Userbar />
      <AdCarousel />
      <div className="UHCONTAINER1">
        {/*...............................................................................................................*/}
        <div className='UHFLEX1'>
          <div className='ROW ROW2'>
            <Link href="/User/savings">
              <div className='COL'>
                <div className='IMGCONTAINER'>
                  <img className='IMG ACIMG' src="/save.png" />
                </div>
                <div className='DATA'>
                  <div className='HEADING'>SAVINGS ACCOUNT</div>
                  <div className='SUBHEADING'>View All Your Account Details</div>
                </div>
              </div>
            </Link>
            <Link href="/User/current">
              <div className='COL'>
                <div className='IMGCONTAINER'>
                  <img className='IMG ACIMG' src="/business.png" />
                </div>
                <div className='DATA'>
                  <div className='HEADING'>CURRENT ACCOUNT</div>
                  <div className='SUBHEADING'>View All Your Account Details</div>
                </div>
              </div>
            </Link>
          </div>
          <div className='ROW ROW3 '>
            <Link href="/User/transactions">
              <div className='COL'>
                <div className='IMGCONTAINER'>
                  <img className='IMG ACIMG' src="/transaction.png" />
                </div>
                <div className='DATA'>
                  <div className='HEADING'> TRANSACTIONS</div>
                  <div className='SUBHEADING'>View Transaction History</div>
                </div>
              </div>
            </Link>
            <Link href="/User/loan">
              <div className='COL'>
                <div className='IMGCONTAINER'>
                  <img className='IMG ACIMG' src="/loan.png" />
                </div>
                <div className='DATA'>
                  <div className='HEADING'> LOANS</div>
                  <div className='SUBHEADING'>View All Your Loan Details</div>
                </div>
              </div>
            </Link>
          </div>

        </div>
        <div className='UHFLEX2'>
          <div className='ROW'>
            <div className='COL COL1' onClick={handleNewAccount}>
              <div className='IMGCONTAINER'>
                <img className='IMG ACIMG' src="/add-user.png" />
              </div>
              <div className='DATA'>
                <div className='LINK'>
                  <div className='HEADING'>NEW ACCOUNT</div>
                  <div className='SUBHEADING'>Create New Account</div>
                </div>
              </div>
            </div>
            <div className='COL COL2' onClick={handleNewLoan}>
              <div className='IMGCONTAINER'>
                <img className='IMG ACIMG' src="/save-money.png" />
              </div>
              <div className='DATA'>
                <div className='HEADING'>NEW LOAN</div>
                <div className='SUBHEADING'>Apply For New Loan</div>
              </div>
            </div>
          </div>
        </div>
        <div className='UHFLEX3' onClick={handleNewLoanPayment}>
          <div className='ROW ROW1'>
            Loan Payment
          </div>
          <div className='ROW ROW2'>
            <div className='COL'>
              <div className='IMGCONTAINER'>
                <img className='IMG ACIMG' src="/insurance.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default UHome;