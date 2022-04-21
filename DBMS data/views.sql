use DANKTHEBANK;
drop view if exists Branch_Manager_View_1001;
drop view if exists Branch_Manager_View_1002;
drop view if exists Branch_Manager_View_1003;
drop view if exists Branch_Manager_View_1004;
drop view if exists Branch_Manager_View_1005;
drop view if exists Manager_Account_View_1001;
drop view if exists Manager_Account_View_1002;
drop view if exists Manager_Account_View_1003;
drop view if exists Manager_Account_View_1004;
drop view if exists Manager_Account_View_1005;

create View Branch_Manager_View_1001 as 
(select * FROM Employees E where substring(E.Employee_ID,1,4) = '1001');
create View Branch_Manager_View_1002 as 
(select * FROM Employees E where substring(E.Employee_ID,1,4) = '1002');
create View Branch_Manager_View_1003 as 
(select * FROM Employees E where substring(E.Employee_ID,1,4) = '1003');
create View Branch_Manager_View_1004 as 
(select * FROM Employees E where substring(E.Employee_ID,1,4) = '1004');
create View Branch_Manager_View_1005 as 
(select * FROM Employees E where substring(E.Employee_ID,1,4) = '1005');

drop view if exists Customer_Branch_View;
drop view if exists Manager_Customer_View;
create View Customer_Branch_View as 
(select B.Address, B.Branch_Name, B.Branch_ID, E.Name, E.Designation, P.PhoneNo FROM Branches B, Employees E, Employee_phone P where substring(E.Employee_ID,1,4) = cast(Branch_ID as CHAR) AND E.Employee_ID = P.Employee_ID AND substring(P.PhoneNo,1,3) = '011');
create View Manager_Customer_View as
(select C.Customer_ID, C.Name, C.ContactNo, concat(concat(concat(concat(C.HouseNo, ' '), C.Locality), ' '), City) as Address from Customers C);

create View Manager_Account_View_1001 as 
(select * FROM Accounts A where substring(A.AccountNo,1,4) = '1001');
create View Manager_Account_View_1002 as 
(select * FROM Accounts A where substring(A.AccountNo,1,4) = '1002');
create View Manager_Account_View_1003 as 
(select * FROM Accounts A where substring(A.AccountNo,1,4) = '1003');
create View Manager_Account_View_1004 as 
(select * FROM Accounts A where substring(A.AccountNo,1,4) = '1004');
create View Manager_Account_View_1005 as 
(select * FROM Accounts A where substring(A.AccountNo,1,4) = '1005');

drop view if exists Branch_Transaction_1001;
drop view if exists Branch_Transaction_1002;
drop view if exists Branch_Transaction_1003;
drop view if exists Branch_Transaction_1004;
drop view if exists Branch_Transaction_1005;
drop view if exists Loan_Branch_1001;
drop view if exists Loan_Branch_1002;
drop view if exists Loan_Branch_1003;
drop view if exists Loan_Branch_1004;
drop view if exists Loan_Branch_1005;

create View Branch_Transaction_1001 as 
(select * from Transactions T where(substring(T.Payment_ID,1,4) = '1001' OR substring(T.Payment_ID,11,12) = '01'));
create View Branch_Transaction_1002 as 
(select * from Transactions T where(substring(T.Payment_ID,1,4) = '1002' OR substring(T.Payment_ID,11,12) = '02'));
create View Branch_Transaction_1003 as 
(select * from Transactions T where(substring(T.Payment_ID,1,4) = '1003' OR substring(T.Payment_ID,11,12) = '03'));
create View Branch_Transaction_1004 as 
(select * from Transactions T where(substring(T.Payment_ID,1,4) = '1004' OR substring(T.Payment_ID,11,12) = '04'));
create View Branch_Transaction_1005 as 
(select * from Transactions T where(substring(T.Payment_ID,1,4) = '1005' OR substring(T.Payment_ID,11,12) = '05'));

create View Loan_Branch_1001 as 
(select * from Loans L where(substring(L.Loan_ID,1,4) = '1001'));
create View Loan_Branch_1002 as 
(select * from Loans L where(substring(L.Loan_ID,1,4) = '1002'));
create View Loan_Branch_1003 as 
(select * from Loans L where(substring(L.Loan_ID,1,4) = '1003'));
create View Loan_Branch_1004 as 
(select * from Loans L where(substring(L.Loan_ID,1,4) = '1004'));
create View Loan_Branch_1005 as 
(select * from Loans L where(substring(L.Loan_ID,1,4) = '1005'));

