drop table Works;
CREATE TABLE Works(
Branch_ID bigint NOT NULL,
Employee_ID VARCHAR(100) NOT NULL,
PRIMARY KEY(Branch_ID, Employee_ID)
);

INSERT INTO Works(Branch_ID, Employee_ID) SELECT Branch_ID, Employee_ID from Branches B, Employees E where substring(Employee_ID, 1, 4) = substring(cast(Branch_ID as CHAR), 1, 4);