drop table Customers;
CREATE TABLE Customers(
Customer_ID VARCHAR(100) NOT NULL PRIMARY KEY,
Name VARCHAR(100) NOT NULL,
Age int NOT NULL,
HouseNo VARCHAR(20) NOT NULL,
Locality VARCHAR(100) NOT NULL,
City VARCHAR(50) NOT NULL,
ContactNo bigint NOT NULL,
PAN varchar(30) NOT NULL,
Password VARCHAR(100) NOT NULL
);
INSERT INTO Customers(Customer_ID, Name, Age, Address, ContactNo, Password)
VALUES
('1001040001', 'Vasant Kumar', 27, '54', 'Defense Colony', 'Delhi', '9999900001', 'A501C0101', 'aabbcc'),
('1001040002', 'Shobha Dutta', 24, '1756', 'Chatrapur', 'Delhi', '8999900001', 'A456C0102', 'bbccaa'),
('1001040003', 'Anupam Mittal', 40, '25', 'Lotus Towers', 'Gurgaon', '8888800001', 'A645C0103','ccbbaa'),
('1001040004', 'Zoya Khan', 26, '75', 'Greater Kailash', 'Delhi', '8999900022', 'Q576C0104','aaccbb'),
('1001040005', 'Shivaansh Mittal', 24, '14', 'Sector A Vasant Kunj', 'Delhi', '8999907856', 'A789C0105','ccaabb'),
('1002040001', 'Ayush Garg', 32, '2564', 'Defense Colony', 'Delhi', '89787900001', 'K981C0201', 'bbaacc'),
('1002040002', 'Balwinder Singh', 56, '1228', 'Malviya Nagar', 'Delhi', '7562980001', 'A182C0202','ddeeff'),
('1002040003', 'Mohammad Umar', 18, '567', 'Gulmohar Park', 'Delhi', '8888888881', 'A912C0203', 'ddffee'),
('1002040004', 'Shamita Arora', 29, '102', 'Gulmohar Park', 'Delhi', '6789898777', 'A681C0204', 'eeddff'),
('1002040005', 'Monika Jain', 24, '244', 'Preet Vihar', 'Delhi', '8999911111', 'K820C0205', 'eeffdd'),
('1003040001', 'Jaspreet Singh', 37, '29', 'Punjabi Bagh', 'Delhi', '8978792301', 'P701C0301', 'ffeedd'),
('1003040002', 'Chayan Manchanda', 22, '588', 'Punjabi Bagh', 'Delhi', '7562984801', 'L911C0302', 'ffddee'),
('1003040003', 'Shafique Khan', 20, 'C-4', 'Janakpuri', 'Delhi', '9998888881', 'G718C0303', 'gghhii'),
('1003040004', 'Arijit Chauhan', 36, '172', 'Paschim Vihar', 'Delhi', '6785598777', 'H516C0304', 'ggiihh'),
('1003040005', 'Harjeet Keswani', 19, '392', 'Harkesh Nagar', 'Delhi', '8959900005', 'Y520C0305', 'iihhgg'),
('1004040001', 'Harkrishan Kumar', 31, '1008', 'Harkesh Nagar', 'Delhi', '8978755301', 'M703C0401', 'iigghh'),
('1004040002', 'Rupanshu Saxena', 48, 'D-56', 'Dwarka Sub City', 'Delhi', '7562955501', 'N810C0402', 'hhggii'),
('1004040003', 'Amrita Saini', 30, '588', 'Kirti Nagar', 'Delhi', '9998778881', 'I517C0403','hhiigg'),
('1004040004', 'Keshav Ahluwalia', 26, '277' ,'Paschim Vihar', 'Delhi', '6785522277', 'K112C0404', 'jjkkll'),
('1004040005', 'Mohammad Aadil', 19, '1002', 'Punjabi Bagh', 'Delhi', '8959342005', 'A304C0405', 'jjllkk'),
('1005040001', 'James Cahn', 68, '1753', 'Civil Lines', 'Delhi', '8926545301', 'C915C0501', 'kkjjll'),
('1005040002', 'Arpita Kumari', 27, '762', 'Lajpat Nagar', 'Delhi', '7562957771', 'J814C0502', 'kklljj'),
('1005040003', 'Rakesh Puri', 33, '762', 'Kirti Nagar', 'Delhi', '9998002481', 'R019C0503', 'llkkjj'),
('1005040004', 'Ranjit Singh', 26, '433', 'Chanakyapuri', 'Delhi', '6785521137', 'Q505C0504', 'lljjkk'),
('1005040005', 'Mohammad Aazan', 44, 'E-52', 'Gandhi Nagar', 'Delhi', '8959369005', 'P021C0505', 'aabbccc');
