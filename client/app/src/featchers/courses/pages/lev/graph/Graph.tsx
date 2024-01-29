import React from 'react';
import styled from 'styled-components';
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';

const gradeData = [
    { gradeRange: '0-59', studentCount: 4 },
    { gradeRange: '60-69', studentCount: 7 },
    { gradeRange: '70-79', studentCount: 13 },
    { gradeRange: '80-89', studentCount: 10 },
    { gradeRange: '90-100', studentCount: 5 }
];

const StyledBox = styled.div`
    // margin-top: 2vh;
    background-color: #f0f0f0;
    padding: 2rem;
    border-radius: 10px; // פינות מעוגלות
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.05); // צל עדין
    width: 93%;
    height: 70%;
    // border:2px solid green;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

const StyledGridContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f0f0f0;
    `;

const StyledGridItem = styled.div`
    flex-basis: 100%; // מתאים לרוחב מלא
    background-color: #f0f0f0;

`;

const StyledTypography = styled.div`
    text-align: center;
    margin-bottom: 1rem;
    font-size: 2rem; // גודל פונט גדול יותר
    // color: #333333; // צבע כהה יותר לקריאות טובה יותר
    font-family: 'Helvetica Neue', sans-serif;
    font-weight: bold;
`;

const Statistic = () => {
    return (
        <StyledBox>
            <StyledGridContainer>
                <StyledGridItem>
                    <StyledTypography>
                    Distribution of student grades
                    </StyledTypography>
                    <ResponsiveContainer width="100%" height={500}>
                        <BarChart data={gradeData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#e3e3e3" />
                            <XAxis dataKey="gradeRange" stroke="#333333" />
                            <YAxis stroke="#333333" />
                            <Tooltip wrapperStyle={{ borderColor: 'white', boxShadow: '0 0 10px rgba(0, 0, 0, 0.05)' }}/>
                            <Legend />
                            <Bar dataKey="studentCount" fill="#6daedb" /> 
                        </BarChart>
                    </ResponsiveContainer>
                </StyledGridItem>
            </StyledGridContainer>
        </StyledBox>
    );
}

export default Statistic;
