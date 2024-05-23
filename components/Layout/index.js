import Navbar1 from "../NavItem";

export default function Layout({ children }) {
 return (
  <>
   <Navbar1 />
   <main>{children}</main>
   <footer>Capstone Project 2024</footer>
  </>
 );
}
