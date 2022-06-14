import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { images } from '../../constants';
import {
    Div,
    Image,
    Login,
    NavBar,
    NavBarLinks,
    NavBarLogo,
    NavItem,
    NavLink,
    SmallNavBar,
    SmallNavItem,
    SmallNavLink,
    SmallScreen,
    SmallScreenOverlay,
    StyledAiFillCloseCircle,
    // eslint-disable-next-line prettier/prettier
    StyledAiOutlineMenu
} from './Navbar.style';

const navItems = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Menu', link: '/menu' },
    { name: 'Awards', link: '/awards' },
    { name: 'Contact', link: '/contact' },
];
const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <NavBar>
            <NavBarLogo>
                <a href="/">
                    <Image src={images.gericht} alt="Gericht" />
                </a>
            </NavBarLogo>
            <NavBarLinks>
                {navItems.map((name) => (
                    <NavItem key={name}>
                        <NavLink as={Link} to={name.link}>
                            {name.name}
                        </NavLink>
                    </NavItem>
                ))}
            </NavBarLinks>

            <Login>
                <NavLink primary href="/login">
                    Log In / Registration
                </NavLink>
                <Div />
                <NavLink primary href="/booktable">
                    Book Table
                </NavLink>
            </Login>

            <SmallScreen>
                <StyledAiOutlineMenu onClick={() => setToggleMenu(true)} />

                {toggleMenu && (
                    <SmallScreenOverlay>
                        <SmallNavBar>
                            <StyledAiFillCloseCircle onClick={() => setToggleMenu(false)} />
                            {navItems.map(({ name, link }) => (
                                <SmallNavItem key={name}>
                                    <SmallNavLink onClick={() => setToggleMenu(false)} href={link}>
                                        {name}
                                    </SmallNavLink>
                                </SmallNavItem>
                            ))}
                        </SmallNavBar>
                    </SmallScreenOverlay>
                )}
            </SmallScreen>
        </NavBar>
    );
};

export default Navbar;
