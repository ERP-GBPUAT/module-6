import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs,year) {
  return { name, calories, fat, carbs,year };
}

const rows= [
  createData('udit', 159, 6.0, 24,1),
  createData('abhay', 237, 9.0, 37,1),
  createData('surya', 262, 16.0, 24,1),
  createData('aman', 262, 16.0, 24,1),
  createData('nitin', 159, 6.0, 24,2),
  createData('sahil', 237, 9.0, 37,2),
  createData('rohit', 262, 16.0, 24,2),
  createData('rajat', 262, 16.0, 24,2),
  createData('sneha', 159, 6.0, 24,3),
  createData('vartika', 237, 9.0, 37,3),
  createData('swecha', 262, 16.0, 24,3),
  createData('bkb', 262, 16.0, 24,3),
  createData('shivansh', 159, 6.0, 24,4),
  createData('vasu', 237, 9.0, 37,4),
  createData('yadav', 237, 9.0, 37,4),
  createData('nishu', 262, 16.0, 24,4)]


export default function AccessibleTable({year}) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <caption>A basic table example with a caption</caption>
        <TableHead>
          <TableRow>
            
            <TableCell>Subject Code</TableCell>
            <TableCell align="right">Subject Name</TableCell>
            <TableCell align="right">Marks&nbsp;(g)</TableCell>
            <TableCell align="right">Total Marks&nbsp;(g)</TableCell>
            {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.filter(student=>student.year==year).map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}