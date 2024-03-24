import React, { useState, useEffect, useRef } from 'react';
import { Hamburger, NavBarToggle, MainNav, SubNav, TableHeader, Logo, HeaderImage, NavItem, Spacer } from "@/components/StyledComponents";
import Image from 'next/image';
import Link from 'next/link';
import { set } from 'mongoose';

const Navbar = () => {
    const [displayNav, setDisplayNav] = useState(false);
    const [showCreateProfile, setShowCreateProfile] = useState(false);
    const [showLists, setShowLists] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            setDisplayNav(window.innerWidth > 768);
        };

        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowCreateProfile(false); 
                setShowLists(false);
            }
        };


        handleResize(); 
        return () => {
            window.removeEventListener('resize', handleResize);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleNavBar = () => setDisplayNav(!displayNav);

    const toggleCreateProfile = () => setShowCreateProfile(!showCreateProfile);
    const toggleLists = () => setShowLists(!showLists);
    return (
        <>
            <TableHeader>
                <Hamburger>
                    <NavBarToggle onClick={toggleNavBar}>
                        <Image src="/hamburger.svg" alt="hamburger" width={30} height={30} />
                    </NavBarToggle>
                </Hamburger>
        <MainNav displayNav={displayNav}>
                    
                    <NavItem >
                        <Link href="/">
 
        <h4>Home</h4>
        </Link>
    </NavItem>
    <NavItem ref={dropdownRef}>
        <h4  onClick={toggleCreateProfile} >Create Profile</h4>
        {showCreateProfile&&(
            <SubNav>
                <Link href="/create-profile/cat">
                    <h4>Cat</h4>
                </Link>
      
      
                <Link href="/create-profile/owner">
                    <h4>Owner</h4>
                </Link>
          
            </SubNav>
        )}
        </NavItem>
        <NavItem ref={dropdownRef}>
        <h4  onClick={toggleLists} >Lists</h4>
        {showLists&&(
            <SubNav>
                <Link href="/lists/cats">
                    <h4>Cat</h4>
                </Link>
          
            </SubNav>
        )}
        </NavItem>
</MainNav>
            <Logo>
                <Image src="/1.png" alt="logo" width={150} height={47} priority={true} />
            </Logo>
            </TableHeader>
        </>
    );
};

export default Navbar;

