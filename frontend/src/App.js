import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EmployeeTable from './components/EmployeeTable';
import EmployeeForm from './components/EmployeeForm';
import PerformanceSummary from './components/PerformanceSummary';
import { ThemeProvider, CssBaseline, Box, Typography } from '@mui/material'; // Import additional components
import theme from './theme';

const App = () => {
    const [employees, setEmployees] = useState([]);
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:5000/employees').then((response) => {
            setEmployees(response.data);
        });
    }, []);

    const handleEdit = (employee) => {
        setSelectedEmployee(employee);
    };

    const handleSave = (updatedMetrics) => {
        axios
            .put(`http://localhost:5000/employees/${selectedEmployee.id}`, updatedMetrics)
            .then(() => {
                setEmployees((prev) =>
                    prev.map((emp) =>
                        emp.id === selectedEmployee.id ? { ...emp, ...updatedMetrics } : emp
                    )
                );
                setSelectedEmployee(null);
            });
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '100vh',
                    backgroundColor: 'background.default',
                    padding: 4,
                }}
            >
                <Typography
                    variant="h2"
                    color="primary"
                    align="center"
                    sx={{
                        marginBottom: 4,
                        fontWeight: 'bold',
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
                    }}
                >
                    Real-Time Feedback Dashboard
                </Typography>
                <Box
                    sx={{
                        width: '100%',
                        maxWidth: 1200,
                        backgroundColor: 'background.paper',
                        borderRadius: 3,
                        boxShadow: 6,
                        padding: 4,
                    }}
                >
                    <EmployeeTable employees={employees} onEdit={handleEdit} />
                    {selectedEmployee && (
                        <EmployeeForm
                            selectedEmployee={selectedEmployee}
                            onSave={handleSave}
                        />
                    )}
                    <PerformanceSummary employees={employees} />
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default App;
