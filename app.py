from http.client import BadStatusLine
from re import L, M
import re
from sre_constants import SUCCESS
from typing import final
import mysql.connector
from flask import Flask, request, json, send_from_directory
from flask_restful import Api, Resource, reqparse
from werkzeug.utils import secure_filename
from flask_cors import CORS  # comment this on deployment
from datetime import date, timedelta, datetime
app = Flask(__name__)

def dbConnect(user, password):
    db = mysql.connector.connect(
        host="localhost",
        user=user,
        passwd=password,
        database="DANKTHEBANK",
    )
    return db

db = dbConnect("root", "NISHAant@1234")

myCursor = db.cursor(buffered=True)
myCursor.execute("set GLOBAL max_allowed_packet=67108864")
CORS(app)  # comment this on deployment
api = Api(app)

@app.route("/userLogOut", methods=["POST"])
def userLogOut():
    if request.method == "POST":
        try:
            myCursor.execute("REVOKE User FROM customer@localhost")
            if myCursor.rowcount >= 0:
                return "Success"
            else:
                return "Failure"
        except :
            return "Failure"
@app.route("/adminLogOut", methods=["POST"])
def adminLogOut():
    if request.method == "POST":
        try:
            print(request.get_json()["Designation"])
            myCursor.execute("REVOKE %s FROM admin@localhost", (request.get_json()["Designation"].replace(' ', '_'),))
            if myCursor.rowcount >= 0:
                return "Success"
            else:
                return "Failure"
        except :
            return "Failure"
@app.route("/authUser", methods=["POST"])
def authUser():
    if request.method == 'POST':
        try:
            myCursor.execute("SELECT * FROM customers WHERE Customer_ID = %s AND Password = %s", (request.get_json()['id'], request.get_json()['password']))
            print(myCursor.fetchall())
            if(myCursor.rowcount == 1):
                myCursor.execute("DROP USER IF EXISTS customer@localhost")
                myCursor.execute("FLUSH PRIVILEGES")
                myCursor.execute("CREATE USER customer@localhost IDENTIFIED BY %s", (request.json["password"],))
                myCursor.execute("GRANT User TO customer@localhost")

                return "Success"
            else:
                return "Failure"
        except:
            return "Failure"

@app.route("/authAdmin", methods=['POST'])
def authAdmin():
    if request.method == 'POST':
        try:
            myCursor.execute("SELECT * FROM employees WHERE Employee_ID = %s AND Password = %s", (request.get_json()['id'], request.get_json()['password']))
            if(myCursor.rowcount == 1):
                entry = myCursor.fetchall()[0]
                branch = entry[0][:4]
                print(branch)
                designation = entry[3]
                myCursor.execute("DROP USER IF EXISTS admin@localhost")
                myCursor.execute("FLUSH PRIVILEGES")
                myCursor.execute("CREATE USER admin@localhost IDENTIFIED BY %s", (request.json["password"],))
                myCursor.execute("GRANT %s TO admin@localhost", (designation.replace(' ', '_'),))

                return "Success"
            else:
                return "Failure"
        except:
            return "Failure"

@app.route("/userProfile", methods=['GET', 'POST'])
def userProfile():
    if request.method == 'POST':
        try:
            columns = ["Customer_ID", "Name", "Age", "HouseNo", "Locality", "City", "ContactNo", "PAN", "Password"]
            print(columns)
            branch = request.get_json()['id'][:4]
            myCursor.execute("SELECT * FROM customers WHERE Customer_ID = %s AND Password = %s", ( request.get_json()['id'], request.get_json()['password']))
            l = dict(zip(columns, myCursor.fetchall()[0]))
            print(l)
            if(myCursor.rowcount == 1):
                return l
            else:
                return "Failure"
        except:
            return "Failure"
@app.route("/adminProfile", methods=['GET', 'POST'])
def adminProfile():
    if request.method == 'POST':
        try:
            columns = ["Employee_ID", "Name", "Salary", "Designation", "Joining_Date", "PAN", "Password"]
            print(columns)
            branch = request.get_json()['id'][:4]
            myCursor.execute("SELECT * FROM employees WHERE Employee_ID = %s AND Password = %s", (request.get_json()['id'], request.get_json()['password']))
            l = dict(zip(columns, myCursor.fetchall()[0]))
            print(l)
            if(myCursor.rowcount == 1):
                return l
            else:
                return "Failure"
        except:
            return "Failure"
