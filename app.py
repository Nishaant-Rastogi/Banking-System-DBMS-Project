import mysql.connector
from flask import Flask, request, session, send_from_directory
from flask_restful import Api, Resource, reqparse
from werkzeug.utils import secure_filename
from flask_cors import CORS  # comment this on deployment

app = Flask(__name__)
db = mysql.connector.connect(
    host="localhost",
    user="root",
    passwd="mysql",
    database="DANKTHEBANK"
)
myCursor = db.cursor()
CORS(app)  # comment this on deployment
api = Api(app)


@app.route("/authUser", methods=["POST"])
def authUser():
    if request.method == 'POST':
        myCursor.execute("SELECT * FROM customers WHERE Customer_ID = %s AND Password = %s", (request.get_json()['id'], request.get_json()['password']))
        print(myCursor.fetchall())
        if(myCursor.rowcount == 1):
            return "Success"
        else:
            return "Failure"

@app.route("/authAdmin", methods=['POST'])
def authAdmin():
    if request.method == 'POST':
        myCursor.execute("SELECT * FROM employees WHERE Customer_ID = %s AND Password = %s", (request.get_json()['id'], request.get_json()['password']))
        print(myCursor.fetchall())
        if(myCursor.rowcount == 1):
            return "Success"
        else:
            return "Failure"

@app.route("/userAccounts", methods=['POST'])
def userAccounts():
    if request.method == 'POST':
        myCursor.execute("SELECT * FROM accounts WHERE Customer_ID = %s", (request.get_json()['id']))
        print(myCursor.fetchall())
        if(myCursor.rowcount > 0):
            return "Success"
        else:
            return "Failure"



if __name__ == "__main__":
    app.run(debug=True)

CORS(app, expose_headers='Authorization')