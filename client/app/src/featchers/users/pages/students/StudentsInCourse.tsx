import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { students } from '../../../global/data/datastudents';
import { useNavigate, useParams } from 'react-router-dom';
import { Typography } from '@mui/material';

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
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
type Course = {
  name: string;
};
function createData(
  id: string,
  name: string,
  phone: string,
  address: string,
  email: string,
  courses: Course[]
) {
  return { id, name, phone, address, email, courses };
}


export default function CustomizedTables() {
  const  courseName  = useParams();
  console.log(courseName);
  console.log(students+" students");
  const navigate = useNavigate();

  const handleViewStudent = (id:string) => {
    navigate(`/student/${id}`);
};
  const fiterStudents = students.filter(student => student.courses.some(course => course.name == courseName.coursename))
  console.log(fiterStudents);
  
  const rows = fiterStudents.map(student =>
    createData(student._id.$oid, student.name, student.phone, student.address, student.email, student.courses)
  )
  return (
    <TableContainer component={Paper}>
    {/* Table Title */}
    <Typography 
  variant="h6" 
  component="div" 
  style={{ 
    margin: '20px', 
    textAlign: 'center', 
    color: '#3f51b5',
    fontWeight: 'bold', 
    padding: '10px',
    borderRadius: '5px', 
    backgroundColor: '#f3f3f3', 
  }}
>
  Students in course { courseName.coursename}
</Typography>

  
    <Table sx={{ minWidth: 700 }} aria-label="customized table">
      <TableHead>
        <TableRow>
          {/* Remove the title from here */}
          <StyledTableCell align="right">id</StyledTableCell>
          <StyledTableCell align="right">Name</StyledTableCell>
          <StyledTableCell align="right">Phone</StyledTableCell>
          <StyledTableCell align="right">Address</StyledTableCell>
          <StyledTableCell align="right">Email</StyledTableCell>
          <StyledTableCell align="right">Courses</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <StyledTableRow key={row.name} onClick={()=>handleViewStudent(row.id)}>
            <StyledTableCell align="right">{row.id}</StyledTableCell>
            <StyledTableCell align="right">{row.name}</StyledTableCell>
            <StyledTableCell align="right">{row.phone}</StyledTableCell>
            <StyledTableCell align="right">{row.address}</StyledTableCell>
            <StyledTableCell align="right">{row.email}</StyledTableCell>
            <StyledTableCell align="right">
              {row.courses.map(course => course.name).join(",")}
            </StyledTableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  );
}
