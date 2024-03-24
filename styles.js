import { createGlobalStyle } from "styled-components";

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
    lg: "5rem",
    xl: "7rem",
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
 
}

footer {
  text-align: center;
  font-size: ${theme.fontSizes.xs};


}

body {
  padding: ${theme.padding.large};
  margin: ${theme.margin.large};

}

h1, h2{
  font-family: ${theme.fonts.text};
  line-height: 2rem;
  @media (max-width: 1367px) {
  line-height: 6rem;
  }
}

h3, h4{
  font-family: ${theme.fonts.text};
  line-height: 1.5rem;
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

