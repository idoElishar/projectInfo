import styled from "styled-components";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
const StyledFooter = styled.footer`
  background-color: #BDBDBD; // החלף עם הצבע הרצוי שלך
  padding: 6rem;
`;

const StyledContainer = styled.div`
  max-width: "lg"; // Adjust as necessary
`;

const StyledGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`;

const StyledGridItem = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  flex: 0 0 33.333333%;
  max-width: 33.333333%;
`;

const StyledTypography = styled.div`
  font-size: 1.25rem;
  color: #333;
  margin-bottom: 10px;
  font-weight: bold;
  display: flex;
  align-items: center;
`;

const StyledLink = styled.a`
  color: inherit;
  text-decoration: none;
  margin: 0 10px;
`;

const StyledBox = styled.div`
  margin-top: 40px; 
`;


// const StyledTypography = styled.p`
//   font-size: 1rem;  // שנה על פי הצורך
//   text-align: ${({ align }) => align || 'left'};
//   color: #333;
//   margin-bottom: 10px;
//   // הוסף כל עיצוב נוסף שאתה רוצה
// `;
export default function Footer() {
  return (
    <StyledFooter>
      <StyledContainer>
        <StyledGrid>
          <StyledGridItem>
            <StyledTypography data-testid="cypress-title">
              About Us
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/AmanLogo.svg/800px-AmanLogo.svg.png"
                alt="idf"
                height="35px"
                width="35px"
                style={{ marginLeft: "10px" }}
              />
            </StyledTypography>

              Ido Elishar
              <br />
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
          <br />
          <br />

            <StyledTypography>Follow Us</StyledTypography>
            <StyledLink href="https://www.facebook.com/idfonline/">
              <Facebook />
            </StyledLink>
            <StyledLink href="https://www.instagram.com/idfonline/">
              <Instagram />
            </StyledLink>
            <StyledLink href="https://twitter.com/idfonline">
              <Twitter />
            </StyledLink>
          </StyledGridItem>
        </StyledGrid>
        <StyledBox >
          <StyledTypography >
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
