import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import AccountCircle from "@mui/icons-material/AccountCircle";
import MoreIcon from "@mui/icons-material/MoreVert";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();

    const handleMain = () => {
        navigate(`/`);
    };
    const handleLogin=()=>{
      navigate(`/login`);
    }
  return (
    <Box sx={{ flexGrow:   1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#455A64" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <h3>{"welcome Guest"}</h3>
          </Typography>

          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
          
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              color="inherit"
              onClick={handleMain}
            >
              <HomeIcon />
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
          <button
            color="inherit"
            onClick={handleLogin}
            style={{
              marginLeft: "20px",
              backgroundColor: "#E0E0E0",
              color: "#455A64",
              borderRadius: "5px",
              padding: "5px 10px",
              border: "1px solid #B0BEC5",
              fontWeight: "bold",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              transition: "background-color 0.3s ease, box-shadow 0.3s ease",
            }}
          >
            Sign In
          </button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