drop view if exists Customer_Branch_1001;
drop view if exists Customer_Branch_1002;
drop view if exists Customer_Branch_1003;
drop view if exists Customer_Branch_1004;
drop view if exists Customer_Branch_1005;

create View Customer_Branch_1001 as 
(select * from Customers C where(substring(C.Customer_ID,1,4) = '1001'));
create View Customer_Branch_1002 as 
(select * from Customers C where(substring(C.Customer_ID,1,4) = '1002'));
create View Customer_Branch_1003 as 
(select * from Customers C where(substring(C.Customer_ID,1,4) = '1003'));
create View Customer_Branch_1004 as 
(select * from Customers C where(substring(C.Customer_ID,1,4) = '1004'));
create View Customer_Branch_1005 as 
(select * from Customers C where(substring(C.Customer_ID,1,4) = '1005'));

create Role Manager;
grant select, create, update on DANKTHEBANK.Loan_Branch_1001 TO 'Manager';
grant select, create, update on DANKTHEBANK.Loan_Branch_1002 TO 'Manager';
grant select, create, update on DANKTHEBANK.Loan_Branch_1003 TO 'Manager';
grant select, create, update on DANKTHEBANK.Loan_Branch_1004 TO 'Manager';
grant select, create, update on DANKTHEBANK.Loan_Branch_1005 TO 'Manager';

grant select, create, update on DANKTHEBANK.Branch_Transaction_1001 TO 'Manager';
grant select, create, update on DANKTHEBANK.Branch_Transaction_1002 TO 'Manager';
grant select, create, update on DANKTHEBANK.Branch_Transaction_1003 TO 'Manager';
grant select, create, update on DANKTHEBANK.Branch_Transaction_1004 TO 'Manager';
grant select, create, update on DANKTHEBANK.Branch_Transaction_1005 TO 'Manager';

grant select, create, update on DANKTHEBANK.Manager_Account_View_1001 TO 'Manager';
grant select, create, update on DANKTHEBANK.Manager_Account_View_1002 TO 'Manager';
grant select, create, update on DANKTHEBANK.Manager_Account_View_1003 TO 'Manager';
grant select, create, update on DANKTHEBANK.Manager_Account_View_1004 TO 'Manager';
grant select, create, update on DANKTHEBANK.Manager_Account_View_1005 TO 'Manager';

grant select, create, update on DANKTHEBANK.Branch_Manager_View_1001 TO 'Manager';
grant select, create, update on DANKTHEBANK.Branch_Manager_View_1002 TO 'Manager';
grant select, create, update on DANKTHEBANK.Branch_Manager_View_1003 TO 'Manager';
grant select, create, update on DANKTHEBANK.Branch_Manager_View_1004 TO 'Manager';
grant select, create, update on DANKTHEBANK.Branch_Manager_View_1005 TO 'Manager';

grant select, create, update on DANKTHEBANK.Customer_Branch_1001 TO 'Manager';
grant select, create, update on DANKTHEBANK.Customer_Branch_1002 TO 'Manager';
grant select, create, update on DANKTHEBANK.Customer_Branch_1003 TO 'Manager';
grant select, create, update on DANKTHEBANK.Customer_Branch_1004 TO 'Manager';
grant select, create, update on DANKTHEBANK.Customer_Branch_1005 TO 'Manager';

create Role Service_Manager;
grant select, update on DANKTHEBANK.Customer_Branch_1001 TO 'Service_Manager';
grant select, update on DANKTHEBANK.Customer_Branch_1002 TO 'Service_Manager';
grant select, update on DANKTHEBANK.Customer_Branch_1003 TO 'Service_Manager';
grant select, update on DANKTHEBANK.Customer_Branch_1004 TO 'Service_Manager';
grant select, update on DANKTHEBANK.Customer_Branch_1005 TO 'Service_Manager';

grant select, create, update on DANKTHEBANK.Loan_Branch_1001 TO 'Service_Manager'; -- trigger 
grant select, create, update on DANKTHEBANK.Loan_Branch_1002 TO 'Service_Manager';
grant select, create, update on DANKTHEBANK.Loan_Branch_1003 TO 'Service_Manager';
grant select, create, update on DANKTHEBANK.Loan_Branch_1004 TO 'Service_Manager';
grant select, create, update on DANKTHEBANK.Loan_Branch_1005 TO 'Service_Manager';

