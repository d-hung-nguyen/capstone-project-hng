import { useState, useEffect, useRef } from "react";
import {
  Hamburger,
  NavBarToggle,
  MainNav,
  SubNav,
  TableHeader,
  Logo,
  NavItem,
  Spacer,
} from "@/components/StyledComponents";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [displayNav, setDisplayNav] = useState(false);
  const navRef = useRef(); 
  const toggleNavBar = () => {
    setDisplayNav(!displayNav);
  };

  const closeNavBar = () => {
    setDisplayNav(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        closeNavBar();
      }
    };
    if (displayNav) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [displayNav]);
  const [showCreateProfileSubmenu, setShowCreateProfileSubmenu] = useState(false);
    const [showListsSubmenu, setShowListsSubmenu] = useState(false);

    const handleHomeClick = () => {
        setShowCreateProfileSubmenu(false);
        setShowListsSubmenu(false);
    };

    const toggleCreateProfileSubmenu = () => {
        setShowCreateProfileSubmenu(!showCreateProfileSubmenu);
        setShowListsSubmenu(false);
    };

    const toggleListsSubmenu = () => {
        setShowListsSubmenu(!showListsSubmenu);
        setShowCreateProfileSubmenu(false);
    };

    const toggleSubListItems = () => {
        setDisplayNav(false);
    };


    return (
        <>

                <Hamburger>
                    <NavBarToggle onClick={toggleNavBar}>
                        <Image src="/hamburger.svg" alt="hamburger" width={30} height={30} />
                    </NavBarToggle>
                </Hamburger>
                {displayNav && (
                    <MainNav>
                        <NavItem onClick={handleHomeClick}>
                            <Link href="/">
                                <h4>Home</h4>
                            </Link>
                        </NavItem>
                        <NavItem onClick={toggleCreateProfileSubmenu}>
                            <h4>Create Profile</h4>
                            {showCreateProfileSubmenu && (
                                <SubNav>
                                    <Link onClick={toggleSubListItems} href="/create-profile/cat"><h4>Cat</h4></Link>
                                    <Link onClick={toggleSubListItems} href="/create-profile/owner"><h4>Owner</h4></Link>
                                </SubNav>
                            )}
                        </NavItem>
                        <NavItem onClick={toggleListsSubmenu}>
                            <h4>Lists</h4>
                            {showListsSubmenu && (
                                <SubNav>
                                    <Link onClick={toggleSubListItems} href="/lists/cats"><h4>Cats</h4></Link>
                                </SubNav>
                            )}
                        </NavItem>
                    </MainNav>
                )}
                <Logo>
                    <Image src="/1.png" alt="logo" width={150} height={47} priority />
                </Logo>
      <Spacer />    
        </>
    );
};

export default Navbar;