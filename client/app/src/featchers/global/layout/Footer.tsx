import styled from "styled-components";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";

const StyledFooter = styled.footer`
  background-color: #bdbdbd;
  padding: 2.5rem 0;
  // min-height: 100vh; 

`;

const StyledContainer = styled.div`
  // max-width: 1200px;
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
  max-width: 25%;
  min-width: 250px;
  // border: 2px solid pink;
`;

const StyledTypography = styled.div`
  font-size: 1rem;
  color: #333;
  margin-bottom: 1rem;
  font-weight: bold;
  // border: 2px solid red;
  font-family: "Arial", sans-serif;

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
const StyledAboutSection = styled.div`
  border-radius: 8px;
  font-family: "Arial", sans-serif;
  margin: 1em 0;
  
`;

const StyledTitle = styled.h4`
  color: #2c3e50; 
  font-size: 1.1em; 
  margin-top: 1em; 
  // text-align: center; 
  font-family: "Times New Roman", Times, serif;

`;

const StyledParagraph = styled.p`
  color: #333; 
  line-height: 1.3em;
  font-size: 1em; 
  margin-bottom: 1em; 
  text-align: justify; 
  font-family: "Times New Roman", Times, serif;

`;
const StyledParagraph1 = styled.p`
  color: #333; 
  line-height: 1.5em;
  font-size: 1em; 
  // margin-bottom: 1em; 
  text-align: justify; 
  font-family: "Times New Roman", Times, serif;

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
            <StyledAboutSection>
              <StyledParagraph>
                Dive into the world of coding with our intensive bootcamp
                designed to equip you with the skills needed to excel in the
                dynamic field of software development. Whether you're a beginner
                or looking to enhance your existing skills, our program is
                crafted to meet you where you are and take you to the next
                level.
              </StyledParagraph>
              <StyledTitle>Created by Ido-David Elishar</StyledTitle>

            </StyledAboutSection>
          </StyledGridItem>
          <StyledGridItem>
            <StyledTypography>Contact Us</StyledTypography>
            <StyledParagraph1>Hatsira 13 Petah Tikva, Israel</StyledParagraph1>
            <StyledParagraph1>Email: Kapatz@digital.idf.il</StyledParagraph1>
            <StyledParagraph1>Phone: 1111</StyledParagraph1>
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
