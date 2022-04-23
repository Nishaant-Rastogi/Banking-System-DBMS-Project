from http.client import BadStatusLine
from re import M
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
db = mysql.connector.connect(
    host="localhost",
    user="root",
    passwd="NISHAant@1234",
    database="DANKTHEBANK",
)
myCursor = db.cursor(buffered=True)
myCursor.execute("set GLOBAL max_allowed_packet=67108864")
CORS(app)  # comment this on deployment
api = Api(app)
global maxAccounts
maxAccounts = 8
global maxTransactions
maxTransactions = 4
global maxLoans
maxLoans = 2
global User

@app.route("/userLogOut", methods=["POST"])
def userLogOut():
    if request.method == "POST":
        myCursor.execute("REVOKE User FROM customer@localhost")
@app.route("/adminLogOut", methods=["POST"])
def adminLogOut():
    if request.method == "POST":
        print(request.get_json()["Designation"])
        myCursor.execute("REVOKE %s FROM admin@localhost", (request.get_json()["Designation"].replace(' ', '_'),))
        if myCursor.rowcount >= 0:
            return "Success"
        else:
            return "Failure"
@app.route("/authUser", methods=["POST"])
def authUser():
    global User
    if request.method == 'POST':
        myCursor.execute("SELECT * FROM customers WHERE Customer_ID = %s AND Password = %s", (request.get_json()['id'], request.get_json()['password']))
        print(myCursor.fetchall())
        if(myCursor.rowcount == 1):
            myCursor.execute("DROP USER IF EXISTS customer@localhost")
            myCursor.execute("FLUSH PRIVILEGES")
            myCursor.execute("CREATE USER customer@localhost IDENTIFIED BY %s", (request.json["password"],))
            myCursor.execute("GRANT User TO customer@localhost")
            User = "customer"
            return "Success"
        else:
            return "Failure"

@app.route("/authAdmin", methods=['POST'])
def authAdmin():
    global User
    if request.method == 'POST':
        myCursor.execute("SELECT * FROM employees WHERE Employee_ID = %s AND Password = %s", (request.get_json()['id'], request.get_json()['password']))
        print(myCursor.fetchall())
        if(myCursor.rowcount == 1):
            myCursor.execute("DROP USER IF EXISTS admin@localhost")
            myCursor.execute("FLUSH PRIVILEGES")
            myCursor.execute("CREATE USER admin@localhost IDENTIFIED BY %s", (request.json["password"],))
            myCursor.execute("GRANT Branch_Manager TO admin@localhost")
            User = "admin"
            return "Success"
        else:
            return "Failure"

@app.route("/userProfile", methods=['GET', 'POST'])
def userProfile():
    if request.method == 'POST':
        myCursor.execute("SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = 'customers' ORDER BY ORDINAL_POSITION")
        columns = myCursor.fetchall()
        print(columns)
        myCursor.execute("SELECT * FROM customers WHERE Customer_ID = %s AND Password = %s", (request.get_json()['id'], request.get_json()['password']))
        columns = [x[0] for x in columns]
        l = dict(zip(columns, myCursor.fetchall()[0]))
        print(l)
        if(myCursor.rowcount == 1):
            return l
        else:
            return "Failure"

@app.route("/adminProfile", methods=['GET', 'POST'])
def adminProfile():
    if request.method == 'POST':
        myCursor.execute("SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = 'employees' ORDER BY ORDINAL_POSITION")
        columns = myCursor.fetchall()
        print(columns)
        myCursor.execute("SELECT * FROM employees WHERE Employee_ID = %s AND Password = %s", (request.get_json()['id'], request.get_json()['password']))
        columns = [x[0] for x in columns]
        l = dict(zip(columns, myCursor.fetchall()[0]))
        print(l)
        if(myCursor.rowcount == 1):
            return l
        else:
            return "Failure"