@app.route("/newAccount", methods=['POST'])
def newAccounts():
    if request.method == 'POST':
        try:
            customer_id = request.get_json()['Customer_ID']
            myCursor.execute("SELECT LoanStatus FROM accounts WHERE Customer_ID = %s", (customer_id,))
            for x in myCursor.fetchall():
                if x[0] == "DEFAULTER":
                    return "Failure"
            branch = customer_id[:4]
            accountNo = branch + "01"
            if(request.get_json()['AccountType'] == "Savings"):
                accountNo += "00"
            else:
                accountNo += "01"
            myCursor.execute("SELECT * FROM accounts WHERE Customer_ID = %s AND AccountNo LIKE %s", (customer_id, branch + "%"))
            accountNo += "00"+str(myCursor.rowcount+1)
            print(accountNo)
            myCursor.execute("INSERT INTO accounts (AccountNo, Customer_ID, Balance, OpeningDate) VALUES (%s, %s, %s, CURDATE())", (accountNo, customer_id, request.get_json()['Balance']))
            myCursor.execute("INSERT INTO branch_account (AccountNo, Branch_ID) VALUES (%s, %s)", (accountNo, accountNo[:4]))
            db.commit()
            if(myCursor.rowcount == 1):
                return "Success"
            else:
                return "Failure"
        except:
            return "Failure"
@app.route("/userSavings", methods=['POST'])
def userSavings():
    if request.method == 'POST':
        try:
            columns = ["AccountNo", "Opening_Date", "LoanStatus", "Balance", "Customer_ID"]
            branch = request.get_json()['id'][:4]
            myCursor.execute("SELECT * FROM accounts WHERE Customer_ID = %s", (request.get_json()['id'],))
            l = []
            for x in myCursor.fetchall():
                if(x[0][6:8] == "00"):
                    l.append(dict(zip(columns, x)))
            print(l)
            columns = ["Payment_ID", "Amount", "Date", "Status"]
            transactionID = []
            for x in l:
                myCursor.execute("SELECT * FROM customer_account_transaction WHERE AccountNo = %s", (x['AccountNo'],))
                transactionID.append({x['AccountNo']:[j[1] for j in myCursor.fetchall()]})
            print(transactionID)
            transactions = []
            finalReturn = []

            for p in transactionID:
                for q in p:
                    for x in p[q]:
                        myCursor.execute("SELECT * FROM transactions WHERE Payment_ID = %s", (x,))
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
                    # take tuple[0] to get the list and then map it to the savings account
                    return {0:listOfListsOfDicts}
            else:
                return "Failure"
        except:
            return "Failure"
@app.route("/userCurrent", methods=['POST'])
def userCurrent():
    if request.method == 'POST':
        try:
            columns = ["AccountNo", "Opening_Date", "LoanStatus", "Balance", "Customer_ID"]
            branch = request.get_json()['id'][:4]
            myCursor.execute("SELECT * FROM accounts WHERE Customer_ID = %s", (request.get_json()['id'],))
            l = []
            # print(myCursor.fetchall())
            for x in myCursor.fetchall():
                if(x[0][6:8] == "01"):
                    l.append(dict(zip(columns, x)))
            columns = ["Payment_ID", "Amount", "Date", "Status"]
            transactionID = []
            for x in l:
                myCursor.execute("SELECT * FROM customer_account_transaction WHERE AccountNo = %s", (x['AccountNo'],))
                transactionID.append({x['AccountNo']:[j[1] for j in myCursor.fetchall()]})
            transactions = []
            finalReturn = []
            for p in transactionID:
                for q in p:
                    for x in p[q]:
                        myCursor.execute("SELECT * FROM transactions WHERE Payment_ID = %s", (x,))
                        transactions.append(dict(zip(columns, myCursor.fetchall()[0])))
                    finalReturn.append({q:transactions})
                    transactions = []
            listOfListsOfDicts = [l, finalReturn]
            if(listOfListsOfDicts[0] != []):
                if(l == []):
                    return "No Current Account"
                else:
                    # take tuple[0] to get the list and then map it to the savings account
                    return {0:listOfListsOfDicts}
            else:
                return "Failure"
        except:
            return "Failure"
@app.route("/userTransactions", methods=['POST'])
def userTransactions():
    if request.method == 'POST':
        try:
            columns = ["Payment_ID", "Amount", "Date", "Status"]
            branch = request.get_json()['id'][:4]
            myCursor.execute("SELECT * FROM customer_account_transaction WHERE Customer_ID = %s", (request.get_json()['id'],))
            transactionID = []
            for x in myCursor.fetchall():
                transactionID.append(x[1])
            transactions = []
            for p in transactionID:
                myCursor.execute("SELECT * FROM transactions WHERE Payment_ID = %s", (p,))
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
        except:
            return "Failure"
