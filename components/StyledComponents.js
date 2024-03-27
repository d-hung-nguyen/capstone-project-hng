/** @format */

import styled, {keyframes} from "styled-components";
import { theme } from "../styles";

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

const media = {
  xsmall: "(max-width: 576px)",
  small: "(min-width: 576px)",
  medium: "(min-width: 768px)",
};

export const H11 = styled.h1`
  animation: ${fadeUp} 1s ease forwards;
  animation-delay: 0.15s;
  background: linear-gradient(to bottom right, black, #a8a29e);
  background-clip: text;
  text-align: center;
  font-family: 'Display', sans-serif;
  font-size: 2.5rem; /* 4xl */
  font-weight: bold;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  text-decoration: none;
  color: transparent;
  opacity: 0;
  drop-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  text-wrap: balance;

  @media (min-width: 768px) {
    font-size: 4.5rem; /* 7xl */
    line-height: 5rem;
  }
`;
export const H21 = styled.h1`
  animation: ${fadeUp} 1s ease forwards;
  animation-delay: 0.15s;
  background: linear-gradient(to bottom right, black, #a8a29e);
  background-clip: text;
  text-align: center;
  font-family: 'Display', sans-serif;
  font-size: 1.8rem; /* 4xl */
  font-weight: bold;
  letter-spacing: -0.02em;
  text-decoration: none;
  color: transparent;
  drop-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  text-wrap: balance;

  @media (min-width: 768px) {
    font-size: 2.5rem; /* 7xl */
    line-height: 3 rem;
  }
`;

export const P11 = styled.p`
  margin-top: 1.5rem;
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

export const Card = styled.div`
  position: relative;
  border-radius: 1rem; /* rounded-xl */
  border: 1px solid #e5e7eb; /* border-gray-200 */
  margin: 1rem; /* space-x-4 */
  padding: 1rem; /* p-6 */
  background: -webkit-linear-gradient(180deg, hsla(0, 0%, 99%, 1) 0%, hsla(220, 100%, 96%, 1) 100%);  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
`;

export const F1 = styled.form`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`;

export const Input1= styled.input`
margin: 0 auto;
max-width: 32rem; /* max-w-md */
text-align: center;
`;


export const GradientBackground = styled.div`
background: -webkit-linear-gradient(135deg, hsla(223, 100%, 99%, 1) 0%, hsla(220, 100%, 96%, 1) 51%);

  );
  width: 100%;
  height: 100vh;
`;
export const Logo = styled.div`
  position: absolute;
  right: 0px;

`;

export const TableFooter = styled.div` 
width: 100%;
display: flex;
flex-direction: row;
position: fixed;
bottom  : 0;
  padding: ${theme.padding.small};
  font-size: ${theme.fontSizes.xs};
  border-top: 1px solid ${theme.colors.orange};

  }
`;
export const TableHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-shadow: ${theme.box.shadow};
  border-radius: ${theme.borderRadius.medium};
`;
export const Spacer = styled.div`
  height: 20%;
`;

export const HeaderImage = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  box-shadow: ${theme.box.shadow};
  padding: ${theme.padding.large};
`;

export const StyledButton = styled.div`
  display: flex;
  justify-content: center;
`;
export const StyledHero = styled.div`
  position: absolute;
  z-index: 10;
`;
export const MainNav = styled.ul`
  flex-direction: column;
`;
export const NavItem = styled.li`
  padding: 10px;
  cursor: pointer;
  font-size: 1rem;
  text-color: black;
  position: relative;
  &:hover {
    color: ${theme.colors.blue};
  }
`;
export const SubNav = styled.ul`
  flex-direction: column;
`;
export const NavBarToggle = styled.span`
  cursor: pointer;
  color: rgba(255, 255, 255, 0.8);
  font-size: 24px;
`;
export const Hamburger = styled.div`
margin-top: 10px;

  }
`;

export const BlueButton = styled.button`
  background-color: ${theme.backgroundColors.blue};
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
