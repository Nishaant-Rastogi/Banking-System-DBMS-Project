drop table Branches;
CREATE TABLE Branches(
Branch_ID bigint NOT NULL PRIMARY KEY,
Branch_Name VARCHAR(100) NOT NULL,
Address VARCHAR(100) NOT NULL
);
INSERT INTO Branches(Branch_ID, Branch_Name, Address)
VALUES
(
1001, 'DelBank Punjabi Bagh', 'Delhi'
);
INSERT INTO Branches(Branch_ID, Branch_Name, Address)
VALUES
(
1002, 'DelBank New Delhi', 'New Delhi'
);
INSERT INTO Branches(Branch_ID,Branch_Name, Address)
VALUES
(
1003, 'DelBank Delhi-6', 'Delhi-6'
);
INSERT INTO Branches(Branch_ID, Branch_Name, Address)
VALUES
(
1004, 'DelBank Connaught Place', 'New Delhi'
);
INSERT INTO Branches(Branch_ID, Branch_Name, Address)
VALUES
(
1005, 'DelBank Harkesh Nagar', 'Delhi'
);