@app.route("/userLoans", methods=['POST'])
def userLoans():
    if request.method == 'POST':
        try:
            columns = ["StartDate","Loan_ID", "Amount", "InterestRate", "Term", "Status"]
            accounts = []
            branch = request.get_json()['id'][:4]
            myCursor.execute("SELECT * FROM accounts WHERE Customer_ID = %s", (request.get_json()['id'],))
            loanStatus = []
            for x in myCursor.fetchall():
                accounts.append(x[0])
                loanStatus.append(x[2])
            print(accounts)
            for x in accounts:
                myCursor.execute("SELECT * FROM branch_loan_account WHERE AccountNo = %s", (x,))
            loanID = []
            for x in myCursor.fetchall():
                print(x)
                loanID.append(x[1])
            loans = []
            for l in loanID:
                myCursor.execute("SELECT L.StartDate, L.Loan_ID, L.Amount, L.InterestRate, L.Term, A.LoanStatus FROM loans L, Accounts A, branch_loan_account B WHERE L.Loan_ID = %s AND A.AccountNo = B.AccountNo AND L.Loan_ID = B.Loan_ID", (l,) )
                loans.append(dict(zip(columns, myCursor.fetchall()[0])))
            print(loans)
            if(myCursor.rowcount >= 1):
                if(loans == []):
                    return "No Loans"
                else:
                    return {0:loans}
            else:
                return "Failure"
        except:
            return "Failure"
@app.route("/newLoan", methods=['POST'])
def newLoan():
    if request.method == 'POST':
        try:
            account = request.get_json()['account']
            myCursor.execute("SELECT LoanStatus FROM accounts WHERE AccountNo = %s", (account,))
            loanStatus = myCursor.fetchall()[0][0]
            print(loanStatus)
            if loanStatus == "NULL" or loanStatus == "PAID":
                loanStatus = "OKAY"
            else:
                return "Loan Cannot be Created"
            myCursor.execute("UPDATE accounts SET LoanStatus = %s WHERE AccountNo = %s", (loanStatus, account))
            myCursor.execute("SELECT * FROM branch_loan_account WHERE AccountNo = %s", (account,))
            loanNo = 1
            if myCursor.rowcount >= 1:
                loanNo += myCursor.rowcount
            loanID = ""
            if loanNo < 10:
                loanID = account[:4]+"03"+account[6:8]+account[-2:]+"000"+str(loanNo)
            else:
                loanID = account[:4]+"03"+account[6:8]+account[-2:]+"00"+str(loanNo)
            slab = (int(request.get_json()['amount'])/int(request.get_json()['term']))*(1+(int(request.get_json()['roi'])/100))
            myCursor.execute("INSERT INTO loans (Loan_ID, StartDate, Amount, InterestRate, Term, EndDate, Slab) VALUES (%s, CURDATE(), %s, %s, %s, DATE_ADD(CURDATE(), INTERVAL %s YEAR), %s)", (loanID,  request.get_json()['amount'], request.get_json()['roi'], request.get_json()['term'], request.get_json()['term'], slab))
            myCursor.execute("INSERT INTO branch_loan_account (Branch_ID, AccountNo, Loan_ID) VALUES (%s, %s, %s)", (account[:4], account, loanID))
            db.commit()
            if(myCursor.rowcount >= 1):
                return "Success"
            else:
                return "Failure"
        except:
            return "Failure"
