import { Card, CardContent, Typography, List, ListItem, ListItemText, Container, Box } from '@mui/material';
import { blue, green, red } from '@mui/material/colors';
import { useParams } from 'react-router-dom';
import { students } from '../../../global/data/datastudents';
function Student() {
    const { id } = useParams()
    console.log("id"+id);
    
    const student = students.find(c => c._id.$oid.toString() === id);
console.log(student+"studed");


    const universityImageUrl = 'https://images1.ynet.co.il/PicServer5/2017/02/15/7590532/75905254713159183103no.jpg';

    return (
        <Container maxWidth="sm" style={{ marginTop: '20px', marginBottom: '15px' }}>
            <Card variant="outlined" style={{ backgroundColor: blue[50] }}>
                <Box display="flex" alignItems="center">
                    <CardContent style={{ flex: 1 }}>
                        <Typography variant="h5" component="div" style={{ color: green[900] }}>
                            Student {student?.name}
                        </Typography>
                        <br />
                        <Typography variant="body2" style={{ color: red[500] }}>
                            <strong>Phone:</strong> {student?.phone}
                        </Typography>
                        <Typography variant="body2">
                            <strong>Address:</strong> {student?.address}
                        </Typography>
                        <Typography variant="body2" style={{ marginBottom: '10px' }}>
                            <strong>Email:</strong> {student?.email}
                        </Typography>
                        <Typography variant="h6" style={{ color: green[700] }}>
                            Courses Enrolled:
                        </Typography>
                        <List>
                            {student?.courses.map(course => (
                                <ListItem key={course.name}>
                                    <ListItemText primary={course.name} />
                                </ListItem>
                            ))}
                        </List>
                    </CardContent>
                    <Box style={{ maxWidth: '200px', maxHeight: '200px', marginRight: '40px' }}>
                        <img src={universityImageUrl} alt="University Image" style={{ width: '100%', height: '100%', objectFit: 'cover', margin: "20px" }} />
                    </Box>
                </Box>
            </Card>
        </Container>
    );

}


export default Student;
