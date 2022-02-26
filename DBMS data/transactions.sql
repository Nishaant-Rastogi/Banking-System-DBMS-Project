drop table Transactions;
CREATE TABLE Transactions(
Payment_ID VARCHAR(100) NOT NULL PRIMARY KEY,
Amount DOUBLE,
Date DATETIME NOT NULL,
Status VARCHAR(100) NOT NULL
);
INSERT INTO Transactions(Payment_ID, Amount, Date, Status)
VALUES
('1001020101020401', 3000, STR_TO_DATE("01-01-2022 20:40:10", "%m-%d-%Y %H:%i:%s"), 'PROCESSED'),
('1001020301010002', 11000, STR_TO_DATE("11-17-2021 13:10:05", "%m-%d-%Y %H:%i:%s"), 'PROCESSED'),
('1001020102040101', 4400, STR_TO_DATE("03-14-2021 18:01:20", "%m-%d-%Y %H:%i:%s"), 'PROCESSED'),
('1001020303010001', 7200, STR_TO_DATE("10-17-2000 11:56:10", "%m-%d-%Y %H:%i:%s"), 'PROCESSED'),
('1001020205010001', 71000, STR_TO_DATE("01-02-2022 09:10:10", "%m-%d-%Y %H:%i:%s"), 'PROCESSED'),
('1001020205010002', 64000, STR_TO_DATE("02-02-2022 12:05:01", "%m-%d-%Y %H:%i:%s"), 'PROCESSED'),
('1002020202020001', 92500, STR_TO_DATE("02-12-2022 22:10:20", "%m-%d-%Y %H:%i:%s"), 'PROCESSED'),
('1002020107050201', 4300, STR_TO_DATE("06-08-2020 00:15:51", "%m-%d-%Y %H:%i:%s"), 'PROCESSED'),
('1003020104040501', 7375, STR_TO_DATE("04-05-2021 04:48:20", "%m-%d-%Y %H:%i:%s"), 'PROCESSED'),
('1003020304030002', 1000, STR_TO_DATE("04-05-2021 01:43:15", "%m-%d-%Y %H:%i:%s"), 'PROCESSED'),
('1003020104040503', 72000, STR_TO_DATE("04-21-2021 03:34:10", "%m-%d-%Y %H:%i:%s"), 'PROCESSED'),
('1003020206030001', 160000, STR_TO_DATE("08-21-2020 16:39:20", "%m-%d-%Y %H:%i:%s"), 'PROCESSED'),
('1004020301040001', 8000, STR_TO_DATE("02-11-2022 17:35:10", "%m-%d-%Y %H:%i:%s"), 'PROCESSED'),
('1004020302040001', -6700, STR_TO_DATE("10-27-2020 19:21:16", "%m-%d-%Y %H:%i:%s"), 'PROCESSED'),
('1005020201050001', 20000, STR_TO_DATE("01-10-2022 21:18:28", "%m-%d-%Y %H:%i:%s"), 'PROCESSED'),
('1005020102050501', 11000, STR_TO_DATE("02-14-2019 07:01:01", "%m-%d-%Y %H:%i:%s"), 'PROCESSED'),
('1005020303050001', -500, STR_TO_DATE("11-18-2021 10:26:26", "%m-%d-%Y %H:%i:%s"), 'FAILED'),
('1005020205050001', 160000, STR_TO_DATE("05-26-2020 15:20:49", "%m-%d-%Y %H:%i:%s"), 'PROCESSED'),
('1005020105030202', 3800, STR_TO_DATE("06-23-2021 19:01:56", "%m-%d-%Y %H:%i:%s"), 'PROCESSED'),
('1005020308050001', -57000, STR_TO_DATE("12-10-2019 10:48:19", "%m-%d-%Y %H:%i:%s"), 'FAILED');