@app.route("/loanPayments", methods=['POST'])
def loanPayments():
    if request.method == 'POST':
        loanPaymentStatus = "FAILED"
        try:
            account = request.get_json()['AccountNo']
            branch = account[:4]
            customerID = ""
            myCursor.execute("SELECT Customer_ID FROM accounts WHERE AccountNo = %s", (account,))
            customerID = myCursor.fetchall()[0][0]
            myCursor.execute("SELECT * FROM transactions WHERE Payment_ID LIKE %s", (branch+'%', ))
            loanPaymentID = ""
            if(myCursor.rowcount < 10):
                loanPaymentID = branch+"0202"+account[-2:]+branch[-2:]+account[-2:]+"0"+str(myCursor.rowcount + 1)+account[6:8]+"CX"
            else:
                loanPaymentID = branch+"0202"+account[-2:]+branch[-2:]+account[-2:]+str(myCursor.rowcount + 1)+account[6:8]+"CX"
            amount = request.get_json()['Amount']
            myCursor.execute("SELECT * FROM loans WHERE Loan_ID = %s", (request.get_json()['LoanID'],))
            loan = myCursor.fetchall()[0]
            term = loan[4]
            startDate = loan[0]
            loanAmount = loan[2]
            slab = loan[6]
            myCursor.execute("SELECT Balance,LoanStatus FROM accounts WHERE AccountNo = %s", (account,))
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
                    check = (date.today() - (startDate.replace(year= startDate.year + int(term)))).days/365
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
                myCursor.execute("UPDATE accounts SET Balance = Balance - %s WHERE AccountNo = %s", (amount, account))
                myCursor.execute("UPDATE accounts SET LoanStatus = %s WHERE AccountNo = %s", (loanStatus, account))
                myCursor.execute("UPDATE loans SET Amount = %s WHERE Loan_ID = %s", (loanAmount, request.get_json()['LoanID']))
            # loan Status and update
            myCursor.execute("INSERT INTO transactions (Payment_ID, Amount, Date, Status) VALUES (%s, %s, CURDATE(), %s)", (loanPaymentID, amount, loanPaymentStatus))
            myCursor.execute("INSERT INTO loan_transaction (Loan_ID, Payment_ID, Amount) VALUES (%s, %s, %s)", (request.get_json()['LoanID'], loanPaymentID, amount))
            transactionType = ""
            if loanPaymentID[6:8] == "01":
                transactionType = "Customer to Customer"
            elif loanPaymentID[6:8] == "02":
                transactionType = "Loan Payment"
            elif loanPaymentID[6:8] == "03":
                transactionType = "Deposit/Withdrawal"
            myCursor.execute("INSERT INTO customer_account_transaction (Customer_ID, AccountNo, Payment_ID, Amount, Transaction_Type, Recipient) VALUES (%s, %s, %s, %s, %s, %s)", (customerID, account, loanPaymentID, amount, transactionType, account))
            db.commit()
            if(myCursor.rowcount >= 1):
                return loanPaymentStatus
            else:
                return loanPaymentStatus
        except:
            return loanPaymentStatus
@app.route("/newTransaction", methods=['POST'])
def newTransaction():
    if request.method == 'POST':
        paymentStatus = "FAILED"
        try:
            customerId = request.get_json()['user']['id']
            senderAccount = request.get_json()['SAccountNo']
            receiverAccount = request.get_json()['RAccountNo']
            rBranch = receiverAccount[:4]
            sBranch = senderAccount[:4]
            paymentID = ""
            myCursor.execute("SELECT * FROM transactions WHERE Payment_ID LIKE %s", (sBranch+'%', ))
            if(myCursor.rowcount < 10):
                paymentID = sBranch+"0201"+senderAccount[-2:]+rBranch[-2:]+receiverAccount[-2:]+"0"+str(myCursor.rowcount + 1)+senderAccount[7]+receiverAccount[7]+"CC"
            else:
                paymentID = sBranch+"0201"+senderAccount[-2:]+rBranch[-2:]+receiverAccount[-2:]+str(myCursor.rowcount + 1)+senderAccount[7]+receiverAccount[7]+"CC"
            amount = request.get_json()['Amount']
            myCursor.execute("SELECT LoanStatus FROM accounts where AccountNo = %s", (senderAccount,))
            loanStatus = myCursor.fetchall()[0][0]
            paymentStatus = "PROCESSED"
            if loanStatus == "DEFAULTER":
                paymentStatus = "FAILED"

            myCursor.execute("SELECT Balance FROM accounts WHERE AccountNo = %s", (senderAccount,))
            if(int(myCursor.fetchall()[0][0]) - int(amount) < 0):
                paymentStatus = "FAILED"
            elif paymentStatus != "FAILED":
                myCursor.execute("UPDATE accounts SET Balance = Balance - %s WHERE AccountNo = %s", (amount, senderAccount))
                myCursor.execute("UPDATE accounts SET Balance = Balance + %s WHERE AccountNo = %s", (amount, receiverAccount))
            myCursor.execute("INSERT INTO transactions (Payment_ID, Amount, Date, Status) VALUES (%s, %s, CURDATE(), %s)", (paymentID, amount, paymentStatus))
            transactionType = ""
            if paymentID[6:8] == "01":
                transactionType = "Customer to Customer"
            elif paymentID[6:8] == "02":
                transactionType = "Loan Payment"
            elif paymentID[6:8] == "03":
                transactionType = "Deposit/Withdrawal"
            myCursor.execute("INSERT INTO customer_account_transaction (Customer_ID, AccountNo, Payment_ID, Amount, Transaction_Type, Recipient) VALUES (%s, %s, %s, %s, %s, %s)", (customerId, senderAccount, paymentID, amount, transactionType, receiverAccount))
            db.commit()
            if(myCursor.rowcount >= 1):
                return paymentStatus
            else:
                return paymentStatus
        except:
            return paymentStatus
