drop table Accounts;
CREATE TABLE Accounts(
AccountNo VARCHAR(100) NOT NULL PRIMARY KEY,
LoanStatus varchar(100) DEFAULT 'NULL',
Balance DOUBLE,
Customer_ID varchar(100) NOT NULL,
FOREIGN KEY (Customer_ID) REFERENCES Customers(Customer_ID)
);
INSERT INTO Accounts(AccountNo, Customer_ID, LoanStatus, Balance)
VALUES
('100101010001', '1003040001', 'NULL', 100000),
('100101000002', '1004040004', 'NULL', 21000),
('100101000003', '1001040005', 'NULL', 50000),
('100101010004', '1002040002', 'OKAY', 77000),
('100101010005', '1005040001', 'OKAY', 1000000),
('100101000006', '1001040001', 'NULL', 25000),
('100101000007', '1003040002', 'OKAY', 1000),
('100101000008', '1002040003', 'OKAY', 37000),
('100201000001', '1005040004', 'PENDING', 13000),
('100201010002', '1004040005', 'OKAY', 110000),
('100201000003', '1002040001', 'DEFAULTER', 72000),
('100201010004', '1001040002', 'NULL', 7000),
('100201000005', '1003040003', 'PENDING', 100700),
('100201010006', '1005040004', 'PENDING', 250000),
('100201000007', '1005040005', 'NULL', 41000),
('100201000008', '1004040001', 'OKAY', 3000),
('100301000001', '1005040002', 'NULL', 66000),
('100301000002', '1001040003', 'OKAY', 11700),
('100301000003', '1003040004', 'NULL', 72006),
('100301000004', '1001040003', 'NULL', 773),
('100301010005', '1001040004', 'NULL', 78543),
('100301010006', '1002040004', 'PAID', 25000),
('100301000007', '1002040005', 'DEFAULTER', 41600),
('100301010008', '1004040002', 'NULL', 43000),
('100401000001', '1005040003', 'NULL', 8000),
('100401000002', '1004040003', 'NULL', 6700),
(100401000003, '1002040002', 'NULL', 2306),
('100401010004', '1004040002', 'NULL', 54000),
('100401010005', '1001040005', 'DEFAULTER', 99000),
('100401010006', '1001040005', 'NULL', 500000),
('100401000007', '1001040003', 'OKAY', 1100000),
('100401000008', '1001040001', 'NULL', 76000),
('100501000001', '1005040005', 'PENDING', 4270),
('100501010002', '1005040001', 'NULL', 88300),
('100501000003', '1003040005', 'DEFAULTER', 5000),
('100501000004', '1003040004', 'PAID', 45000),
('100501000005', '1004040005', 'PAID', 13570),
('100501000006', '1004040001', 'NULL', 12000),
('100501000007', '1004040005', 'OKAY', 40000),
('100501000008', '1003040001', 'DEFAULTER', 60000);