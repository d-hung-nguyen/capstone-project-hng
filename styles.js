import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const theme = {
  primaryColor: 'transparent',
  backgroundcolor: "#FFFBEB",
  backgroundcolor2: "#ECFDF5",
  textColor: "##27272a",
  slate100: "#f1f5f9",
  secondaryColors: {
    C1: "#f4511e",
    C2: "#7cb342",
  },


  fonts: {  
    heading: "Familjen Grotesk, sans-serif",
    text: "Lato, sans-serif",
},
  fontSizes: {
    xs: "1rem",
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
  button: {
    small: "2rem",
    medium: "4rem",
    large: "8rem",
  },  
};

export default createGlobalStyle`
  
html {
  box-sizing: border-box;
}
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;

header {
  display: flex;
  align-items: left;
  flex-direction: row;
  background-color: ${theme.secondaryColors};
  opacity: 0.5;
}

footer {
  display: flex;
  align-items: center;
  justify-content: center;

}

body {
  padding: ${theme.padding.large};
  margin: ${theme.margin.large};

}

h1, h2, h3, h4{
  font-family: ${theme.fonts.text};
  shadow: 
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

form{
  display: flex;
  flex-direction: column;
  padding: ${theme.padding.large};
  margin: ${theme.margin.large};
  border-radius: ${theme.borderRadius.large};
  box-shadow: ${theme.box.shadow};
  background-color: ${theme.primaryColor};
  positon: relative;
  
}
  
input{
  padding: ${theme.padding.small};
  margin: ${theme.margin.small};
  border-radius: ${theme.borderRadius.small};
  border: ${theme.borderWidth.medium} solid ${theme.primaryColor};
  box-shadow: ${theme.box.shadow};
}
  
button{
    padding: ${theme.padding.small};
    border: ${theme.borderWidth.thin} solid ${theme.primaryColor};
    border-radius: ${theme.borderRadius.small};
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

export const Block = styled.div`
  display: block;
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
  display: table-footer;
  }
`
export const TableHeader = styled.div`
  display: table-header;
  padding:${theme.padding.large};
  margin: ${theme.margin.large};
  border-radius: ${theme.borderRadius.large};
  box-shadow: ${theme.box.shadow};
  position: relative;
  z-index: 0;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
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

