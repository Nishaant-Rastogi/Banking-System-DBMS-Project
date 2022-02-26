drop table Branch_Account;
CREATE TABLE Branch_Account(
Branch_ID bigint NOT NULL,
AccountNo VARCHAR(100) NOT NULL,
PRIMARY KEY(Branch_ID, AccountNo)
);

INSERT INTO Branch_Account(Branch_ID, AccountNo) SELECT Branch_ID, AccountNo from Branches, Accounts where substring(Branch_ID, 1,4) = substring(AccountNo, 1, 4);