@app.route("/newAccount", methods=['POST'])
def newAccounts():
    global maxAccounts
    if request.method == 'POST':
        customer_id = request.get_json()['Customer_ID']
        accountNo = customer_id[:4] + "01"
        if(request.get_json()['AccountType'] == "Savings"):
            accountNo += "00"
        else:
            accountNo += "01"
        accountNo += "00"+str(maxAccounts)
        maxAccounts+=1
        print(accountNo)
        myCursor.execute("INSERT INTO Accounts (AccountNo, Customer_ID, Balance, OpeningDate) VALUES (%s, %s, %s, CURDATE())", (accountNo, customer_id, request.get_json()['Balance']))
        if(myCursor.rowcount == 1):
            return "Success"
        else:
            return "Failure"

@app.route("/userSavings", methods=['POST'])
def userSavings():
    if request.method == 'POST':
        columns = ["AccountNo", "Opening_Date", "LoanStatus", "Balance", "Customer_ID"]
        myCursor.execute("SELECT * FROM Accounts WHERE Customer_ID = %s", (request.get_json()['id'],))
        l = []
        # print(myCursor.fetchall())
        for x in myCursor.fetchall():
            if(x[0][6:8] == "00"):
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
                return "No Savings Account"
            else:
                # take tuple[0] to get the list and then map it to the savings account
                return {0:listOfListsOfDicts}
        else:
            return "Failure"

@app.route("/userCurrent", methods=['POST'])
def userCurrent():
    if request.method == 'POST':
        columns = ["AccountNo", "Opening_Date", "LoanStatus", "Balance", "Customer_ID"]
        myCursor.execute("SELECT * FROM Accounts WHERE Customer_ID = %s", (request.get_json()['id'],))
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

@app.route("/userTransactions", methods=['POST'])
def userTransactions():
    if request.method == 'POST':
        columns = ["Payment_ID", "Amount", "Date", "Status"]
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
@app.route("/userLoans", methods=['POST'])
def userLoans():
    if request.method == 'POST':
        columns = ["StartDate","Loan_ID", "Amount", "InterestRate", "Term"]
        accounts = []
        myCursor.execute("SELECT * FROM Accounts WHERE Customer_ID = %s", (request.get_json()['id'],))
        for x in myCursor.fetchall():
            accounts.append(x[0])
        print(accounts)
        for x in accounts:
            myCursor.execute("SELECT * FROM branch_loan_account WHERE AccountNo = %s", (x,))
        loanID = []
        for x in myCursor.fetchall():
            print(x)
            loanID.append(x[1])
        print(loanID)
        loans = []
        for l in loanID:
            myCursor.execute("SELECT * FROM loans WHERE Loan_ID = %s", (l,))
            loans.append(dict(zip(columns, myCursor.fetchall()[0])))
        
        print(myCursor.rowcount)
        if(myCursor.rowcount >= 1):
            if(loans == []):
                return "No Loans"
            else:
                return {0:loans}
        else:
            return "Failure"

@app.route("/newLoan", methods=['POST'])
def newLoan():
    if request.method == 'POST':
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
        loanID = account[:4]+"03"+account[7:9]+account[-2:]+"00"+str(loanNo)
        slab = (int(request.get_json()['amount'])/int(request.get_json()['term']))*(1+(int(request.get_json()['roi'])/100))
        myCursor.execute("INSERT INTO loans (Loan_ID, StartDate, Amount, InterestRate, Term, EndDate, Slab) VALUES (%s, CURDATE(), %s, %s, %s, DATE_ADD(CURDATE(), INTERVAL %s YEAR), %s)", (loanID,  request.get_json()['amount'], request.get_json()['roi'], request.get_json()['term'], request.get_json()['term'], slab))
        if(myCursor.rowcount >= 1):
            return "Success"
        else:
            return "Failure"

