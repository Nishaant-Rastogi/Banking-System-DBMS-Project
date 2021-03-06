create database IF NOT EXISTS DANKTHEBANK;
use DANKTHEBANK;
drop table if exists Loans; 
CREATE TABLE Loans(
StartDate DATE NOT NULL,
Loan_ID VARCHAR(100) NOT NULL PRIMARY KEY,
Amount DOUBLE NOT NULL,
InterestRate DOUBLE,
Term int NOT NULL,
EndDate DATE,
Slab DOUBLE NOT NULL DEFAULT 0
);
SET SQL_SAFE_UPDATES = 0;


INSERT INTO Loans(StartDate, Loan_ID, Amount, InterestRate, Term)
VALUES
(STR_TO_DATE("01-05-2022", "%m-%d-%Y") ,'10010300080001', 55000, 6, 2),
(STR_TO_DATE("01-18-2022", "%m-%d-%Y") ,'10010301040001', 1600000, 0, 20),
(STR_TO_DATE("12-02-2021", "%m-%d-%Y") ,'10010301050001', 10000000, 5, 21),
(STR_TO_DATE("01-19-2022", "%m-%d-%Y") ,'10010300070001', 11000, 6, 3),
(STR_TO_DATE("01-12-2022", "%m-%d-%Y") ,'10020300010001', 76000, 6, 1),
(STR_TO_DATE("12-19-2021", "%m-%d-%Y") ,'10020301020001', 675000, 6, 2),
(STR_TO_DATE("08-13-2018", "%m-%d-%Y") ,'10020300030001', 1600000, 0, 8),
(STR_TO_DATE("12-15-2021", "%m-%d-%Y") ,'10020300050001', 1000000, 5, 11),
(STR_TO_DATE("11-29-2021", "%m-%d-%Y") ,'10020301060001', 111000, 6, 3),
(STR_TO_DATE("02-05-2022", "%m-%d-%Y") ,'10020300080001', 11000, 3, 1),
(STR_TO_DATE("07-05-2022", "%m-%d-%Y") ,'10030300020001', 17000, 3, 1),
(STR_TO_DATE("01-30-2014", "%m-%d-%Y") ,'10030301060001', 65000, 6, 2),
(STR_TO_DATE("08-21-2016", "%m-%d-%Y") ,'10040300030001', 1000000, 0, 4),
(STR_TO_DATE("09-11-2010", "%m-%d-%Y") ,'10030300070001', 10000, 7, 1),
(STR_TO_DATE("06-06-2015", "%m-%d-%Y") ,'10040301050001', 200000, 5, 2),
(STR_TO_DATE("07-10-2016", "%m-%d-%Y") ,'10040300070001', 10000000, 8, 12),
(STR_TO_DATE("12-10-2020", "%m-%d-%Y") ,'10050300010001', 20000, 6, 1),
(STR_TO_DATE("10-16-2013", "%m-%d-%Y") ,'10050300040001', 100000, 6, 1),
(STR_TO_DATE("05-20-2012", "%m-%d-%Y") ,'10050300050001', 160000, 0, 8),
(STR_TO_DATE("02-17-2022", "%m-%d-%Y") ,'10050300070001', 120000, 6, 1),
(STR_TO_DATE("07-05-2018", "%m-%d-%Y") ,'10050300080001', 10000, 5, 1 );
UPDATE loans set EndDate = STR_TO_DATE(DATE_ADD(StartDate, INTERVAL Term YEAR), "%Y-%m-%d");
UPDATE loans set Slab = Amount;
DELIMITER $$

CREATE TRIGGER young9 BEFORE INSERT ON Loans
    FOR EACH ROW BEGIN
      IF ((select A.LoanStatus from Accounts A, Loans L, Transactions T where (substring(L.Loan_ID,1,4) = substring(A.AccountNo,1,4) AND substring(T.Payment_ID,7,8) = substring(A.AccountNo,7,8) AND substring(L.Loan_ID,9,10) = substring(A.AccountNo, 11, 12))) = 'DEFAULTER' OR (select A.LoanStatus from Accounts A, Loans L, Transactions T where (substring(L.Loan_ID,1,4) = substring(A.AccountNo,1,4) AND substring(T.Payment_ID,7,8) = substring(A.AccountNo,7,8) AND substring(L.Loan_ID,9,10) = substring(A.AccountNo, 11, 12))) = 'PENDING') 
      THEN
            SIGNAL sqlstate '45001' set message_text = "No way ! You cannot do this !"; 
      END IF;
    END$$

DELIMITER ;


