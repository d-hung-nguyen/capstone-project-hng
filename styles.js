import { createGlobalStyle } from "styled-components";



export const theme = {
  primaryColor: '#ffebee',
  backgroundColor: '#ff8a65',
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
    xs: "0,8rem",
    sm: "1rem",
    me: "1.5rem",
    lg: "2rem",
    xl: "2.5rem",
  },
  spacing: {
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
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
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

header {
  display: flex;
  align-items: left;
  flex-direction: row;
  padding: ${theme.spacing.lg};
  background-color: ${theme.secondaryColors};
  opacity: 0.5;
}
  body {
    margin: 20px;
    padding: 15px;
    font-family: ${theme.fonts.text};
    color: ${theme.textColor};
    background-color: ${theme.backgroundColor}

 
  }

h1, h2, h3, h4{
  font-family: ${theme.fonts.heading};
}

h1{
font-size: ${theme.fontSizes.xl}
}

h2{ 
  font-size: ${theme.fontSizes.medium}
}

h4{
  font-size: ${theme.fontSizes.small}
}

li{
  list-style: none;
  font-size: ${theme.fontSizes.medium}

}

form{
  display: flex;
  flex-direction: column;
  margin: ${theme.spacing.lg};
  gap: ${theme.spacing.md};
  padding: ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.large};
  box-shadow: ${theme.box.shadow};
  background-color: ${theme.primaryColor};
  
}

}
  
input{
    padding: ${theme.spacing.md};
    border: ${theme.borderWidth.thin} solid ${theme.primaryColor};
    border-radius: ${theme.borderRadius.medium};
}
  
button{
    padding: ${theme.spacing.md};
    border: ${theme.borderWidth.thin} solid ${theme.primaryColor};
    background-color: ${theme.primaryColor};
    border-radius: ${theme.borderRadius.small};
    font-size: ${theme.fontSizes.large};
    color: ${theme.slate100};
    width: 150px;  
    box-shadow: ${theme.box.shadow};
}


}  font-size: ${theme.fontSizes.medium}
} 

p{
font-size: ${theme.fontSizes.medium}
}


a {
  text-decoration: none;
  color: ${theme.textColor};
}

table {
  border-collapse: collapse;
}

`;
