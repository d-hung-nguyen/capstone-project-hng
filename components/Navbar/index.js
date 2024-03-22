import React from 'react';
import { Hamburger, NavBarToggle, MainNav, SubNav, TableHeader, Block, Logo } from '@/styles';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';


const Navbar = (props) => {
    const [displayNav, setDisplayNav] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setDisplayNav(false);
} else {
                setDisplayNav(true);
            }
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    const toggleNavBar = () => {
        setDisplayNav(!displayNav);
    };

    return (
        <>
<TableHeader>
            <Logo>
            <Link href="/">
                <Image src="/logo.png" alt="logo" width={100} height={100} priority={true} />
            </Link>
            </Logo>
            <Hamburger>
                <NavBarToggle>
                    <Image onClick={toggleNavBar} src="/hamburger.svg" alt="hamburger" width={30} height={30} />
                </NavBarToggle>
            </Hamburger>

            <MainNav style={{ display: displayNav ? 'flex' : 'none' }}>
                <Link href="/">
                    <h4>Home</h4>
                </Link>
                <Link href="/">
                    <h4>Lizzy</h4>
                </Link>
                <Link href="/">
                    <h4>Tom</h4>
                </Link>
                <SubNav>
                    <h4>Create Profile</h4>

                    <Link href="/create-profile/cat">
                        <h4>Cat</h4>
                    </Link>
                    <Link href="/create-profile/owner">
                        <h4>Owner</h4>
                    </Link>
                </SubNav>
            </MainNav>
            </TableHeader>

        </>
    )
};

export default Navbar;
