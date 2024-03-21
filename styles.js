import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

 const theme = {
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
  min-width: 100px;
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
  width: fit-content;
  }
`
export const Inline = styled.div`
  display: inline-block;
  }
`
export const Flex = styled.div`
  display: flex;
  }
`
export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  }
`
export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  }
`
export const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  }
`
export const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  }
`
export const FlexSpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  }
`
export const FlexSpaceAround = styled.div`
  display: flex;
  justify-content: space-around;
  }
`
export const Table = styled.div`
  display: table;
  }
`
export const TableRow = styled.div` 
  display: table-row;
  }
`
export const TableCell = styled.div`  
  display: table-cell;
  }
`
export const Grid = styled.div`
  display: grid;
  }
`
export const GridCol = styled.div`  
  display: grid-column;
  }
`
export const GridRow = styled.div`  
  display: grid-row;
  }
`
export const GridArea = styled.div`

  display: grid-area; 
  }
` 
export const TableFooter = styled.div`  
  display: flex;
  justify-content: center;
  padding: ${theme.padding.large};
  margin: ${theme.margin.large};
  font-size: ${theme.fontSizes.xs};
  border-top: ${theme.borderWidth.medium} solid ${theme.colors.light};
  }
`
export const TableHeader = styled.header`
  position: sticky; 
  padding:${theme.padding.large};
  margin: ${theme.margin.large};
  border-radius: ${theme.borderRadius.large};
  box-shadow: ${theme.box.shadow};


  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content:center;
    padding: ${theme.padding.large};
  }
`
export const TableBody = styled.div`
  display: table-body;
  }
`
export const TableHead = styled.div`
  display: table-head;
  }
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
display: none;
    flex-direction: column;
    list-style: none;
    padding: 0;
    margin: 0;
    @media (min-width: 768px) {
        display: flex;
        flex-direction: row;
        justify-content:  space-between;
        width: 50%;
    }
`
export const SubNav = styled.ul`
drop-down-menu: yes;
display: block;
`
export const NavBarToggle = styled.span`
  cursor: pointer; 
  color: rgba(255,255,255,0.8);
  font-size: 24px;
  @media (min-width: 768px) {
    display: none;
`
export const Hamburger = styled.div`
  @media (min-width: 768px): {
    display: none;
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
flex-direction: column;
padding: ${theme.padding.large};
margin: ${theme.margin.large};
  `;    

export const StyledCatsList = styled.li`
border-collapse: collapse;
padding: ${theme.padding.large};
margin: ${theme.margin.large};
  `;