grant select on DANKTHEBANK.Branch_Transaction_1001 TO 'Service_Manager';
grant select on DANKTHEBANK.Branch_Transaction_1002 TO 'Service_Manager';
grant select on DANKTHEBANK.Branch_Transaction_1003 TO 'Service_Manager';
grant select on DANKTHEBANK.Branch_Transaction_1004 TO 'Service_Manager';
grant select on DANKTHEBANK.Branch_Transaction_1005 TO 'Service_Manager';

create Role Account_Manager;
grant select on DANKTHEBANK.Loan_Branch_1001 TO 'Account_Manager'; -- trigger 
grant select on DANKTHEBANK.Loan_Branch_1002 TO 'Account_Manager';
grant select on DANKTHEBANK.Loan_Branch_1003 TO 'Account_Manager';
grant select on DANKTHEBANK.Loan_Branch_1004 TO 'Account_Manager';
grant select on DANKTHEBANK.Loan_Branch_1005 TO 'Account_Manager';

grant select on DANKTHEBANK.Branch_Transaction_1001 TO 'Account_Manager';
grant select on DANKTHEBANK.Branch_Transaction_1002 TO 'Account_Manager';
grant select on DANKTHEBANK.Branch_Transaction_1003 TO 'Account_Manager';
grant select on DANKTHEBANK.Branch_Transaction_1004 TO 'Account_Manager';
grant select on DANKTHEBANK.Branch_Transaction_1005 TO 'Account_Manager';

grant select, create, update on DANKTHEBANK.Manager_Account_View_1001 TO 'Account_Manager';
grant select, create, update on DANKTHEBANK.Manager_Account_View_1002 TO 'Account_Manager';
grant select, create, update on DANKTHEBANK.Manager_Account_View_1003 TO 'Account_Manager';
grant select, create, update on DANKTHEBANK.Manager_Account_View_1004 TO 'Account_Manager';
grant select, create, update on DANKTHEBANK.Manager_Account_View_1005 TO 'Account_Manager';

create Role User;
grant select on DANKTHEBANK.Customer_Branch_1001 TO 'User';
grant select on DANKTHEBANK.Customer_Branch_1002 TO 'User';
grant select on DANKTHEBANK.Customer_Branch_1003 TO 'User';
grant select on DANKTHEBANK.Customer_Branch_1004 TO 'User';
grant select on DANKTHEBANK.Customer_Branch_1005 TO 'User';

grant select, create on DANKTHEBANK.Branch_Transaction_1001 TO 'User';
grant select, create on DANKTHEBANK.Branch_Transaction_1002 TO 'User';
grant select, create on DANKTHEBANK.Branch_Transaction_1003 TO 'User';
grant select, create on DANKTHEBANK.Branch_Transaction_1004 TO 'User';
grant select, create on DANKTHEBANK.Branch_Transaction_1005 TO 'User';

grant select, create on DANKTHEBANK.Loan_Branch_1001 TO 'User';
grant select, create on DANKTHEBANK.Loan_Branch_1002 TO 'User';
grant select, create on DANKTHEBANK.Loan_Branch_1003 TO 'User';
grant select, create on DANKTHEBANK.Loan_Branch_1004 TO 'User';
grant select, create on DANKTHEBANK.Loan_Branch_1005 TO 'User';

grant select, create on DANKTHEBANK.Manager_Account_View_1001 TO 'User';
grant select, create on DANKTHEBANK.Manager_Account_View_1002 TO 'User';
grant select, create on DANKTHEBANK.Manager_Account_View_1003 TO 'User';
grant select, create on DANKTHEBANK.Manager_Account_View_1004 TO 'User';
grant select, create on DANKTHEBANK.Manager_Account_View_1005 TO 'User';

create Role Customer_Service;

grant select on DANKTHEBANK.Branch_Transaction_1001 TO 'Customer_Service';
grant select on DANKTHEBANK.Branch_Transaction_1002 TO 'Customer_Service';
grant select on DANKTHEBANK.Branch_Transaction_1003 TO 'Customer_Service';
grant select on DANKTHEBANK.Branch_Transaction_1004 TO 'Customer_Service';
grant select on DANKTHEBANK.Branch_Transaction_1005 TO 'Customer_Service';

grant select, update on DANKTHEBANK.Customer_Branch_1001 TO 'Customer_Service';
grant select, update on DANKTHEBANK.Customer_Branch_1002 TO 'Customer_Service';
grant select, update on DANKTHEBANK.Customer_Branch_1003 TO 'Customer_Service';
grant select, update on DANKTHEBANK.Customer_Branch_1004 TO 'Customer_Service';
grant select, update on DANKTHEBANK.Customer_Branch_1005 TO 'Customer_Service';