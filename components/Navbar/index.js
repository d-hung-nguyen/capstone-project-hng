import React from 'react';
import { Hamburger, NavBarToggle, MainNav } from '@/styles';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Navbar = (props) => {
    const [displayNav, setDisplayNav] = useState(props.displayNav ? 'flex' : 'none');

    const toggleNavBar = () => {
        setDisplayNav((currentDisplayNav) => (currentDisplayNav === 'none' ? 'flex' : 'none'));
    };

    return (
        <>
            <Hamburger>
                <NavBarToggle>
                    <Image onClick={toggleNavBar} src="/hamburger.svg" alt="hamburger" width={30} height={30} />
                </NavBarToggle>
            </Hamburger>

            <Link href="/">
                <Image src="/logo.png" alt="logo" width={150} height={150} priority={true} />
            </Link>

            <MainNav>
                <Link href="/">
                    <h4>Home</h4>
                </Link>
                <Link href="/">
                    <h4>Lizzy</h4>
                </Link>
                <Link href="/">
                    <h4>Tom</h4>
                </Link>
                <Link href="/">
                    <h4>Create Profile</h4>
                </Link>
            </MainNav>
        </>
    )
};

export default Navbar;
