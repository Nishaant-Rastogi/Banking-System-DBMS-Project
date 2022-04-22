create database IF NOT EXISTS DANKTHEBANK; -- acc balance check
use DANKTHEBANK;
drop table if exists Transactions;
CREATE TABLE Transactions(
Payment_ID VARCHAR(100) NOT NULL PRIMARY KEY,
Amount DOUBLE,
Date DATETIME NOT NULL,
Status VARCHAR(100) NOT NULL DEFAULT 'PROCESSED'
);

INSERT INTO Transactions(Payment_ID, Amount, Date, Status)
VALUES
('10010201102040111CC', 3000, STR_TO_DATE("01-01-2022 20:40:10", "%m-%d-%Y %H:%i:%s"), 'PROCESSED'),
('100102030101000211CX', 11000, STR_TO_DATE("11-17-2021 13:10:05", "%m-%d-%Y %H:%i:%s"), 'PROCESSED'),
('100102010204010100CC', 4400, STR_TO_DATE("03-14-2021 18:01:20", "%m-%d-%Y %H:%i:%s"), 'PROCESSED'),
('100102030301000100CX', 7200, STR_TO_DATE("10-17-2000 11:56:10", "%m-%d-%Y %H:%i:%s"), 'PROCESSED'),
('100102020501010111CX', 71000, STR_TO_DATE("01-02-2022 09:10:10", "%m-%d-%Y %H:%i:%s"), 'PROCESSED'),
('100102020501010211CX', 64000, STR_TO_DATE("02-02-2022 12:05:01", "%m-%d-%Y %H:%i:%s"), 'PROCESSED'),
('100202020202010111CX', 92500, STR_TO_DATE("02-12-2022 22:10:20", "%m-%d-%Y %H:%i:%s"), 'PROCESSED'),
('100202010705020101CC', 4300, STR_TO_DATE("06-08-2020 00:15:51", "%m-%d-%Y %H:%i:%s"), 'PROCESSED'),
('100302010404050101CC', 7375, STR_TO_DATE("04-05-2021 04:48:20", "%m-%d-%Y %H:%i:%s"), 'PROCESSED'),
('100302030403000200CX', 1000, STR_TO_DATE("04-05-2021 01:43:15", "%m-%d-%Y %H:%i:%s"), 'PROCESSED'),
('100302010404050301CC', 72000, STR_TO_DATE("04-21-2021 03:34:10", "%m-%d-%Y %H:%i:%s"), 'PROCESSED'),
('100402020304010111CX', 160000, STR_TO_DATE("08-21-2020 16:39:20", "%m-%d-%Y %H:%i:%s"), 'PROCESSED'),
('100402030104000100CX', 8000, STR_TO_DATE("02-11-2022 17:35:10", "%m-%d-%Y %H:%i:%s"), 'PROCESSED'),
('100402030204000100CX', -6700, STR_TO_DATE("10-27-2020 19:21:16", "%m-%d-%Y %H:%i:%s"), 'PROCESSED'),
('100502020105010100CX', 20000, STR_TO_DATE("01-10-2022 21:18:28", "%m-%d-%Y %H:%i:%s"), 'PROCESSED'),
('100502010205050110CC', 11000, STR_TO_DATE("02-14-2019 07:01:01", "%m-%d-%Y %H:%i:%s"), 'PROCESSED'),
('100502030305000100CX', -5000000, STR_TO_DATE("11-18-2021 10:26:26", "%m-%d-%Y %H:%i:%s"), 'FAILED'),
('100502020505010100CX', 160000, STR_TO_DATE("05-26-2020 15:20:49", "%m-%d-%Y %H:%i:%s"), 'PROCESSED'),
('100502010503020200CC', 3800, STR_TO_DATE("06-23-2021 19:01:56", "%m-%d-%Y %H:%i:%s"), 'PROCESSED'),
('100502030805000100CX', -57000, STR_TO_DATE("12-10-2019 10:48:19", "%m-%d-%Y %H:%i:%s"), 'FAILED');

-- DELIMITER $$

-- CREATE TRIGGER young3 BEFORE INSERT ON Transactions
-- FOR EACH ROW BEGIN
--       IF((select A.LoanStatus from Accounts A, Transactions T where (substring(T.Transaction_ID,1,4) = substring(A.Account_No,1,4) AND substring(T.Transaction_ID,7,8) = substring(A.Account_No,11,12) AND ((T.Transaction_ID like ________________1___ AND substring(A.Account_No,7,8) = '01') OR (T.Transaction_ID like ________________0___ AND substring(A.Account_No,7,8) = '00')))) = 'DEFAULTER' OR (select A.LoanStatus from Accounts A, Transactions T where (substring(T.Transaction_ID,1,4) = substring(A.Account_No,1,4) AND substring(T.Transaction_ID,7,8) = substring(A.Account_No,11,12) AND ((T.Transaction_ID like ________________1___ AND substring(A.Account_No,7,8) = '01') OR (T.Transaction_ID like ________________0___ AND substring(A.Account_No,7,8) = '00')))) = 'PENDING')
-- 		THEN rollback;
-- 	  END IF;
--       IF (New.Amount > (select A.Balance from Accounts A, Transactions T where (substring(T.Transaction_ID,1,4) = substring(A.Account_No,1,4) AND substring(T.Transaction_ID,7,8) = substring(A.Account_No,11,12) AND ((T.Transaction_ID like ________________1___ AND substring(A.Account_No,7,8) = '01') OR (T.Transaction_ID like ________________0___ AND substring(A.Account_No,7,8) = '00')))))
--             THEN set New.Status = 'FAILED';
--       END IF;
--       IF (New.Amount <= (select A.Balance from Accounts A, Transactions T where (substring(T.Transaction_ID,1,4) = substring(A.Account_No,1,4) AND substring(T.Transaction_ID,7,8) = substring(A.Account_No,11,12) AND ((T.Transaction_ID like ________________1___ AND substring(A.Account_No,7,8) = '01') OR (T.Transaction_ID like ________________0___ AND substring(A.Account_No,7,8) = '00')))))
--             THEN UPDATE Accounts set Accounts.Balance = Accounts.Balance - New.Amount 
--             where (select A.Balance from Accounts A, Transactions T where (substring(T.Transaction_ID,1,4) = substring(A.Account_No,1,4) AND substring(T.Transaction_ID,7,8) = substring(A.Account_No,11,12) AND ((T.Transaction_ID like ________________1___ AND substring(A.Account_No,7,8) = '01') OR (T.Transaction_ID like ________________0___ AND substring(A.Account_No,7,8) = '00'))));
--       END IF;
--     END$$

-- DELIMITER ;


