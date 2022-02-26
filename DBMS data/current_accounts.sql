drop table Current_Accounts;
CREATE TABLE Current_Accounts(
AccountNo VARCHAR(100) NOT NULL PRIMARY KEY,
Balance DOUBLE,
BusinessName VARCHAR(200),
FOREIGN KEY (AccountNo) REFERENCES Accounts(AccountNo)
);

INSERT INTO Current_Accounts(AccountNo, Balance) SELECT AccountNo, Balance from Accounts where AccountNo like '______01____';
INSERT INTO Current_Accounts(BusinessName) VALUES ('ABC');
INSERT INTO Current_Accounts(BusinessName) VALUES ('QWE');
INSERT INTO Current_Accounts(BusinessName) VALUES ('WER');
INSERT INTO Current_Accounts(BusinessName) VALUES ('TRV');
INSERT INTO Current_Accounts(BusinessName) VALUES ('IOL');
INSERT INTO Current_Accounts(BusinessName) VALUES ('IOP');
INSERT INTO Current_Accounts(BusinessName) VALUES ('LKJ');
INSERT INTO Current_Accounts(BusinessName) VALUES ('ASD');
INSERT INTO Current_Accounts(BusinessName) VALUES ('CVB');
INSERT INTO Current_Accounts(BusinessName) VALUES ('BNM');
INSERT INTO Current_Accounts(BusinessName) VALUES ('PLM');
INSERT INTO Current_Accounts(BusinessName) VALUES ('QAZ');
INSERT INTO Current_Accounts(BusinessName) VALUES ('SKY');
INSERT INTO Current_Accounts(BusinessName) VALUES ('QWE');
INSERT INTO Current_Accounts(BusinessName) VALUES ('OPA');
INSERT INTO Current_Accounts(BusinessName) VALUES ('SDF');
INSERT INTO Current_Accounts(BusinessName) VALUES ('DFG');
INSERT INTO Current_Accounts(BusinessName) VALUES ('GHJ');
INSERT INTO Current_Accounts(BusinessName) VALUES ('KHI');
INSERT INTO Current_Accounts(BusinessName) VALUES ('SDF');
INSERT INTO Current_Accounts(BusinessName) VALUES ('JIN');