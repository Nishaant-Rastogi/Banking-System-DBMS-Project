drop view Branch_Manager_View_1001;
drop view Branch_Manager_View_1002;
drop view Branch_Manager_View_1003;
drop view Branch_Manager_View_1004;
drop view Branch_Manager_View_1005;
drop view Customer_Branch_View;
drop view Manager_Customer_View;
drop view Manager_Account_View_1001;
drop view Manager_Account_View_1002;
drop view Manager_Account_View_1003;
drop view Manager_Account_View_1004;
drop view Manager_Account_View_1005;

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


