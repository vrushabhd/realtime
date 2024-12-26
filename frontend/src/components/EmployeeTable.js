import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
} from '@mui/material';

const EmployeeTable = ({ employees, onEdit }) => (
    <TableContainer
        component={Paper}
        sx={{
            margin: '20px auto',
            maxWidth: 800,
            boxShadow: 4,
            borderRadius: 2,
        }}
    >
        <Table>
            <TableHead>
                <TableRow sx={{ backgroundColor: 'primary.main' }}>
                    <TableCell sx={{ color: 'white' }}>Name</TableCell>
                    <TableCell sx={{ color: 'white' }}>Productivity</TableCell>
                    <TableCell sx={{ color: 'white' }}>Collaboration</TableCell>
                    <TableCell sx={{ color: 'white' }}>Communication</TableCell>
                    <TableCell sx={{ color: 'white' }}>Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {employees.map((employee) => (
                    <TableRow
                        key={employee.id}
                        sx={{
                            '&:nth-of-type(odd)': { backgroundColor: '#f7f9fc' },
                            '&:hover': { backgroundColor: '#e3f2fd' },
                        }}
                    >
                        <TableCell>{employee.name}</TableCell>
                        <TableCell>{employee.productivity}</TableCell>
                        <TableCell>{employee.collaboration}</TableCell>
                        <TableCell>{employee.communication}</TableCell>
                        <TableCell>
                            <Button
                                variant="outlined"
                                color="primary"
                                onClick={() => onEdit(employee)}
                                sx={{ '&:hover': { backgroundColor: 'secondary.main', color: 'white' } }}
                            >
                                Edit
                            </Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
);

export default EmployeeTable;
