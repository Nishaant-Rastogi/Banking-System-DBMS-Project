import React,{useEffect , useState} from 'react';
import Adminbar from './Adminbar';
import AdCarousel from './AdCarousel';
import Link from 'next/link';
import CNew from './CNew';
import AdminNewLoan from './AdminNewLoan';
import ENew from './ENew';
import EditCustomer from './EditCustomer';


function AHome() {
  const [account, setAccount] = React.useState(false);
  const [loan, setLoan] = React.useState(false);
  const [employee, setEmployee] = React.useState(false);
  const [edit, setEdit] = React.useState(false);
  const [Designation, setDesignation] = React.useState('');
  const [count, setCount] = React.useState(0);
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
  useEffect(() => {
    const loggedInAdminData = localStorage.getItem("adminData");
    if(count<=25){
      setCount(count+1);
    }
    if (loggedInAdminData) {
      const foundAdminData = JSON.parse(loggedInAdminData);
      setDesignation(foundAdminData.Designation);
    } else {
      setDesignation('');
    }
  }, [count]);
  return (
    <div className='UHOME' >
      {console.log(Designation)}
      {account ? <CNew setAccount={setAccount} /> : null}
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
            { (Designation === "Branch Manager") ?
              <div className='COL' onClick={handleNewEmployee}>
                <div className='IMGCONTAINER'>
                  <img className='IMG ACIMG' src="/time-management.png" />
                </div>
                <div className='DATA'>
                  <div className='HEADING'>NEW EMPLOYEES</div>
                  <div className='SUBHEADING'>Add New Branch Employees</div>
                </div>
              </div> : null}
          </div>
          <div className='ROW ROW3 '>
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
        {(Designation === "Customer Service") ? null:
         <div className='UHFLEX2'>
          <div className='ROW'>
            {((Designation === "Branch Manager") ||(Designation === "Account Manager")) ? <div className='COL COL1' onClick={handleNewAccount}>
              <div className='IMGCONTAINER'>
                <img className='IMG ACIMG' src="/add-user.png" />
              </div>
              <div className='DATA'>
                <div className='LINK'>
                  <div className='HEADING'>NEW CUSTOMER</div>
                  <div className='SUBHEADING'>Add New Customer</div>
                </div>
              </div>
            </div> : null}
            {((Designation === "Branch Manager") || (Designation === "Service Manager")) ?
              <div className='COL COL2' onClick={handleNewLoan}>
                <div className='IMGCONTAINER'>
                  <img className='IMG ACIMG' src="/save-money.png" />
                </div>
                <div className='DATA'>
                  <div className='HEADING'>NEW LOAN</div>
                  <div className='SUBHEADING'>Apply For New Loan</div>
                </div>
              </div> : null}
          </div>
        </div> }
        {((Designation === "Branch Manager") || (Designation === "Service Manager") || (Designation === "Customer Service")) ?
          <div className='UHFLEX3' onClick={handleNewEdit}>
            <div className='ROW ROW1'>
              EDIT CUSTOMER
            </div>
            <div className='ROW ROW2'>
              <div className='COL'>
                <div className='IMGCONTAINER'>
                  <img className='IMG ACIMG' src="/resume.png" />
                </div>
              </div>
            </div>
          </div> : null}
      </div>
    </div >
  )
}

export default AHome;