import { Card, CardMedia, CardContent, Typography, Box, Paper, Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import { teachers } from '../../../global/data/datateachers';
function Teacher() {
    const {name}=useParams()
    const teacher = teachers.find(c => c.name == name);

    return (
        <Box sx={{ my: 5, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Paper elevation={6} sx={{ maxWidth: 800, width: '100%', padding: 2, backgroundColor: '#eceff1' }}> {/* רקע אפור עדין */}
                <Card sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center' }}>
                    <CardMedia
                        component="img"
                        sx={{ width: { md: 300 }, height: { md: 300 }, borderRadius: '8px', margin: 3 }}
                        image={teacher?.images}
                        alt={teacher?.name}
                    />
                    <CardContent sx={{ flex: '1', minWidth: 300 }}>
                        <Typography gutterBottom variant="h4" component="div">
                            {teacher?.name}
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
                            Course: {teacher?.course}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                            Phone: {teacher?.phone}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                            Address: {teacher?.address}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Email: {teacher?.email}
                        </Typography>
                        <Button
                            sx={{ mt: 2 }}
                            variant="contained"
                            href={`mailto:${teacher?.email}`}
                        >
                            Send Mail
                        </Button>
                    </CardContent>
                </Card>
            </Paper>
        </Box>
    );

}

export default Teacher;
