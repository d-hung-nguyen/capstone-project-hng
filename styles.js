import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`
*, *::before, *::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0; }

ul,
ol,
li,
dl,
dt,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hgroup,
p,
blockquote,
figure,
form,
fieldset,
input,
legend,
pre,
abbr,
button {
  margin: 0;
  padding: 0; }

pre,
code,
address,
caption,
th,
figcaption {
  font-size: 1em;
  font-weight: normal;
  font-style: normal; }

fieldset,
iframe {
  border: 0; }

caption,
th {
  text-align: left; }

table {
  border-collapse: collapse;
  border-spacing: 0; }

main {
  display: block; }

button {
  background: none;
  border: 0;
  box-sizing: content-box;
  color: inherit;
  cursor: pointer;
  font: inherit;
  line-height: inherit;
  overflow: visible;
  vertical-align: inherit; 
  cursor: default; 
:focus {
      outline: 4px solid rgba(0, 125, 250, 0.6);
      outline-offset: 1px; }
}

html {
      font-family: "SF Pro Text", "SF Pro Icons", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
        font-size: 106.25%;}

body {
        font-size: 16px;
        line-height: 1.5
        font-weight: 400;
        letter-spacing: -0.022em;
        font-family: "SF Pro Text", "SF Pro Icons", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
        background-color: white;
        color: #1d1d1f;
        font-style: normal; 
        -webkit-font-smoothing: antialiased;}

body,
input,
textarea,
select,
button {
  font-synthesis: none;
  -moz-font-feature-settings: 'kern';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 600;
  color: #1d1d1f; }
  h1 img,
  h2 img,
  h3 img,
  h4 img,
  h5 img,
  h6 img {
    display: block;
    margin: 0; }
  h1 + *,
  h2 + *,
  h3 + *,
  h4 + *,
  h5 + *,
  h6 + * {
    margin-top: 0.8em; }
  h1 + h1,
  h1 + h2,
  h1 + h3,
  h1 + h4,
  h1 + h5,
  h1 + h6,
  h2 + h1,
  h2 + h2,
  h2 + h3,
  h2 + h4,
  h2 + h5,
  h2 + h6,
  h3 + h1,
  h3 + h2,
  h3 + h3,
  h3 + h4,
  h3 + h5,
  h3 + h6,
  h4 + h1,
  h4 + h2,
  h4 + h3,
  h4 + h4,
  h4 + h5,
  h4 + h6,
  h5 + h1,
  h5 + h2,
  h5 + h3,
  h5 + h4,
  h5 + h5,
  h5 + h6,
  h6 + h1,
  h6 + h2,
  h6 + h3,
  h6 + h4,
  h6 + h5,
  h6 + h6 {
    margin-top: 0.4em; }
  p + h1,
  ul + h1,
  ol + h1, p +
  h2,
  ul +
  h2,
  ol +
  h2, p +
  h3,
  ul +
  h3,
  ol +
  h3, p +
  h4,
  ul +
  h4,
  ol +
  h4, p +
  h5,
  ul +
  h5,
  ol +
  h5, p +
  h6,
  ul +
  h6,
  ol +
  h6 {
    margin-top: 1.6em; }

.heading-collapsed + * {
  margin-top: 0; }

p + *,
ul + *,
ol + * {
  margin-top: 0.8em; }




h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 600;
  color: #1d1d1f; }
  h1 img,
  h2 img,
  h3 img,
  h4 img,
  h5 img,
  h6 img {
    display: block;
    margin: 0; }
  h1 + *,
  h2 + *,
  h3 + *,
  h4 + *,
  h5 + *,
  h6 + * {
    margin-top: 0.8em; }
  h1 + h1,
  h1 + h2,
  h1 + h3,
  h1 + h4,
  h1 + h5,
  h1 + h6,
  h2 + h1,
  h2 + h2,
  h2 + h3,
  h2 + h4,
  h2 + h5,
  h2 + h6,
  h3 + h1,
  h3 + h2,
  h3 + h3,
  h3 + h4,
  h3 + h5,
  h3 + h6,
  h4 + h1,
  h4 + h2,
  h4 + h3,
  h4 + h4,
  h4 + h5,
  h4 + h6,
  h5 + h1,
  h5 + h2,
  h5 + h3,
  h5 + h4,
  h5 + h5,
  h5 + h6,
  h6 + h1,
  h6 + h2,
  h6 + h3,
  h6 + h4,
  h6 + h5,
  h6 + h6 {
    margin-top: 0.4em; }
  p + h1,
  ul + h1,
  ol + h1, p +
  h2,
  ul +
  h2,
  ol +
  h2, p +
  h3,
  ul +
  h3,
  ol +
  h3, p +
  h4,
  ul +
  h4,
  ol +
  h4, p +
  h5,
  ul +
  h5,
  ol +
  h5, p +
  h6,
  ul +
  h6,
  ol +
  h6 {
    margin-top: 1.6em; }


p + *,
ul + *,
ol + * {
  margin-top: 0.8em; }
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
  

li{
  list-style: none;
}
#root, #__next {
  isolation: isolate;
}
select{
  font-size: 12px;
  line-height: 1.23536;
  font-weight: 400;
  letter-spacing: -0.022em;
  border-radius: 12px;
  border-width: 1px;
  border-style: solid;
  padding: 1.05882rem 2.35294rem 0 0.94118rem;
  overflow: hidden;
  text-overflow: ellipsis; }
}

input{
  font-size: 12px;
  line-height: 1.23536;
  font-weight: 400;
  letter-spacing: -0.022em;
  border-radius: 12px;
  border-width: 1px;
  border-style: solid;
  padding: 1.05882rem 0.94118rem 0 0.94118rem;
  text-align: left;
  height: auto;
  padding: 1.88235rem 0.17647rem 0.17647rem 0.17647rem;
  display: flex; }
}
.Toastify__toast-container--top-center {
  transform: translateY(-50%);
  position: absolute;
  inset: 0px;
  z-index: 9999999;
  background: rgba(232, 232, 237, 0.4);
  backdrop-filter: blur(20px);
  width: 100%;
  height: 100%;
  transition: opacity 0.32s cubic-bezier(0.4, 0, 0.6, 1) 80ms,
    visibility 0.32s step-end 80ms;
}

`;
