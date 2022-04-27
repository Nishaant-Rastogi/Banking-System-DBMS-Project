

**DANK the BANK**

**Central Online Banking System**

**DBMS Project Report**

**Final-Evaluation**

Group 41

Divyam - 2020058

Aamleen - 2020002

Nishaant - 2020091

Kushagra - 2020075





**Scope:**

With the exponential increase in population, the traffic on Banking portals is

tremendous which further results in managing a vast amount of data of customers.

This traffic and data is ever increasing and here we present our Banking portal -

DANK the Bank (DTB) that effectively uses the concepts of RDBMS to provide a

secure, efficient and central banking system to its customers with a user-friendly,

interactive interface as a cherry on the top.

Users will be provided with 2 types of accounts - Savings and Current. These

accounts will be equipped with multiple user-friendly services online. All the data will

be centrally stored and managed using MySQL. The MySQL queries will be

optimized and indexes will be used to reduce processing time. The portal is also

integrated with features that cater to Employees, which can make it easy for them to

manage and for the branches to keep their progress track. Traditionally one of the

major hassles faced is while applying and approving loans, as it needs a lot of

scrutiny. Through our portal, users can easily apply for loans and the officials on the

other end will be provided with all the required data from our Database so that they

can reduce the approval time significantly. Once the loan is approved, users can

easily pay-back & track their loans annually.

One of the most important features will be to make security our top-most priority. We

will achieve this by making our DataBase "smart" by placing proper checks and

triggers. Transactions can be done from User-Bank, User-User in various modes and

these will be updated on a real-time basis with proper confirmations.

Along with this, we plan to use advanced aggregate functions to get a better idea

about branch, employee and user statistics via the variations and stddev in their

salaries, balance, transactions, etc.

Thus, using the concepts of DBMS, we aim to deliver a one-stop solution for Online

Banking System with Central DataBase.





**Stakeholders:**

\1. Branches Of Banks

i.

Employees Of Banks

a. Branch Manager

b. Service Manager

c. Customer Service

d. Account Manager

ii.

Loan Department

\2. Users/Customers





**Project Description/Aims:**

An Online Central Banking System portal that integrates users and employees of Bank

to effectively enhance the Banking services.

\1) Banks can have multiple branches. Storing information of each Branch in the

Database.

\2) Developing Opcodes for payment, customer, loan and account ID, so that all of them

can be effectively linked with each other.

\3) Each Branch will have its Employees and Branch Manager. Keeping track of Branch

Managers and the Employees under them. Uniquely connect each branch with its

employees and manager.

\4) Storing Data of Customers/Users and linking them to their accounts.

\5) Each Branch will have 2 types of Accounts – Savings & Current. Storing various

information related to accounts. Linking Accounts to Branch using Branch Codes.

Also linking accounts to users to provide various services to them.

\6) Keeping track of transactions made by users, like their type, status, amount,

confirmation, etc.

\7) Making successful transactions between User & User and also between User &

Banks (including loan payment).

\8) Providing Loan opportunities to customers where they can easily apply unless they

are defaulters or in the process of paying another loan. We have also provided

student loans with 0% interest rates.

\9) Tracking the loan status before and after its approval stage. Highlighting significant

defaulters & taking actions accordingly.

\10) Helping employees to get a better idea about their branch via aggregate MySQL

function queries which indicate the areas on which they should improve through

statistics.

\11) Providing some additional bonus services to the users and admins along with easy

to use, interactive UI.





**ER DIAGRAM UPDATED**





**Identification Of Weak Entity**

**Transaction:** Transaction is a weak entity because it depends on the Account and Customer

Entity. If there is no account, then there is no point in having any transaction entity itself. Also, the

transactions that are made, are done after confirmation from Customer and Account Balance and

limits. The Key of Transaction is also dependent on the customer paying.

**Identification of Ternary Relationship**

**Payments:** Payments is a ternary relationship because it involves 3 entities. This relationship

comes into effect when a customer makes some transactions, which need to be validated by the

Account status. Thus 3 entities come into play - Customer, Account & Transaction.

**Approves:** Approves is a ternary relationship that comes into effect when a customer applies for a

loan, which is approved/denied by the branch. Thus 3 entities are involved in this - Customer who

applies, Branch which approves/denies, and the Loan which stores all the necessary information

