import * as React from 'react';
import "./Conciertos.css";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(fecha, lugar, link) {
  return { fecha, lugar, link };
}

const rows = [
  createData('Fecha 1', 'Lugar 1', 'Link 1'),
  createData('Fecha 2', 'Lugar 2', 'Link 2'),
  createData('Fecha 3', 'Lugar 3', 'Link 3'),
  createData('Fecha 4', 'Lugar 4', 'Link 4'),
  createData('Fecha 5', 'Lugar 5', 'Link 5'),
  createData('Fecha 6', 'Lugar 6', 'Link 6'),
  createData('Fecha 7', 'Lugar 7', 'Link 7'),
  createData('Fecha 8', 'Lugar 8', 'Link 8'),
  createData('Fecha 9', 'Lugar 9', 'Link 9'),
];

export default function Events() {
  return (
    <div className="Conciertos">
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Eventos</StyledTableCell>
            <StyledTableCell>Lugares</StyledTableCell>
            <StyledTableCell>Tickets</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.fecha}>
              <StyledTableCell component="th" scope="row">
                {row.fecha}
              </StyledTableCell>
              <StyledTableCell>{row.lugar}</StyledTableCell>
              <StyledTableCell>{row.link}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      </TableContainer>
    </div>
  );
}