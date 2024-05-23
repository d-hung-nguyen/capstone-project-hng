import styled, {keyframes} from "styled-components";
const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const StyledPageTitle = styled.div`
  font-size: 21px;
  font-weight: 600;
  letter-spacing: 0.009em;
  position: sticky;
  top: 0;
  width: 100%;
  padding-left: 22px;
  padding-right: 22px;
  padding-top: 0px;
  text-align: left;
  color: rgb(29, 29, 31);
  animation: ${fadeUp} 1s ease forwards;
  animation-delay: 0.5s;
  color: #6b7280;
  opacity: 0;
  text-wrap: balance;
`;

export const H11 = styled.h1`
  color: #5e3aed;
  font-size: 28px;
`;

export const H22 = styled.h2`
  color: #1f2937;
`;
export const H21 = styled.h2`
  color: #0066cc;
`;
export const H32 = styled.h3`
  color: #0066cc;
`;
export const H31 = styled.h3`
  color: #1f2937;
`;

export const H4 = styled.h4`
  color: gray;
  text-align: center;
`;

export const P11 = styled.p`
  margin-top: 1rem;
  animation: ${fadeUp} 1s ease forwards;
  animation-delay: 0.25s;
  text-align: center;
  color: #6b7280; /* gray-500 */
  opacity: 0;
  text-wrap: balance;

  @media (min-width: 375px) {
    font-size: 1.25rem; /* xl */
  }
`;
export const HeaderCard = styled.div`
  border-radius: 0.5rem;
  margin: 30 px;
  padding: 30px;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Card = styled.div`
  border-radius: 8px;
  opacitiy: 1;
  transition: opacity 100ms ease, visibility 100ms ease;
  box-shadow: 0 0 0.5px rgba(0, 0, 0, 0.4), 0 1px 3px rgba(0, 0, 0, 0.09),
    0 4px 8px rgba(0, 0, 0, 0.09);
  padding: 22px;
  width: 400px;
  background: hsla(0, 0%, 100%, 1);
  background: radial-gradient(
    circle,
    hsla(0, 0%, 100%, 1) 0%,
    hsla(0, 0%, 95%, 1) 100%
  );
  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#FFFFFF", endColorstr="#F1F1F1", GradientType=1 );
`;
export const Card1 = styled.div`
  margin-right: auto;
  padding-right: 0;
  grid-column-gap: 24px;
  padding-top: 0;
  padding-bottom: 0;
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  height: 100%;
  background: #f5f5f7;
  flex-basis: 100%;
  max-width: 100%;
`;
export const Card2 = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  height: 100%;
  flex-basis: 100%;
  max-width: 100%;
`;
export const Card3 = styled.div`
  margin-left: auto;
  margin-right: auto;
  grid-row-gap: 0;
  padding-left: 0;
  padding-right: 0;
  grid-column-gap: 5px;
  padding-top: 0;u
  padding-bottom: 0;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  height: 100%;
  padding-left: 0;
  padding-right: 0;
  background: #f5f5f7;
  -webkit-flex-basis: 100%;
  -ms-flex-preferred-size: 100%;
  flex-basis: 100%;
  max-width: 100%;
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

  flex-direction: row;
`;

export const Input = styled.input`
  padding: 10px;
  flex: 1;
  border-radius: 0.3rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  border: none;
  width: 100%;
`;

export const Option = styled.option`
  padding: 10px;
  flex: 1;
  border-radius: 0.3rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  border: none;
  width: 100%;
`;

export const Label = styled.label`
  text-align: left;
  padding-right: 5px;
  width: 100px;
`;

export const Select = styled(Input).attrs({as: "select"})``;
export const CheckboxContainer = styled.div`
  position: relative;
`;
export const StyledFlex = styled.div`
  display: flex;
  justfiy-content: space-between
  align-items: center;
  flex-direction: column;
  padding: 20px;
`;

export const StyledFix = styled.div`
  width: 400px;
  font-size: 17px;
  line-height: 1.23536;
  font-weight: 400;
  letter-spacing: -0.022em;
  font-family: "SF Pro Text", "SF Pro Icons", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  width: 100%;
  height: 3.29412rem;
  border-radius: 12px;
  border-width: 1px;
  border-style: solid;
  box-sizing: border-box;
  margin-bottom: 0.82353rem;
  padding: 1.05882rem 0.94118rem 0 0.94118rem;
  text-align: left;
  -webkit-appearance: none;
          appearance: none;
  height: auto;
  padding: 1.88235rem 0.17647rem 0.17647rem 0.17647rem;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex; }
`;

