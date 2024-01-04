import React from 'react';
import styled from 'styled-components';
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';

interface StyledGridItemProps {
    md?: number;
}

const gradeData = [
    { gradeRange: '0-59', studentCount: 4 },
    { gradeRange: '60-69', studentCount: 7 },
    { gradeRange: '70-79', studentCount: 13 },
    { gradeRange: '80-89', studentCount: 10 },
    { gradeRange: '90-100', studentCount: 5 }
];

const StyledBox = styled.div`
    margin-top: 1vh;
    background: #f0f0f0; 
    width: 140%;
`;

const StyledGridContainer = styled.div`
    display: flex;
    // align-items: center;
    // justify-content: center;
    background: #f0f0f0; 
    width: 100%;
`;

const StyledGridItem = styled.div<StyledGridItemProps>`
    flex-basis: ${props => props.md ? (props.md / 12 * 100) + '%' : '100%'};
`;

const StyledTypography = styled.div`
    text-align: center;
    margin-bottom: 1rem;
    background: #f0f0f0;
    font-size: 1.5rem;
    color: #323232;

font-family: Roboto;
font-style: italic;
line-height: normal;
`;

const Statistic: React.FC = () => {
    return (
        <StyledBox>
            <StyledGridContainer>
                <StyledGridItem md={8} >
                    <StyledTypography>
                        Student Grades Distribution
                    </StyledTypography>
                    <ResponsiveContainer width="100%" height={500}>
                        <BarChart data={gradeData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f5" />
                            <XAxis dataKey="gradeRange" stroke="#333" />
                            <YAxis stroke="#333" />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="studentCount" fill="blue" />
                        </BarChart>
                    </ResponsiveContainer>
                </StyledGridItem>
            </StyledGridContainer>
        </StyledBox>
    );
}

export default Statistic;
