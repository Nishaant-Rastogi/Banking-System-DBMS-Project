import React, { useEffect, useState } from 'react';
import AdCarousel from './AdCarousel';
import Link from 'next/link';
import AdminNewLoan from './AdminNewLoan';
import ENew from './ENew';
import EditCustomer from './EditCustomer';


function AManager() {
  const [account, setAccount] = React.useState(false);
  const [loan, setLoan] = React.useState(false);
  const [employee, setEmployee] = React.useState(false);
  const [edit, setEdit] = React.useState(false);
  const handleNewEmployee = () => {
    setEmployee(true);
  };
  const handleNewAccount = () => {
    setAccount(true);
  };
  const handleNewLoan = () => {
    setLoan(true);
  };
  const handleNewEdit = () => {
    setEdit(true);
  }

  return (
    <div className='UHOME AM' >
      {loan ? <AdminNewLoan setLoan={setLoan} /> : null}
      {employee ? <ENew setEmployee={setEmployee} /> : null}
      {edit ? <EditCustomer setEdit={setEdit} /> : null}
      <AdCarousel />
      <div className="UHCONTAINER1">
        {/*...............................................................................................................*/}
        <div className='UHFLEX1'>
          <div className='ROW ROW2'>
            <Link href="/Admin/employees">
              <div className='COL'>
                <div className='IMGCONTAINER'>
                  <img className='IMG ACIMG' src="/businessman.png" />
                </div>
                <div className='DATA'>
                  <div className='HEADING'>EMPLOYEES</div>
                  <div className='SUBHEADING'>View All Branch Employee</div>
                </div>
              </div>
            </Link>
            <Link href="/Admin/transactions">
              <div className='COL'>
                <div className='IMGCONTAINER'>
                  <img className='IMG ACIMG' src="/transaction.png" />
                </div>
                <div className='DATA'>
                  <div className='HEADING'>TRANSACTIONS</div>
                  <div className='SUBHEADING'>View Transaction History</div>
                </div>
              </div>
            </Link>
            <Link href="/Admin/loans">
              <div className='COL'>
                <div className='IMGCONTAINER'>
                  <img className='IMG ACIMG' src="/loan.png" />
                </div>
                <div className='DATA'>
                  <div className='HEADING'>LOANS</div>
                  <div className='SUBHEADING'>View All Branch Loans</div>
                </div>
              </div>
            </Link>
          </div>

        </div>
        <div className='UHFLEX2'>
          <div className='ROW'>
            <Link href="/Admin/customers">
              <div className='COL COL1'>
                <div className='IMGCONTAINER'>
                  <img className='IMG ACIMG' src="/add-user.png" />
                </div>
                <div className='DATA'>
                  <div className='LINK'>
                    <div className='HEADING'>CUSTOMERS</div>
                    <div className='SUBHEADING'>View Branch Customers</div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div >
  )
}

export default AManager;