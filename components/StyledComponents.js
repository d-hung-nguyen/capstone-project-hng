import styled from "styled-components";
import { theme } from "../styles";


export const Logo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;

`;


export const TableFooter = styled.div`  
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: ${theme.padding.small};
  font-size: ${theme.fontSizes.xs};
  border-top: ${theme.borderWidth.medium} solid ${theme.colors.orange};
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
  height: 50px;
  width: 200px;
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
  display: ${(props) => (props.displayNav ? 'flex' : 'none')};
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

`;
export const NavBarToggle = styled.span`
  cursor: pointer; 
  color: rgba(255,255,255,0.8);
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
