import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function BasicTable({ AcData }) {
    return (
        <>  
            {console.log(AcData)} 
            {AcData == null ? <div>No Accounts</div> :
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table" className="TABLE">
                        <TableHead>
                            <TableRow>
                                <TableCell ><p className="WHITE">Account No</p></TableCell>
                                <TableCell align="right"><p className="WHITE">Balance</p></TableCell>
                                <TableCell align="right"><p className="WHITE">Opening Date</p></TableCell>
                                <TableCell align="right"><p className="WHITE">Loan Status</p></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {AcData.map((row) => (
                                <TableRow
                                    key={row.Payment_ID}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                    <p className="WHITE">
                                        {row.AccountNo}
                                        </p>
                                    </TableCell>
                                    <TableCell align="right"><p className="WHITE">{row.Balance}</p></TableCell>
                                    <TableCell align="right"><p className="WHITE">{row.OpeningDate}</p></TableCell>
                                    <TableCell align="right"><p className="WHITE" id={row.LoanStatus}>{row.LoanStatus}</p></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>}
        </>
    );
}
