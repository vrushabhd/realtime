import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

const EmployeeForm = ({ selectedEmployee, onSave }) => {
    const [productivity, setProductivity] = useState(selectedEmployee.productivity || '');
    const [collaboration, setCollaboration] = useState(selectedEmployee.collaboration || '');
    const [communication, setCommunication] = useState(selectedEmployee.communication || '');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({ productivity, collaboration, communication });
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                maxWidth: 400,
                margin: '20px auto',
                padding: 3,
                boxShadow: 4,
                borderRadius: 2,
                backgroundColor: 'background.paper',
            }}
        >
            <Typography variant="h5" align="center" color="primary">
                Edit Employee Performance
            </Typography>
            <TextField
                label="Productivity"
                type="number"
                value={productivity}
                onChange={(e) => setProductivity(Number(e.target.value))}
                fullWidth
            />
            <TextField
                label="Collaboration"
                type="number"
                value={collaboration}
                onChange={(e) => setCollaboration(Number(e.target.value))}
                fullWidth
            />
            <TextField
                label="Communication"
                type="number"
                value={communication}
                onChange={(e) => setCommunication(Number(e.target.value))}
                fullWidth
            />
            <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ '&:hover': { backgroundColor: 'secondary.main' } }}
            >
                Save
            </Button>
        </Box>
    );
};

export default EmployeeForm;