export const StyledFlexRow = styled.div`
display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
display: flex;
-webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
        flex-wrap: wrap;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
-webkit-flex-direction: row;
    -ms-flex-direction: row;
        flex-direction: row;
width: 100%; }
`;

export const BlackButton = styled.button`
  cursor: pointer;
  display: inline-block;
  text-align: center;
  white-space: nowrap;
  font-size: 13px;
  line-height: 1.17648;
  font-weight: 400;
  letter-spacing: -0.022em;
  min-width: 28px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  border-radius: 8px;
  background: #86868b;
  color: white;

  &:hover {
    box-shadow: 0 0 0 1px rgba(0, 125, 250, 0.6);
  }
  }
`;
export const BlackButtonT = styled.button`
  cursor: pointer;
  display: inline-block;
  text-align: center;
  white-space: nowrap;
  font-size: 13px;
  line-height: 1.17648;
  font-weight: 400;
  letter-spacing: -0.022em;
  min-width: 28px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  border-radius: 8px;
  background: white;
  color: black;
  box-shadow: 0 0 0 1px black;

  &:hover {
    box-shadow: 0 0 0 1px rgba(0, 125, 250, 0.6);
  }
  }
`;
export const ButtonContainer = styled(StyledFlex)`
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  margin-left: 50;
  margin-right: 50;
`;

// Overlay for editing, to block out other views
export const EditOverlay = styled.div`
  position: absolute;
  inset: 0px;
  z-index: 9999;
  background: rgba(232, 232, 237, 0.4);
  backdrop-filter: blur(20px);
  width: 100%;
  height: 100%;
  transition: opacity 0.32s cubic-bezier(0.4, 0, 0.6, 1) 80ms,
    visibility 0.32s step-end 80ms;
`;

export const WhiteButton = styled.button`
  cursor: pointer;
  display: inline-block;
  text-align: center;
  white-space: nowrap;
  font-size: 13px;
  line-height: 1.17648;
  font-weight: 400;
  letter-spacing: -0.022em;
  min-width: 28px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  border-radius: 8px;
  background: #0071e3;
  color: white;

  &:hover {
    background: #0062ce;
    box-shadow: 0 0 0 1px rgba(0, 125, 250, 0.6);
  }
  }
`;

export const Logo = styled.div`
  width: 100%;
  align-items: right;
`;

export const TableFooter = styled.div`
  border-top: 1px solid #d2d2d7;
  color: #0066cc;
  font-size: 14px;
  padding: 10px 20px;
  padding-bottom: calc(21px + constant(safe-area-inset-bottom));
  text-align: center;
`;

export const TableHeader = styled.header`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  borde-bottom: 1px solid #d2d2d7;
`;
export const Spacer = styled.div`
  height: 20px;
  border-bottom: 1px solid grey;
`;

export const HeaderImage = styled.div`
  position: relative;
  with: fit-content;
`;
export const MainNav = styled.ul`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  just-content: right;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(20px);
  transition: opacity 0.32s cubic-bezier(0.4, 0, 0.6, 1) 80ms,
    visibility 0.32s step-end 80ms;
  animation: ${fadeUp} 0.5s ease forwards;
  margin: 20px;
`;
export const NavItem = styled.li`
  animation: ${fadeUp} 0.5s ease forwards;
  text-wrap: balance;
  curor: pointer;
  text-align: left;
  &:hover {
    text-color: #0066cc;
  }
`;

export const SubNav = styled.ul`
  flex-direction: column;
  justify-content: center;
  animation: ${fadeUp} 0.5s ease forwards;
`;

export const SubNavItem = styled.li`
  curor: pointer;
  color: white;
  animation: ${fadeUp} 0.5s ease forwards;
  margin: 10px;
`;

export const NavBarToggle = styled.span`
  z-inde: 15;
`;
export const Hamburger = styled.div`
  margin-left: 16px;
`;

export const CatsListWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20;
  border-radius: 16px;
  background-color: white;
  box-shadow: 1px 2px 2px hsl(220deg 60% 50% / 0.2),
    2px 4px 4px hsl(220deg 60% 50% / 0.2), 4px 8px 8px hsl(220deg 60% 50% / 0.2),
    8px 16px 16px hsl(220deg 60% 50% / 0.2),
    16px 32px 32px hsl(220deg 60% 50% / 0.2);
`;

export const StyledCatsList = styled.li`
  border-collapse: collapse;
  padding: 20px;
  margin: 20px;
  width: 450px;
`;