and tracks the status before and after loan.

**DATABASE SCHEMA**

**Accounts:**

AccountNo

VarChar(100)

NOT NULL

OpeningDate

Date

NOT NULL

LoanStatus

Balance

VarChar(100)

Double

Customer\_ID

VarChar(100)





NOT NULL

Primary Key: AccountNo

Foreign Key: Customer\_ID

**Savings\_Accounts:**

AccountNo

VarChar(100)

NOT NULL

OpeningDate

Date

NOT NULL

LoanStatus

Balance

VarChar(100)

Double

Customer\_ID

VarChar(100)

NOT NULL

Interest Rate

Int

DEFAULT ‘6’

TransactionLimit

Double

Primary Key: AccountNo

Foreign Key: AccountNo

**Current\_Accounts:**

AccountNo

OpeningDate

LoanStatus

VarChar(100)

NOT NULL

Date

NOT NULL

VarChar(100)





Balance

Double

Customer\_ID

VarChar(100)

NOT NULL

OverdraftLimit

bigint

NOT NULL

Primary Key: AccountNo

Foreign Key: AccountNo

**Employee:**

Employee\_ID

Name

VARCHAR(100)

NOT NULL

VARCHAR

NOT NULL

Salary

Int

NOT NULL

Designation

VARCHAR(100)

NOT NULL

PA N No.

VARCHAR(100)

Joining Date

DATE

NOT NULL

Contact No.

Password

VarChar(10)

NOT NULL

VARCHAR(30)

NOT NULL

Primary Key: Employee\_ID

**Employee\_Phone:**





Employee\_ID

PhoneNo

VARCHAR(100)

NOT NULL

VarChar(10)

NOT NULL

Primary Key: Employee\_ID, PhoneNo

Foreign Key: Employee\_ID

**Works:**

Employee\_ID

Branch\_ID

VARCHAR(100)

NOT NULL

Bigint

NOT NULL

Primary Key: Employee\_ID, Branch\_ID

**Customers:**

Customer\_ID

Name

VarChar(100)

NOT NULL

VarChar(100)

NOT NULL

Age

Int

NOT NULL

HouseNo

Locality

City

VarChar(20)

NOT NULL

VarChar(100)

NOT NULL

VarChar(50)

NOT NULL

ContactNo

Bigint





NOT NULL

PA N

VarChar(30)

NOT NULL

Password

VarChar(100)

NOT NULL

Primary Key: Customer\_ID

**Branch:**

Branch\_ID

Branch\_Name

Address

Bigint

NOT NULL

VarChar(100)

NOT NULL

VarChar(100)

NOT NULL

Primary Key: Branch\_ID

Payment\_ID

**Transactions:**

VarChar(100)

NOT NULL

Amount

Date

Double

DateTime

NOT NULL

Status

VarChar(100)

NOT NULL

Primary Key: Payment\_ID





**Loans:**

Date

StartDate

Loan\_ID

Amount

NOT NULL

VarChar(100)

NOT NULL

Double

NOT NULL

InterestRate

Term

Double

Int

NOT NULL

EndDate

Date

Primary Key: Loan\_ID

**Branch\_Managers:**

Employee\_ID

Branch\_ID

Name

VARCHAR(100)

NOT NULL

BigInt

NOT NULL

VARCHAR(100)

NOT NULL

Designation

Term

VARCHAR(100)

NOT NULL

Int

NOT NULL

Joining\_Date

Date





NOT NULL

Primary Key: Employee\_ID, Branch\_ID

**Branch\_Account:**

Branch\_ID

BigInt

NOT NULL

AccountNo

VarChar(100)

NOT NULL

Primary Key: AccountNo, Branch\_ID

**Branch\_Loan\_Account:**

Branch\_ID

AccountNo

Loan\_ID

BigInt

NOT NULL

VarChar(100)

NOT NULL

VarChar(100)

NOT NULL

Primary Key: AccountNo, Branch\_ID, Loan\_ID

**Customer\_Account:**

Customer\_ID

AccountNo

VarChar(100)

NOT NULL

VarChar(100)

NOT NULL

Primary Key: AccountNo, Customer\_ID





**Customer\_Account\_Transactions:**

Customer\_ID

Payment\_ID

AccountNo

Amount

VarChar(100)

