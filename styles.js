import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const theme = {
  backgroundColors: {
    div: "#ffffff",
    body: "#f9fafb",
    heroDiv: "#f8eceb",
    blue: "#0b70db",
    orange: "#ff5543",
    purple: "#6b47d6",
  },
  colors: {
    light: "#e6ebf2",
    grey: "dbe2f0",
    blue: "#0b70db",
    orange: "#ff5543",
    purple: "#6b47d6",
  },

  fonts: {
    heading: "Familjen Grotesk, sans-serif",
    text: "Lato, sans-serif",
  },
  fontSizes: {
    xs: "0.8rem",
    sm: "1.5rem",
    me: "3rem",
    lg: "6rem",
    xl: "15rem",
  },
  spacing: {
    sm: '15px',
    md: '25px',
    lg: '30px',
    xl: '50px',
  },
  box: {
    shadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
    shadowColor: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
    height: "6rem",
  },
  borderRadius: {
    small: "5px",
    medium: "10px",
    large: "15px",
  },

  margin: {
    small: "10px",
    medium: "20px",
    large: "30px",

  },

  padding: {
    small: "10px",
    medium: "20px",
    large: "30px",
  },

  borderWidth: {
    thin: "1px",
    medium: "2px",
    thick: "4px",
  },
};


export default createGlobalStyle`
  
html {
  box-sizing: border-box;
}
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
  padding: ${theme.padding.large};
  margin: ${theme.margin.large};

header {
  display: flex;
  align-items: left;
  opacity: 0.5;
}

footer {
  text-align: center;
  font-size: ${theme.fontSizes.xs};


}

body {
  padding: ${theme.padding.large};
  margin: ${theme.margin.large};

}

h1, h2, h3, h4{
  font-family: ${theme.fonts.text};
  box-shadow: ${theme.box.shadow};
}

h1{
font-size: ${theme.fontSizes.xl}
}

h2{ 
  font-size: ${theme.fontSizes.medium}
}

h4{
  font-size: ${theme.fontSizes.small}
  text-align: center;
}

li{
  list-style: none;
  font-size: ${theme.fontSizes.medium}
}

label{
  font-size: ${theme.fontSizes.medium}
}

button{
  font-size: ${theme.fontSizes.medium}
}

form{
  display: flex;
  flex-direction: column;
  padding: ${theme.padding.large};
  margin: ${theme.margin.large};
  border-radius: ${theme.borderRadius.large};
  box-shadow: ${theme.box.shadow};
  background-color: ${theme.backgroundColors.div};
  positon: relative;
  
}
  
input{
  padding: ${theme.padding.small};
  margin: ${theme.margin.small};
  border-radius: ${theme.borderRadius.small};
  border: ${theme.borderWidth.medium} solid ${theme.colors.light};
  box-shadow: ${theme.box.shadow};
}

select{
  padding: ${theme.padding.small};
  margin: ${theme.margin.small};
  border-radius: ${theme.borderRadius.small};
  border: ${theme.borderWidth.medium} solid ${theme.colors.light};
  box-shadow: ${theme.box.shadow};
}


p{
font-size: ${theme.fontSizes.medium}
}

a {
  text-decoration: none;
}

table {
  border-collapse: collapse;
}
`;

export const Logo = styled.div`
  

`


export const TableFooter = styled.div`  
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: ${theme.padding.small};
  font-size: ${theme.fontSizes.xs};
  border-top: ${theme.borderWidth.medium} solid ${theme.colors.orange};
  }
`
export const TableHeader = styled.header`
display: flex;
flex-direction: row;
box-shadow: ${theme.box.shadow};
border-radius: ${theme.borderRadius.medium};
`
export const Spacer = styled.div`
  height: 50px;
  width: 200px;
`

export const HeaderImage = styled.div`

width: fit-content;
`

export const StyledButton = styled.div`
  display: flex;
 justify-content: center;
`
export const StyledHero = styled.div`
  position: absolute;
  z-index: 10;
` 
export const MainNav = styled.ul`
    flex-direction: column;
`
export const NavItem = styled.li`
    padding: 10px;
    cursor: pointer;
    font-size: 1rem;
    text-color: black;
    position: relative;
    &:hover {
        color: ${theme.colors.blue};
    }
`
export const SubNav = styled.ul`

`
export const NavBarToggle = styled.span`
  cursor: pointer; 
  color: rgba(255,255,255,0.8);
  font-size: 24px;
`
export const Hamburger = styled.div`

  }
`


export const StyledSaveButton = styled.button`
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
export const StyledEditButton = styled.button`
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



export const StyledDeleteButton = styled.button`
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






