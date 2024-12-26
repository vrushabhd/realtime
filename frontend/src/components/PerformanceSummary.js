import React from 'react';
import { Box, Typography } from '@mui/material';

const PerformanceSummary = ({ employees }) => {
    const calculateAverage = (key) => {
        const total = employees.reduce((sum, emp) => sum + emp[key], 0);
        return (total / employees.length).toFixed(2);
    };

    return (
        <Box
            sx={{
                backgroundColor: 'background.paper',
                border: 1,
                borderColor: 'divider',
                borderRadius: 2,
                padding: 3,
                maxWidth: 400,
                margin: '0 auto',
                boxShadow: 4,
            }}
        >
            <Typography variant="h5" align="center" color="primary" gutterBottom>
                Performance Summary
            </Typography>
            <Typography variant="body1" color="text.secondary" gutterBottom>
                Average Productivity: {calculateAverage('productivity')}
            </Typography>
            <Typography variant="body1" color="text.secondary" gutterBottom>
                Average Collaboration: {calculateAverage('collaboration')}
            </Typography>
            <Typography variant="body1" color="text.secondary" gutterBottom>
                Average Communication: {calculateAverage('communication')}
            </Typography>
        </Box>
    );
};

export default PerformanceSummary;