NOT NULL

VarChar(100)

NOT NULL

VarChar(100)

NOT NULL

Double

Transaction\_Type

VarChar(100)

NOT NULL

Recipient

VarChar(100)

NOT NULL

Primary Key: Payment\_ID, Customer\_ID

**Loan\_Transactions:**

Loan\_ID

VarChar(100)

NOT NULL

Payment\_ID

VarChar(100)

NOT NULL

Amount

Double

Primary Key: Payment\_ID, Loan\_ID

**RELATIONAL SCHEMA**

Branches (Branch ID, Branch Name, Address)





Employees (Employee ID, Name, PAN Number, Salary, Designation, Joining Date, {Contact

No.}, Password)

Employee\_Phone(PhoneNo, Employee\_ID)

Works (Employee ID, Branch ID)

Branch\_Managers (Employee ID, Name,  Branch ID, Designation, Term, Joining Date)

Branch\_Account (Branch ID, Account No.)

Branch\_Loan(Branch ID, Account No, Loan\_ID)

Branch\_Loan\_Account(Branch ID, Loan ID, Customer ID)

Accounts (Account No., Customer ID, Opening Date, Balance, Loan Status)

Savings\_Accounts (Account No., Rate, Transaction Limit)

Current\_Accounts (Account No., OverDraftLimit)

Customers (Customer ID, Name, PAN Number, Age, Password,Customer Name,

Address(House No.,Locality,City))

Customer\_Account(Account No., Customer ID)

Customer\_Account\_Transactions(Payment ID, Customer ID, Account No, Amount,

Transaction\_Type, Recipient)

Loans(Loan\_Id,Term, Rate of Interest, End Date,Start Date,Amount, Slab)

Loan\_Transactions(Loan ID, Payment ID, Amount)

Transactions(Payment ID, Status, Amount, Date)

**SQL QUERIES**

\1. List all loan defaulters name, account number, loan\_id

\2. List account numbers of all employees

\3. List Loan\_ids that were successfully paid by a customer

\4. List customers who are older than 60 and have taken a loan with their rate of

interest

\5. List all the employees working under a branch manager

\6. List status of every type of payment from a customer.

\7. List status of transactions of payment > 10000

\8. List the customer’s number, customer’s Name, branch id and loan amount for

people who have taken loans.





\9. List account number, and net balance across accounts of a customer

\10. List the total number of withdrawals and total number of deposits being

done by the customer

11 . List name, customerID for failed transactions

\12. List the managers with salary > 50000 who joined before 2010

\13. List the No of customers with savings account and current account

\14. List accounts with loan status pending and roi >= 6%

\15. List Customers who have both savings and current accounts.

**NEW SQL QUERIES**

\1. For every customer check total transaction and grant him gold, silver, platinum

accounts

\2. List all the loan defaulters of a branch, and the total amount defaulted, group

by branch.

\3. Give the loyal customers (>10 years of service with the bank) a one-time gift of

Rs. 500 in one of their accounts.

\4. List the average salary of all the employees at each branch, and compare it

with the salary of the branch manager. Sort the result by average salary at

each branch.

\5. List the average, maximum and minimum transaction done by a customer

\6. Save the current DB state, and then delete all the customers not having PAN

as per the RBI rules

\7. Accidentally, customers less than 18 years old were also deleted which should

not have happened. Revert to the previous state and make the correction.

Save the final changes.

\8. Calculating the credit score of a customer

\9. New loan is to be granted to customers with a credit score > 900

\10. Ranking branches on the basis of loans they gave out

**ADVANCED AGGREGATE SQL QUERIES**

\1. Number of transactions in a year, average amount and stddev

\2. Ranking customers in the order of transactions they made

\3. Ranking customers on the basis of their loan payments

\4. Stddev and ranking on branches on the basis of payments made through them

\5. Variance calculation of balance and loans issued by a bank branch, compared

with its assets





**EMBEDDED SQL QUERIES**

\1. Displaying the user’s savings accounts

def userSavings():

if request.method == 'POST':

columns = ["AccountNo", "Opening\_Date", "LoanStatus", "Balance",

"Customer\_ID"]

branch = request.get\_json()['id'][:4]

myCursor.execute("SELECT \* FROM accounts WHERE Customer\_ID = %s",

(request.get\_json()['id'],))

