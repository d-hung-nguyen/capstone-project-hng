"use client";
import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';
import Navbar from './Navbar';





const Layout = ({ children }) => {
    return (
        <>
        <Navbar/>
            <main>{children}</main>
            <footer>
                © {new Date().getFullYear()} lizzy-logt
            </footer>
        </>
    ); 
};

export default Layout;
