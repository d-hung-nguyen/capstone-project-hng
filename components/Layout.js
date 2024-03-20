import React from 'react';
import Navbar from './Navbar';
import { TableHeader } from '@/styles';
import Image from 'next/image';

const Layout = ({ children }) => {
    return (
        <>
        <TableHeader>
            {/* <StyledHero>
            <Image src="/hero.png" 
            alt="Lizzy-Logt" 
            layout="fill" 
            objectFit="cover" quality={100}/>
            </StyledHero> */}
        <Navbar/>
        </TableHeader>
            <main>{children}</main>
            <footer>
                © {new Date().getFullYear()} lizzy-logt
            </footer>
        </>
    ); 
};

export default Layout;
