drop table Branches;
CREATE TABLE Branches(
Branch_ID bigint NOT NULL PRIMARY KEY,
Branch_Name VARCHAR(100) NOT NULL,
Address VARCHAR(100) NOT NULL
);
INSERT INTO Branches(Branch_ID, Branch_Name, Address)
VALUES
(
1001, 'DANK Punjabi Bagh', 'Delhi'
);
INSERT INTO Branches(Branch_ID, Branch_Name, Address)
VALUES
(
1002, 'DANK New Delhi', 'New Delhi'
);
INSERT INTO Branches(Branch_ID,Branch_Name, Address)
VALUES
(
1003, 'DANK Delhi-6', 'Delhi-6'
);
INSERT INTO Branches(Branch_ID, Branch_Name, Address)
VALUES
(
1004, 'DANK Connaught Place', 'New Delhi'
);
INSERT INTO Branches(Branch_ID, Branch_Name, Address)
VALUES
(
1005, 'DANK Harkesh Nagar', 'Delhi'
);

