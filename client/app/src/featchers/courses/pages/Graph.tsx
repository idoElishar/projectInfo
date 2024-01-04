import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';

export default function Statistic() {
    const gradeData = [
        { gradeRange: '0-59', studentCount: 5 },
        { gradeRange: '60-69', studentCount: 10 },
        { gradeRange: '70-79', studentCount: 15 },
        { gradeRange: '80-89', studentCount: 20 },
        { gradeRange: '90-100', studentCount: 25 }
    ];

    return (
        <Box sx={{
            marginTop: '10vh',
            background: '#f0f0f0', 
            border: '2px solid yellow',
            width: '50%',
        }}>
            <Grid container spacing={2} sx={{
                width: '100%',
                border: '2px solid blue',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#f0f0f0' 
            }}>
                <Grid item xs={12} md={8}>
                    <Typography variant="h4" gutterBottom sx={{
                        textAlign: 'center',
                        marginBottom: '1rem',
                        background: '#f0f0f0'
                    }}>
                        Student Grades Distribution
                    </Typography>
                    <ResponsiveContainer width="100%" height={500}>
                        <BarChart
                            data={gradeData}
                            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f5" />
                            <XAxis dataKey="gradeRange" stroke="#333" />
                            <YAxis stroke="#333" />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="studentCount" fill="blue" />
                        </BarChart>
                    </ResponsiveContainer>
                </Grid>
            </Grid>
        </Box>
        
        
    );
}
