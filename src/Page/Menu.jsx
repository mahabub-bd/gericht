import React from 'react';
import { Navbar } from '../components';
import { Footer, SpecialMenu } from '../container';

function Menu() {
    return (
        <>
            <Navbar />
            <SpecialMenu />
            <Footer />
        </>
    );
}

export default Menu;
