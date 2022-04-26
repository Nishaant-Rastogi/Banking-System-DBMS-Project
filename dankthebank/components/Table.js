import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function BasicTable({ AcData, AccountNum }) {
    return (
        <>
            {AcData[AccountNum].length == 0 ? <h6>No transactions</h6> :
                <TableContainer component={Paper}>
                    {console.log("This is AC data")}
                    {console.log(AcData[AccountNum])}
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Payment ID</TableCell>
                                <TableCell align="right">Date</TableCell>
                                <TableCell align="right">Amount</TableCell>
                                <TableCell align="right">Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {AcData[AccountNum].map((row) => (
                                <TableRow
                                    key={row.Payment_ID}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.Payment_ID}
                                    </TableCell>
                                    <TableCell align="right">{row.Date}</TableCell>
                                    <TableCell align="right">{row.Amount}</TableCell>
                                    <TableCell align="right">{row.Status}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>}
        </>
    );
}
