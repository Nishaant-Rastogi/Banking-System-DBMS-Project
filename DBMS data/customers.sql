create database IF NOT EXISTS DANKTHEBANK; -- age
use DANKTHEBANK;
drop table if exists Customers;
CREATE TABLE Customers(
Customer_ID VARCHAR(100) NOT NULL PRIMARY KEY,
Name VARCHAR(100) NOT NULL,
Age int NOT NULL,
HouseNo VARCHAR(20) NOT NULL,
Locality VARCHAR(100) NOT NULL,
City VARCHAR(50) NOT NULL,
ContactNo bigint NOT NULL,
PAN varchar(30),
Password VARCHAR(100) NOT NULL
);

create trigger young before update on Customers
for each row  
set
New.Age = New.Age + (DATEDIFF(CURDATE(), STR_TO_DATE("2022-01-01", "%Y-%m-%d"))/365);

-- create trigger young before insert on Customers
-- for each row  
-- set
-- New.Age = New.Age + (DATEDIFF(CURDATE(), STR_TO_DATE("2022-01-01", "%Y-%m-%d"))/365);


INSERT INTO Customers(Customer_ID, Name, Age, HouseNo, Locality, City, ContactNo, PAN, Password)
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
('1005040005', 'Mohammad Aazan', 44, 'E-52', 'Gandhi Nagar', 'Delhi', '8959369005', 'P021C0505', 'aabbccc'),
('1001E40001', 'Ravish Chatterjee', 51, '67', 'Parparganj', 'Delhi', '3434500101', 'A501E0101', 'zzyyxx'),
('1002E40002', 'Shaan Grover', 48, '3801', 'Punjabi Bagh', 'Delhi', '3434500202', 'A456E0102', 'zzxxyy'),
('1003E40003', 'Ravinder Singh', 57, '729', 'Lotus Towers Block C', 'Gurgaon', '3434500303', 'A645E0103','yyxxzz'),
('1004E40004', 'Amish Chaudhary', 44, '97', 'Greater Kailash Sector E', 'Delhi', '3434500404', 'Q576E0104','yyzzxx'),
('1005E40005', 'Vivek Bansal', 32, '42', 'Sector E Vasant Kunj', 'Delhi', '3434500505', 'A789E0105','xxzzyy'),
('1001E40006', 'Rampal Yadav', 56, '164', 'Defense Colony', 'Delhi', '3434500102', 'K981E0201', 'xxyyzz'),
('1001E40007', 'Ashish Jain', 35, '1228', 'Malviya Nagar', 'Delhi', '3434500103', 'A182E0202','uuvvww'),
('1001E40008', 'Vinay Dubey', 29, '677', 'Gulmohar Park', 'Delhi', '3434500104', 'A912E0203', 'uuwwvv'),
('1001E40009', 'Yash Chauhan', 26, '1212', 'Gulmohar Park', 'Delhi', '3434500105', 'A681E0204', 'vvwwuu'),
('1002E40010', 'Ankur Kanauj', 40, '2337', 'Malviya Nagar', 'Delhi', '3434500201', 'A182E0202','vvuuww'),
('1002E40011', 'Shankar Rastogi', 24, '5167', 'Gulmohar Park', 'Delhi', '3434500203', 'A912E0203', 'wwvvuu'),
('1002E40012', 'Mohammad Farhan', 28, '1002', 'Gulmohar Park', 'Delhi', '3434500204', 'A681E0204', 'wwvuvu'),
('1002E40013', 'Taheer Khan', 24, '324', 'Preet Vihar', 'Delhi', '3434500205', 'K820E0205', 'wwuuvv'),
('1003E40014', 'Johnny', 53, '5008', 'Punjabi Bagh', 'Delhi', '3434500301', 'L911E0302', 'ffaaee'),
('1003E40015', 'Mitanshi Setia', 34, 'F-4', 'Janakpuri', 'Delhi', '3434500302', 'G718E0303', 'bbhhii'),
('1003E40016', 'Abdul Sheikh', 31, '1072', 'Paschim Vihar', 'Delhi', '3434500304', 'H516E0304', 'cciihh'),
('1003E40017', 'Jesus', 60, '712', 'Harkesh Nagar', 'Delhi', '3434500305', 'Y520E0305', 'aahhgg'),
('1004E40018', 'Ankit Garg', 41, '808', 'Harkesh Nagar', 'Delhi', '3434500401', 'M703E0401', 'iicchh'),
('1004E40019', 'Shalini Vashisht', 38, 'B-56', 'Dwarka Sub City', 'Delhi', '3434500402', 'N810E0402', 'hhddii'),
('1004E40020', 'Lalit Gupta', 50, '138', 'Kirti Nagar', 'Delhi', '3434500403', 'I517E0403','aaiigg'),
('1004E40021', 'Anvesh Kumar', 33, '457' ,'Paschim Vihar', 'Delhi', '3434500405', 'K112E0404', 'bbkkll'),
('1005E40022', 'Sachin Ranade', 48, '859', 'Civil Lines', 'Delhi', '3434500501', 'C915E0501', 'aajjll'),
('1005E40023', 'Harsimar Kaur', 30, '940', 'Lajpat Nagar', 'Delhi', '3434500502', 'J814E0502', 'kkbbjj'),
('1005E40024', 'Vishnu Kumar', 36, '655', 'Kirti Nagar', 'Delhi', '3434500503', 'R019E0503', 'llkkcc'),
('1005E40025', 'Irfan Pathan', 43, '471', 'Chanakyapuri', 'Delhi', '3434500504', 'Q505E0504', 'lljddk');

-- Adding for a query on PAN Card with null value
INSERT INTO Customers(Customer_ID, Name, Age, HouseNo, Locality, City, ContactNo, PAN, Password)
VALUES
('1001040006','Ross Geller', 55,'12','Central Perk','New Delhi','4011678910',null,'Rsgllr'),
('1002040006','Rachel Green',53,'12','Central Perk','New Delhi','4011654320',null,'RclGrn'),
('1002040007','Emma Geller Green',15,'12','Central Perk','New Delhi','4011654320',null,'EmaGlr'),
('1003040006','Ben Geller',17,'12','Central Perk','New Delhi','4011678910',null,'BnGllr');