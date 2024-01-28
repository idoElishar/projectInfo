import styled from "styled-components";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";

const StyledFooter = styled.footer`
  background-color: #bdbdbd;
  padding: 4rem 0;
`;

const StyledContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const StyledGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const StyledGridItem = styled.div`
  padding: 0 0.5%;
  // flex: 1;
  max-width: 33%;
  min-width: 250px;
  border: 2px solid pink;

`;

const StyledTypography = styled.div`
  font-size: 1.25rem;
  color: #333;
  margin-bottom: 1rem;
  font-weight: bold;
  border: 2px solid red;
`;

const StyledBox = styled.div`
  margin-top: 40px;
  text-align: center;
`;

const StyledLink = styled.a`
  color: #3498db;
  margin: 0 1.5px;
  transition: color 0.3s;

  &:hover {
    color: #1abc9c;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  margin-top: 10px;
  text-align: left;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <StyledContainer>
        <StyledGrid>
          <StyledGridItem>
            <StyledTypography data-testid="cypress-title">
              About Us
          
            </StyledTypography>
            <p>Created by Ido-David Elishar</p>
            <br />
            <p>
              Dive into the world of coding with our intensive bootcamp designed
              to equip you with the skills needed to excel in the dynamic field
              of software development. Whether you're a beginner or looking to
              enhance your existing skills, our program is crafted to meet you
              where you are and take you to the next level.
            </p>
          </StyledGridItem>
          <StyledGridItem>
            <StyledTypography>Contact Us</StyledTypography>
            <p>Hatsira 13 Petah Tikva, Israel</p>
            <p>Email: Kapatz@digital.idf.il</p>
            <p>Phone: 1111</p>
          </StyledGridItem>
          <StyledGridItem>
            <StyledTypography>Follow Us</StyledTypography>
            
            <IconWrapper>
              <StyledLink href="https://www.facebook.com/idfonline/">
                <Facebook />
              </StyledLink>
              <StyledLink href="https://www.instagram.com/idfonline/">
                <Instagram />
              </StyledLink>
              <StyledLink href="https://twitter.com/idfonline">
                <Twitter />
              </StyledLink>
            </IconWrapper>
          </StyledGridItem>
        </StyledGrid>
        <StyledBox>
          <StyledTypography>
            {"Copyright © "}
            <StyledLink href="https://www.idf.il/">IDF</StyledLink>{" "}
            {new Date().getFullYear()}
            {"."}
          </StyledTypography>
        </StyledBox>
      </StyledContainer>
    </StyledFooter>
  );
}
