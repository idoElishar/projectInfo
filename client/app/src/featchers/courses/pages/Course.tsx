import { Box, Button, Card, CardContent, CardMedia, Container, Typography } from '@mui/material'
import { courses } from '../../global/data/datacourses';
import { useNavigate, useParams } from 'react-router-dom';

function Course() {
    const { id } = useParams()
    const course = courses.find(c => c._id.$oid.toString() === id);
    const navigate = useNavigate()
    const handleViewTeacher = (name: string | undefined) => {
        navigate(`/teacher/${name}`);
    };
    const handleViewStudents = (coursename: string | undefined) => {
        navigate(`/students/${coursename}`);
    };
    function isLink(str: string) {
        return str.startsWith("http://") || str.startsWith("https://");
    }
    return (
        <Box>
            <Container
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    margin: "3rem",
                    flexDirection: { xs: "column", md: "row" }
                }}
            >
                <Card
                    sx={{
                        backgroundColor: "#f5f5f5",
                        width: "100%",
                        margin: "0 auto",
                        maxWidth: "90rem",
                        boxShadow: 3,
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        alignItems: "center",
                    }}
                >
                    <div style={{ width: "100%", maxWidth: "30%", padding: "2rem" }}>
                        <CardMedia
                            component="img"
                            sx={{ width: "100%", height: "auto", borderRadius: "8px" }}
                            image={course?.imageURL}
                            alt={course?.courseName}
                        />
                    </div>
                    <CardContent
                        sx={{
                            flex: "1",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                        }}
                    >
                        <div>
                            <div>
                                <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                                    <Typography gutterBottom variant="h4" component="div" sx={{ flexShrink: 0 }}>
                                        {course?.courseName}
                                    </Typography>
                                    <Button
                                        variant="contained"
                                        color="info"

                                        onClick={() => handleViewTeacher(course?.lecturer)}
                                        sx={{
                                            ml: 15,
                                            boxShadow: 3,
                                            '&:hover': {
                                                backgroundColor: '#5c6bc0',
                                                boxShadow: 6,
                                            },
                                            paddingX: 3,
                                            borderRadius: '20px',
                                            alignSelf: 'flex-start'
                                        }}
                                    >
                                        Teacher: {course?.lecturer}
                                    </Button>
                                </Box>
                            </div>


                            <Typography variant="h6" sx={{ marginBottom: "1rem", fontWeight: "light" }}>
                                {course?.description}
                            </Typography>
                            {/* Lectures */}
                            <Typography variant="body2" sx={{ marginBottom: "1rem" }}>
                                Lectures:
                                <ul>
                                    {course?.lectures.map((lecture, index) => (
                                        <li key={index}>
                                            {isLink(lecture.title) ?
                                                <a href={lecture.title} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "#1976d2" }}>Lecture {index + 1}</a> :
                                                <span>Lecture {index + 1}: {lecture.title}</span>
                                            }
                                        </li>
                                    ))}
                                </ul>
                            </Typography>
                            {/* Exercises */}
                            <Typography variant="body2" sx={{ marginBottom: "2rem" }}>
                                Exercises:
                                <ul>
                                    {course?.exercises.map((exercise, index) => (
                                        <li key={index} style={{ marginTop: "0.5rem" }}>
                                            {isLink(exercise.title) ?
                                                <a href={exercise.title} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "#388e3c" }}>
                                                    Exercise {index + 1}
                                                </a> :
                                                <span>Exercise {index + 1}: {exercise.title}</span>
                                            }
                                        </li>
                                    ))}
                                </ul>
                            </Typography>
                        </div>
                        <Button
                            sx={{
                                alignSelf: "start",
                                marginTop: "auto",
                                backgroundColor: "#1976d2",
                                color: "white",
                                ':hover': {
                                    backgroundColor: "#1565c0",
                                },
                                boxShadow: "0 3px 5px 2px rgba(25, 118, 210, .3)",
                                padding: "10px 20px",
                                borderRadius: "4px",
                                fontWeight: "bold",
                                textTransform: "none"
                            }}
                            onClick={() => handleViewStudents(course?.courseName)}
                        >
                            View Students
                        </Button>

                    </CardContent>
                </Card>
            </Container >
        </Box >

    )
}

export default Course