import styled, {keyframes} from "styled-components";
import {theme} from "../styles";

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const H11 = styled.h1`
  animation: ${fadeUp} 1s ease forwards;
  animation-delay: 0.15s;
  background: linear-gradient(to bottom right, black, #a8a29e);
  background-clip: text;
  text-align: center;
  font-size: 2.5rem; /* 4xl */
  font-weight: bold;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  text-decoration: none;
  color: transparent;
  opacity: 0;
  margin-top: 5rem;
  drop-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  text-wrap: balance;
  @media (min-width: 768px) {
    font-size: 4.5rem; /* 7xl */
    line-height: 5rem;
    margin-top: 10rem;
    magin-bottom: 10rem;
  }
`;
export const H21 = styled.h1`
  animation: ${fadeUp} 1s ease forwards;
  animation-delay: 0.25s;
  background: linear-gradient(to bottom right, black, #a8a29e);
  background-clip: text;
  text-align: center;
  font-size: 1.5rem; /* 4xl */
  font-weight: bold;
  letter-spacing: -0.02em;
  text-decoration: none;
  color: transparent;
  drop-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  text-wrap: balance;

  @media (min-width: 768px) {
    font-size: 2rem; /* 7xl */
    line-height: 3 rem;
  }
`;

export const P11 = styled.p`
  margin-top: 1rem;
  animation: ${fadeUp} 1s ease forwards;
  animation-delay: 0.25s;
  text-align: center;
  color: #6b7280; /* gray-500 */
  opacity: 0;
  text-wrap: balance;

  @media (min-width: 768px) {
    font-size: 1.25rem; /* xl */
  }
`;
export const HeaderCard = styled.div`
  border-radius: 0.5rem;
  margin: 20px auto;
  padding: 30px;
  width: 80%;
  background-color: transparent;
  dispaly: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Card = styled.div`
  border-radius: 1rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  background: hsla(0, 0%, 100%, 1);
  background: radial-gradient(
    circle,
    hsla(0, 0%, 100%, 1) 0%,
    hsla(0, 0%, 95%, 1) 100%
  );
  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#FFFFFF", endColorstr="#F1F1F1", GradientType=1 );
  margin: 20px auto;
  padding: 30px;
  max-width: 600px;
`;

export const F1 = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const FormField = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const FormField1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const Input = styled.input`
  padding: 10px;
  flex: 1;
  border-radius: 0.3rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  border: none;
  width: 100%;
  font-size: 1rem;
`;

export const Option = styled.option`
  padding: 10px;
  flex: 1;
  border-radius: 0.3rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  border: none;
  width: 100%;
  font-size: 1rem;
`;

export const Label = styled.label`
  padding: 10px;
  text-align: left;
  width: 150px;
`;

export const Select = styled(Input).attrs({as: "select"})``;
export const CheckboxContainer = styled(FormField)`
  display: flex;
  justify-content: space-between;
  border: none;
  width: 10%;
`;
export const StyledFlex = styled.div`
    display: flex;
  justfiy-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  
  
    `;

export const BlackButton = styled.button`
  background-color: black;
  color: white;

  border-radius: 5px;
  padding: 6px 8px;
  margin: 10px;
  font-size: 16px;
  cursor: pointer;
  width:  6rem;
  heigth: 3rem;
  &:hover {
    background-color: white;
    color: black;
    border: solid 1px black;
  }
`;

export const WhiteButton = styled.button`
  background-color: orange;
  color: black;
  border: solid 1px black;
  border-radius: 5px;
  padding: 6px 8px;
  font-size: 16px;
  cursor: pointer;
  width:  6rem;
  heigth: 3rem;
  margin: 5px;
  &:hover {
    background-color: black;
    color: white;
  }
`;

export const GradientBackground = styled.div`
  background: hsla(0, 0%, 91%, 1);

  background: linear-gradient(
    360deg,
    hsla(0, 0%, 91%, 1) 0%,
    hsla(0, 0%, 100%, 1) 100%
  );

  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#E7E7E7", endColorstr="#FFFFFF", GradientType=1 );
  height: 100vh;
`;
export const Logo = styled.div`
  padding: 20px;
  margin: 10px;
`;

export const TableFooter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center; /* Centers content horizontally */
  align-items: center; /* Centers content vertically */
  position: fixed;
  bottom: 0;
  padding: 30px;
  font-size: ${theme.fontSizes.xs};
  border-top: 1px solid black;
  background-color: orange;
`;

export const TableHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  opacity: 0.8;
  box-shadow: ${theme.box.shadow};
  border-radius: ${theme.borderRadius.medium};
  background-color: orange;
`;
export const Spacer = styled.div`
  height: 20px;
  border-bottom: 1px solid grey;
`;

export const HeaderImage = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  box-shadow: ${theme.box.shadow};
  padding: ${theme.padding.large};
`;
export const StyledHero = styled.div`
  position: absolute;
  z-index: 10;
`;
export const MainNav = styled.ul`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row; 
    gap: 20px;
    position: absolute;
    left: 50px;
    padding: 20px;
  }
  display: flex;
  flex-direction: row;
  justify-content: gap;
  gap: 10x;
`;
export const NavItem = styled.li`
  padding: 10px;
  cursor: pointer;
  font-size: 1rem;
  text-color: black;
  position: relative;
  font-weight: 400;
  border-bottom: 1px solid orange;
  &:hover {
    color: ${theme.colors.orange};
  }
`;
export const SubNav = styled.ul`
  flex-direction: column;
  justify-content: center;
  align-items: 1;
`;

export const SubNavItem = styled.li`
  cursor: pointer;
  font-size: 1rem;
  width: 10%;
  font-weight: 100;
  color: gray;

  border-bottom: 0.5px solid black;
  position: relative;
  &:hover {
    color: ${theme.colors.orange};
  }
`;

export const NavBarToggle = styled.span`
  cursor: pointer;
  color: rgba(255, 255, 255, 0.8);
  font-size: 24px;
`;
export const Hamburger = styled.div`
margin: 20px;
padding: 20px;

  }
`;

export const BlueButton = styled.button`
  background-color: black;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 6px 8px;
  font-size: 16px;
  cursor: pointer;
  display: block;
  margin: 0 auto;

  &:hover {
    background-color: ${theme.backgroundColors.purple};
  }
`;
export const GreenButton = styled.button`
  background-color: ${theme.backgroundColors.green};
  color: white;
  border: none;
  border-radius: 4px;
  padding: 6px 8px;
  font-size: 16px;
  cursor: pointer;
  display: block;
  margin: 0 auto;

  &:hover {
    background-color: ${theme.backgroundColors.purple};
  }
`;

export const RedButton = styled.button`
  background-color: red;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 6px 8px;
  font-size: 16px;
  cursor: pointer;
  display: block;
  margin: 0 auto;

  &:hover {
    background-color: ${theme.backgroundColors.orange};
  }
`;

export const CatsListWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: ${theme.padding.medium};
  margin: ${theme.margin.medium};
  border-radius: ${theme.borderRadius.medium};
  background-color: ${theme.backgroundColors.heroDiv};
  box-shadow: ${theme.box.shadow};
`;

export const StyledCatsList = styled.li`
  border-collapse: collapse;
  padding: ${theme.padding.large};
  margin: ${theme.margin.large};
  width: 450px;
`;