l = []

for x in myCursor.fetchall():

if(x[0][6:8] == "00"):

l.append(dict(zip(columns, x)))

print(l)

columns = ["Payment\_ID", "Amount", "Date", "Status"]

transactionID = []

for x in l:

myCursor.execute("SELECT \* FROM customer\_account\_transaction WHERE

AccountNo = %s", (x['AccountNo'],))

transactionID.append({x['AccountNo']:[j[1] for j in

myCursor.fetchall()]})

print(transactionID)

transactions = []

finalReturn = []

for p in transactionID:

for q in p:

for x in p[q]:

myCursor.execute("SELECT \* FROM transactions WHERE Payment\_ID =

%s", (x,))

i = myCursor.fetchall()

print(i)

transactions.append(dict(zip(columns, i[0])))

finalReturn.append({q:transactions})

transactions = []

listOfListsOfDicts = [l, finalReturn]

if(listOfListsOfDicts[0] != []):

if(l == []):

return "No Savings Account"

else:





\# take tuple[0] to get the list and then map it to the savings

return {0:listOfListsOfDicts}

account

else:

return "Failure"

\2. Creating a new loan

def newLoan():

if request.method == 'POST':

account = request.get\_json()['account']

myCursor.execute("SELECT LoanStatus FROM accounts WHERE AccountNo = %s",

(account,))

loanStatus = myCursor.fetchall()[0][0]

print(loanStatus)

if loanStatus == "NULL" or loanStatus == "PAID":

loanStatus = "OKAY"

else:

return "Loan Cannot be Created"

myCursor.execute("UPDATE accounts SET LoanStatus = %s WHERE AccountNo =

%s", (loanStatus, account))

myCursor.execute("SELECT \* FROM branch\_loan\_account WHERE AccountNo = %s",

(account,))

loanNo = 1

if myCursor.rowcount >= 1:

loanNo += myCursor.rowcount

loanID = ""

if loanNo < 10:

loanID = account[:4]+"03"+account[6:8]+account[-2:]+"000"+str(loanNo)

else:

loanID = account[:4]+"03"+account[6:8]+account[-2:]+"00"+str(loanNo)

slab =

(int(request.get\_json()['amount'])/int(request.get\_json()['term']))\*(1+(int(request

.get\_json()['roi'])/100))

myCursor.execute("INSERT INTO loans (Loan\_ID, StartDate, Amount,

InterestRate, Term, EndDate, Slab) VALUES (%s, CURDATE(), %s, %s, %s,

DATE\_ADD(CURDATE(), INTERVAL %s YEAR), %s)", (loanID,

request.get\_json()['amount'], request.get\_json()['roi'],

request.get\_json()['term'], request.get\_json()['term'], slab))

myCursor.execute("INSERT INTO branch\_loan\_account (Branch\_ID, AccountNo,

Loan\_ID) VALUES (%s, %s, %s)", (account[:4], account, loanID))

db.commit()

if(myCursor.rowcount >= 1):





return "Success"

else:

return "Failure"

\3. Creating a new transaction

def userTransactions():

if request.method == 'POST':

columns = ["Payment\_ID", "Amount", "Date", "Status"]

branch = request.get\_json()['id'][:4]

myCursor.execute("SELECT \* FROM customer\_account\_transaction WHERE

Customer\_ID = %s", (request.get\_json()['id'],))

transactionID = []

for x in myCursor.fetchall():

transactionID.append(x[1])

transactions = []

for p in transactionID:

myCursor.execute("SELECT \* FROM transactions WHERE Payment\_ID = %s",

(p,))

transactions.append(dict(zip(columns, myCursor.fetchall()[0])))

print(transactions)

print(myCursor.rowcount)

if(myCursor.rowcount >= 1):

if(transactions == []):

return "No Transactions"

else:

print(transactions)

return {0:transactions}

else:

return "Failure"

\4. Displaying the loans of the user

def userLoans():

if request.method == 'POST':

columns = ["StartDate","Loan\_ID", "Amount", "InterestRate", "Term",

"Status"]

accounts = []

branch = request.get\_json()['id'][:4]

myCursor.execute("SELECT \* FROM accounts WHERE Customer\_ID = %s",

(request.get\_json()['id'],))

loanStatus = []

for x in myCursor.fetchall():

accounts.append(x[0])





loanStatus.append(x[2])

print(accounts)

for x in accounts:

myCursor.execute("SELECT \* FROM branch\_loan\_account WHERE AccountNo =

%s", (x,))

loanID = []

for x in myCursor.fetchall():

print(x)

loanID.append(x[1])

loans = []

for l in loanID:

myCursor.execute("SELECT L.StartDate, L.Loan\_ID, L.Amount,

L.InterestRate, L.Term, A.LoanStatus FROM loans L, Accounts A, branch\_loan\_account

B WHERE L.Loan\_ID = %s AND A.AccountNo = B.AccountNo AND L.Loan\_ID = B.Loan\_ID",

(l,) )

loans.append(dict(zip(columns, myCursor.fetchall()[0])))

print(loans)

if(myCursor.rowcount >= 1):

if(loans == []):

return "No Loans"

else:

return {0:loans}

else:

return "Failure"

\5. Loan Transaction

def loanPayments():

if request.method == 'POST':

account = request.get\_json()['AccountNo']

branch = account[:4]

customerID = ""

myCursor.execute("SELECT Customer\_ID FROM accounts WHERE AccountNo = %s",

(account,))

customerID = myCursor.fetchall()[0][0]

myCursor.execute("SELECT \* FROM transactions WHERE Payment\_ID LIKE %s",

(branch+'%', ))

loanPaymentID = ""

if(myCursor.rowcount < 10):

loanPaymentID =

branch+"0202"+account[-2:]+branch[-2:]+account[-2:]+"0"+str(myCursor.rowcount +

1)+account[6:8]+"CX"

else:





loanPaymentID =

branch+"0202"+account[-2:]+branch[-2:]+account[-2:]+str(myCursor.rowcount +

1)+account[6:8]+"CX"

amount = request.get\_json()['Amount']

myCursor.execute("SELECT \* FROM loans WHERE Loan\_ID = %s",

(request.get\_json()['LoanID'],))

loan = myCursor.fetchall()[0]

term = loan[4]

startDate = loan[0]

loanAmount = loan[2]

slab = loan[6]

myCursor.execute("SELECT Balance,LoanStatus FROM accounts WHERE AccountNo =

%s", (account,))

loanPaymentStatus = "PROCESSED"

accountData = myCursor.fetchall()[0]

loanStatus = accountData[1]

if loanStatus == "PAID" or loanStatus == "DEFAULTER":

return "Loan Payment Not Allowed"

if date.today() > startDate.replace(year= startDate.year + int(term)):

if loanStatus != "DEFAULTER":

loanStatus = "DEFAULTER"

return "Loan Term Expired"

else:

if int(amount) > int(loanAmount):

return "Payment is Greater than Yearly Slab"

elif int(amount) == int(loanAmount):

check = (date.today() - (startDate.replace(year= startDate.year +

int(term)))).days/365

if check <= 0 and check >= -1 and loanAmount > 0:

loanStatus = "PAID"

loanAmount = "0"

else:

loanAmount = slab

loanStatus = "PENDING"

elif int(amount) < int(loanAmount):

loanAmount = str(int(loanAmount) - int(amount))

loanStatus = "PENDING"

if(int(accountData[0]) - int(amount) < 0):

loanPaymentStatus = "FAILED"

elif loanPaymentStatus != "FAILED":

myCursor.execute("UPDATE accounts SET Balance = Balance - %s WHERE

AccountNo = %s", (amount, account))





myCursor.execute("UPDATE accounts SET LoanStatus = %s WHERE AccountNo =

%s", (loanStatus, account))

myCursor.execute("UPDATE loans SET Amount = %s WHERE Loan\_ID = %s",

(loanAmount, request.get\_json()['LoanID']))

\# loan Status and update

myCursor.execute("INSERT INTO transactions (Payment\_ID, Amount, Date,

Status) VALUES (%s, %s, CURDATE(), %s)", (loanPaymentID, amount,

loanPaymentStatus))

myCursor.execute("INSERT INTO loan\_transaction (Loan\_ID, Payment\_ID,

Amount) VALUES (%s, %s, %s)", (request.get\_json()['LoanID'], loanPaymentID,

amount))

transactionType = ""

if loanPaymentID[6:8] == "01":

transactionType = "Customer to Customer"

elif loanPaymentID[6:8] == "02":

transactionType = "Loan Payment"

elif loanPaymentID[6:8] == "03":

transactionType = "Deposit/Withdrawal"

myCursor.execute("INSERT INTO customer\_account\_transaction (Customer\_ID,

AccountNo, Payment\_ID, Amount, Transaction\_Type, Recipient) VALUES (%s, %s, %s, %s,

%s, %s)", (customerID, account, loanPaymentID, amount, transactionType, account))

\# db.commit()

if(myCursor.rowcount >= 1):

return loanPaymentStatus

else:

return loanPaymentStatus

\6. Displaying customers of bank branch

def adminCustomers():

if request.method == 'POST':

adminId = request.get\_json()['id']

branch = adminId[:4]

myCursor.execute("SELECT \* FROM customers WHERE Customer\_ID LIKE %s",

(branch+"%",))

columns = [column[0] for column in myCursor.description]

finalReturn = []

customerID = []

for i in myCursor.fetchall():

finalReturn.append(dict(zip(columns,i)))

customerID.append(i[0])

accounts = []

finalAccounts = []

for i in customerID:





myCursor.execute("SELECT \* FROM accounts WHERE Customer\_ID = %s", (i,))

columns = [column[0] for column in myCursor.description]

listOfAccounts = []

for j in myCursor.fetchall():

listOfAccounts.append(dict(zip(columns,j)))

finalAccounts.append({i:listOfAccounts})

\# print(finalReturn)

print(finalAccounts)

if(myCursor.rowcount >= 1):

return {"customer":finalReturn, "accounts":finalAccounts}

else:

return "Failure"

\7. Displaying customers of bank branch

def newEmployee():

if request.method == 'POST':

name = request.get\_json()['Name']

age = request.get\_json()['Age']

salary = request.get\_json()['Salary']

designation = request.get\_json()['Designation']

pan = request.get\_json()['PAN']

password = request.get\_json()['Password']

branch = request.get\_json()['Branch\_ID']

joiningDate = request.get\_json()['Joining\_Date']

myCursor.execute("SELECT \* FROM employees WHERE Employee\_ID LIKE %s",

(branch+"%",))

employeeID = branch+"0000"+str(myCursor.rowcount + 1)

myCursor.execute("INSERT INTO employees (Employee\_ID, Name, Salary,

Designation, Joining\_Date, PAN, Password) VALUES (%s, %s, %s, %s, %s, %s, %s)",

(employeeID, name, salary, designation, joiningDate, pan, password))

\# db.commit()

if(myCursor.rowcount == 1):

return "Success"

else:

return "Failure"





**INDEXES**

\1. CREATE INDEX Customer\_ID\_idx ON Customers (Customer\_ID);

\2. CREATE INDEX LoanStatus\_idx ON Accounts (LoanStatus);

\3. CREATE UNIQUE INDEX AccountNo\_idx ON Accounts (AccountNo);

\4. CREATE UNIQUE INDEX Employee\_ID\_idx ON Employees (Employee\_ID);

\5. CREATE UNIQUE INDEX Payment\_ID\_idx ON Transactions (Payment\_ID);

\6. CREATE INDEX Customer\_Account\_idx ON Accounts (Customer\_ID,

AccountNo);

\7. CREATE INDEX Status\_idx ON Transactions (Status);

\8. CREATE INDEX Designation\_idx ON Employees (Designation);

**TRIGGERS**

\1. Updating balance in savings and current accounts after transactions.

\2. Updating Overdraft limit in current accounts (0 for Balance < 3000)

\3. Updating Interest Rate in savings accounts (0% for Balance < 3000)

\4. Updating age of customer

\5. Preventing a user with “defaulter” and “pending” status to take loans

\6. Preventing a user with “defaulter” status to make transactions





**WEB-DEVELOPMENT**

**User/Admin Login Page**

**Successful Login**





**User Profile**





**User Dashboard**

**User Savings Account List**

**User Transactions**





**User New Account Form**

**User Loan Payment Form**





**User Transaction Form**

**User Logout**





**Admin Profile**





**Admin Dashboard**

**Branch’s Customer List**

**(with their accounts)**

**Admin New Customer Form**





**Branch’s Transaction History**

**Branch’s Employee List**