@app.route("/adminEmployees", methods=['POST'])
def adminEmployees():
    if request.method == 'POST':
        try:
            columns = ["Employee_ID", "Name", "Salary", "Designation", "Joining_Date", "PAN", "Password"]
            adminID = request.get_json()['id']
            branch = adminID[:4]
            print(branch)
            myCursor.execute("SELECT * FROM employees WHERE Employee_ID LIKE %s", (branch+"%",))
            # print(myCursor.fetchall())
            finalReturn = []
            for i in myCursor.fetchall():
                finalReturn.append(dict(zip(columns,i)))
            print(finalReturn)
            if(myCursor.rowcount >= 1):
                return {"emp": finalReturn}
            else:
                return "Failure"
        except:
            return "Failure"
@app.route("/adminTransactions", methods=['POST'])
def adminTransactions():
    if request.method == 'POST':
        try:
            columns = ["Payment_ID", "Amount", "Date", "Status"]
            adminID = request.get_json()['id']
            branch = adminID[:4]
            print(branch)
            myCursor.execute("SELECT * FROM transactions WHERE Payment_ID LIKE %s", (branch+"%",))
            # print(myCursor.fetchall())
            finalReturn = []
            for i in myCursor.fetchall():
                finalReturn.append(dict(zip(columns,i)))
            print(finalReturn)
            if(myCursor.rowcount >= 1):
                return {0:finalReturn}
            else:
                return "Failure"
        except:
            return "Failure"
@app.route("/adminLoans", methods=['POST'])
def adminLoans():
    if request.method == 'POST':
        try:
            columns = ["StartDate", "Loan_ID", "Amount", "InterestRate", "Term", "Status"]
            adminID = request.get_json()['id']
            branch = adminID[:4]
            myCursor.execute("SELECT L.StartDate, L.Loan_ID, L.Amount, L.InterestRate, L.Term, A.LoanStatus FROM loans L, accounts A, branch_loan_account B WHERE L.Loan_ID LIKE %s AND B.AccountNo = A.AccountNO AND B.Loan_ID = L.Loan_ID", (branch+"%",))
            finalReturn = []
            for i in myCursor.fetchall():
                finalReturn.append(dict(zip(columns,i)))
            print(finalReturn)
            if(myCursor.rowcount >= 1):
                return {0:finalReturn}
            else:
                return "Failure"
        except:
            return "Failure"
@app.route("/newEmployee", methods=['POST'])
def newEmployee():
    if request.method == 'POST':
        try:
            name = request.get_json()['Name']
            age = request.get_json()['Age']
            salary = request.get_json()['Salary']
            designation = request.get_json()['Designation']
            pan = request.get_json()['PAN']
            password = request.get_json()['Password']
            branch = request.get_json()['Branch_ID']
            joiningDate = request.get_json()['Joining_Date']
            myCursor.execute("SELECT * FROM employees WHERE Employee_ID LIKE %s", (branch+"%",))
            employeeID = branch+"0000"+str(myCursor.rowcount + 1)
            myCursor.execute("INSERT INTO employees (Employee_ID, Name, Salary, Designation, Joining_Date, PAN, Password) VALUES (%s, %s, %s, %s, %s, %s, %s)", (employeeID, name, salary, designation, joiningDate, pan, password))
            db.commit()
            if(myCursor.rowcount == 1):
                return "Success"
            else:
                return "Failure"
        except:
            return "Failure"
@app.route("/editCustomer", methods=['POST'])
def editCustomer():
    if request.method == 'POST':
        try:
            customerID = request.get_json()["Customer_ID"]
            name = request.get_json()["Name"]
            age = request.get_json()["Age"]
            phone = request.get_json()["Phone"]
            houseNo = request.get_json()["HouseNo"]
            locality = request.get_json()["Locality"]
            city = request.get_json()["City"]
            myCursor.execute("UPDATE customers SET Name = %s, Age = %s, ContactNo = %s, HouseNo = %s, Locality = %s, City = %s WHERE Customer_ID = %s", (name, age, phone, houseNo, locality, city, customerID))
            db.commit()
            if myCursor.rowcount == 1:
                return "Success"
            else:
                return "Failure"
        except:
            return "Failure"