@app.route("/loanPayments", methods=['POST'])
def loanPayments():
    global maxTransactions
    if request.method == 'POST':
        account = request.get_json()['account']
        branch = account[:4]
        loanPaymentID = branch+"0202"+account[-2:]+branch[-2:]+account[-2:]+str(maxTransactions)+account[6:8]+"CX"
        amount = request.get_json()['Amount']
        myCursor.execute("SELECT * FROM loans WHERE Loan_ID = %s", (request.get_json()['LoanID'],))
        term = myCursor.fetchall()[0][4]
        startDate = myCursor.fetchall()[0][0]
        loanAmount = myCursor.fetchall()[0][2]
        slab = myCursor.fetchall()[0][6]
        myCursor.execute("SELECT Balance,LoanStatus FROM accounts WHERE AccountNo = %s", (account,))
        loanPaymentStatus = "PROCESSED"
        loanStatus = myCursor.fetchall()[0][1]
        if loanStatus == "PAID" or loanStatus == "DEFAULTER":
            return "Loan Payment Not Allowed"
        if date.today() > datetime.strptime(startDate) + timedelta(year=term):
            if loanStatus == "PENDING":
                loanStatus = "DEFAULTER"
                return "Loan Term Expired"
        else:
            if amount > loanAmount:
                return "Payment is Greater than Yearly Slab"
            else:
                loanAmount -= amount
                check = (date.today() - (datetime.strptime(startDate) + timedelta(year=term)))/365
                if check <= 0 and check >= -1 and loanAmount > 0:
                    loanStatus = "PAID"
                elif loanAmount == 0:
                    loanAmount = slab
        if(myCursor.fetchall()[0][0] < 0):
            loanPaymentStatus = "FAILED"
        elif loanPaymentStatus != "FAILED":
            myCursor.execute("UPDATE accounts SET Balance = Balance - %s WHERE AccountNo = %s", (amount, account))
        # loan Status and update
        myCursor.execute("INSERT INTO transactions (Payment_ID, Amount, Date, Status) VALUES (%s, %s, CURDATE(), %s)", (loanPaymentID, amount, loanPaymentStatus))
        if(myCursor.rowcount >= 1):
            return "Success"
        else:
            return "Failure"

@app.route("/newTransaction", methods=['POST'])
def newTransaction():
    global maxTransactions
    if request.method == 'POST':
        senderAccount = request.get_json()['SAccountNo']
        receiverAccount = request.get_json()['RAccountNo']
        branch = receiverAccount[:5]
        paymentID = branch+"0201"+senderAccount[-2:]+branch[-2:]+receiverAccount[-2:]+str(maxTransactions)+senderAccount[7]+receiverAccount[7]+"CC"
        amount = request.get_json()['Amount']
        myCursor.execute("SELECT LoanStatus FROM accounts where AccountNo = %s", (senderAccount,))
        loanStatus = myCursor.fetchall()[0][0]
        paymentStatus = "PROCESSED"
        if loanStatus == "DEFAULTER":
            paymentStatus = "FAILED"

        myCursor.execute("SELECT Balance FROM accounts WHERE AccountNo = %s", (senderAccount,))
        if(myCursor.fetchall()[0][0] < 0):
            paymentStatus = "FAILED"
        elif paymentStatus != "FAILED":
            myCursor.execute("UPDATE accounts SET Balance = Balance - %s WHERE AccountNo = %s", (amount, senderAccount))
            myCursor.execute("UPDATE accounts SET Balance = Balance + %s WHERE AccountNo = %s", (amount, receiverAccount))
        myCursor.execute("INSERT INTO transactions (Payment_ID, Amount, Date, Status) VALUES (%s, %s, CURDATE(), %s)", (paymentID, amount, paymentStatus))
        if(myCursor.rowcount >= 1):
            return "Success"
        else:
            return "Failure"

@app.route("/adminEmployees", methods=['POST'])
def adminEmployees():
    if request.method == 'POST':
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
            return {0:finalReturn}
        else:
            return "Failure"

if __name__ == "__main__":
    app.run(debug=True)

CORS(app, expose_headers='Authorization')