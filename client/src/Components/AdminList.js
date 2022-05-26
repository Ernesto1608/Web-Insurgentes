import * as React from 'react';
import {useEffect, useState} from "react";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import logout from "../imagenes/logout.png";
const axios = require("axios");

export default function AdminList(props) {
    const [rows, setRows] = useState([]);  

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

    const getEvents = async () => {
        let response = await axios({
            url: `https://web-insurgentes-api.herokuapp.com/eventos`,
            method: "GET",
        });
        setRows(response.data);
    }

    const getAlbums = async () => {
        let response = await axios({
            url: `https://web-insurgentes-api.herokuapp.com/album`,
            method: "GET",
        });
        setRows(response.data);
    }
    
    const getData = async () => {
        if (props.mode === "events")
            await getEvents();
        else 
            await getAlbums();
    }

    const deleteItem = async (row) => {
        if (props.mode === "events"){
            await axios({
                url: `https://web-insurgentes-api.herokuapp.com/eventos/${row._id}`,
                method: "DELETE",
            });
        } else {
            await axios({
                url: `https://web-insurgentes-api.herokuapp.com/album/${row._id}`,
                method: "DELETE",
            });
        }
        getData();
    }
    

    useEffect(() => {
        getData();
    },[props]);

    if(props.mode === "events"){
        return (
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                <TableRow>
                    <StyledTableCell>Fecha</StyledTableCell>
                    <StyledTableCell>Lugar</StyledTableCell>
                    <StyledTableCell>Tickets</StyledTableCell>
                    <StyledTableCell>Delete</StyledTableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <StyledTableRow key={row._id}>
                    <StyledTableCell component="th" scope="row">
                        {row.fecha}
                    </StyledTableCell>
                    <StyledTableCell>{row.lugar}</StyledTableCell>
                    <StyledTableCell>{row.link}</StyledTableCell>
                    <StyledTableCell><img src={logout} alt="logo" width="30" height="auto" class="d-inline-block align-text-top" onClick={(e) => {deleteItem(row)}}></img></StyledTableCell>
                    </StyledTableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
        );
    }

    return (
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
            <TableRow>
                <StyledTableCell>Título</StyledTableCell>
                <StyledTableCell>Descripción</StyledTableCell>
                <StyledTableCell>URL Foto</StyledTableCell>
                <StyledTableCell>Canciones</StyledTableCell>
                <StyledTableCell>Delete</StyledTableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <StyledTableRow key={row._id}>
                <StyledTableCell component="th" scope="row">
                    {row.title}
                </StyledTableCell>
                <StyledTableCell>{row.description}</StyledTableCell>
                <StyledTableCell>{row.urls}</StyledTableCell>
                <StyledTableCell>{row.songs}</StyledTableCell>
                <StyledTableCell><img src={logout} alt="logo" width="30" height="auto" class="d-inline-block align-text-top" onClick={(e) => {deleteItem(row)}}></img></StyledTableCell>
                </StyledTableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    );
}