@app.route("/newCustomer", methods=['POST'])
def newCustomer():
    if request.method == 'POST':
        try:
            adminId = request.get_json()['Admin']['id']
            branch = adminId[:4]
            myCursor.execute("SELECT * FROM customers WHERE Customer_ID LIKE %s", (branch+"%",))
            customerId = branch+"0400"+str(myCursor.rowcount + 1)
            name = request.get_json()["Name"]
            age = request.get_json()["Age"]
            phone = request.get_json()["Phone"]
            houseNo = request.get_json()["HouseNo"]
            locality = request.get_json()["Locality"]
            city = request.get_json()["City"]
            pan = request.get_json()["PAN"]
            password = request.get_json()["Password"]
            myCursor.execute("INSERT INTO customers VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)", (customerId, name, age, houseNo, locality, city, phone, pan, password,))
            db.commit()
            if myCursor.rowcount == 1:
                return "Success"
            else:
                return "Failure"
        except:
            return "Failure"
@app.route("/adminNewLoan", methods=['POST'])
def adminNewLoan():
    if request.method == 'POST':
        try:
            account = request.get_json()['account']
            myCursor.execute("SELECT LoanStatus FROM accounts WHERE AccountNo = %s", (account,))
            loanStatus = myCursor.fetchall()[0][0]
            print(loanStatus)
            if loanStatus == "NULL" or loanStatus == "PAID":
                loanStatus = "OKAY"
            else:
                return "Loan Cannot be Created"
            myCursor.execute("UPDATE accounts SET LoanStatus = %s WHERE AccountNo = %s", (loanStatus, account))
            myCursor.execute("SELECT * FROM branch_loan_account WHERE AccountNo = %s", (account,))
            loanNo = 1
            if myCursor.rowcount >= 1:
                loanNo += myCursor.rowcount
            loanID = ""
            if loanNo < 10:
                loanID = account[:4]+"03"+account[6:8]+account[-2:]+"000"+str(loanNo)
            else:
                loanID = account[:4]+"03"+account[6:8]+account[-2:]+"00"+str(loanNo)
            slab = (int(request.get_json()['amount'])/int(request.get_json()['term']))*(1+(int(request.get_json()['roi'])/100))
            myCursor.execute("INSERT INTO loans (Loan_ID, StartDate, Amount, InterestRate, Term, EndDate, Slab) VALUES (%s, CURDATE(), %s, %s, %s, DATE_ADD(CURDATE(), INTERVAL %s YEAR), %s)", (loanID,  request.get_json()['amount'], request.get_json()['roi'], request.get_json()['term'], request.get_json()['term'], slab))
            myCursor.execute("INSERT INTO branch_loan_account (Branch_ID, AccountNo, Loan_ID) VALUES (%s, %s, %s)", (branch, account, loanID))
            db.commit()
            if(myCursor.rowcount >= 1):
                return "Success"
            else:
                return "Failure"
        except:
            return "Failure"
@app.route("/adminCustomers", methods=['POST'])
def adminCustomers():
    if request.method == 'POST':
        try:
            adminId = request.get_json()['id']
            branch = adminId[:4]
            myCursor.execute("SELECT * FROM customers WHERE Customer_ID LIKE %s", (branch+"%",))
            columns = [column[0] for column in myCursor.description]
            finalReturn = []
            customerID = []
            for i in myCursor.fetchall():
                finalReturn.append(dict(zip(columns,i)))
                customerID.append(i[0])
            accounts = []
            finalAccounts = []
            for i in customerID:
                myCursor.execute("SELECT * FROM accounts WHERE Customer_ID = %s", (i,))
                columns = [column[0] for column in myCursor.description]
                listOfAccounts = [] 
                for j in myCursor.fetchall():
                    listOfAccounts.append(dict(zip(columns,j)))
                finalAccounts.append({i:listOfAccounts})
            # print(finalReturn)
            print(finalAccounts)
            if(myCursor.rowcount >= 1):
                return {"customer":finalReturn, "accounts":finalAccounts}
            else:
                return "Failure"
        except:
            return "Failure"
if __name__ == "__main__":
    app.run(debug=True)

CORS(app, expose_headers='Authorization')