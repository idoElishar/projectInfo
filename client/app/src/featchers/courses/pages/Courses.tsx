import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material'
import { courses } from '../../global/data/datacourses';
import { useNavigate } from 'react-router-dom';

function Courses() {
    const navigate = useNavigate();

    const handleViewCourse = (id:string) => {
        navigate(`/course/${id}`);
    };
    return (
        <Container sx={{ py: 8 }} maxWidth="md">
            <Grid container spacing={4}>
                {courses && courses.map((course) => (
                    <Grid item key={course._id.$oid} xs={12} sm={6} md={4} >
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image={course.imageURL}
                                title={course.courseName}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {course.courseName}
                                </Typography>

                            </CardContent>
                            <CardActions>
                                <Button size="small" onClick={() => handleViewCourse(course._id.$oid)}>
                                    View Course
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>

    )
}

export default Courses