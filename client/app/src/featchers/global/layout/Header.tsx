import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {
  Home as HomeIcon,
  AccountCircle,
  MoreVert as MoreIcon,
} from "@mui/icons-material";

const StyledAppBar = styled.div`
  background-color: #455a64;
  color: white;
`;

const StyledToolbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
`;

const StyledIconButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 10px;
  font-size: 24px;
`;

const Title = styled.h3`
  color: white;
  margin: 0;
  display: block;
`;

const SignInButton = styled.button`
  background-color: #e0e0e0;
  color: #455a64;
  border-radius: 5px;
  padding: 5px 10px;
  border: none;
  font-weight: bold;
  margin-left: 20px;
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.3s;

  &:hover {
    background-color: #cfd8dc;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

function Header() {
  const navigate = useNavigate();

  const handleMain = () => {
    printLocalStorage();
    navigate(`/`);
  };
  const handleLogin = () => {
    navigate(`/loginstudent`);
  };
  const disconnect = () => {
    localStorage.removeItem("teacherDetails");
    localStorage.removeItem("teacher");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("studentDetails");

    navigate(`/`);
  };
  const printLocalStorage = () => {
    console.log("Local Storage Content:");
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key) {
        const value = localStorage.getItem(key);
        console.log(`${key}: ${value}`);
      }
    }
  };
  const value = localStorage.getItem("teacherDetails");
  if (value) {
    const teacherDetailes = JSON.parse(value);
    console.log("data from local: " + teacherDetailes?.name);
  }

  const valueStudent = localStorage.getItem("studentDetails");
if (valueStudent) {
  console.log("hidden data from");
  
}
  if (valueStudent) {
    const studentDetailes = JSON.parse(valueStudent);
    console.log("data from local: " + studentDetailes?.name);
  }

  return (
    <StyledAppBar>
      <StyledToolbar>
        <LeftSection>
        <Title>
            Hello{" "}
            {value
              ? "Teacher " + JSON.parse(value)?.name
              : valueStudent
              ? "Student " + JSON.parse(valueStudent)?.name
              : "Guest"}
          </Title>
        </LeftSection>
        <RightSection>
          <StyledIconButton>
            <AccountCircle />
          </StyledIconButton>
          <StyledIconButton>
            <MoreIcon />
          </StyledIconButton>
          <StyledIconButton onClick={handleMain}>
            <HomeIcon />
          </StyledIconButton>
          {!value &&!valueStudent&& <SignInButton onClick={handleLogin}>Sign In</SignInButton>}
          {value && <SignInButton onClick={disconnect}>Sign Out</SignInButton>}
          {valueStudent && <SignInButton onClick={disconnect}>Sign Out</SignInButton>}

        </RightSection>
      </StyledToolbar>
    </StyledAppBar>
  );
}

export default Header;
