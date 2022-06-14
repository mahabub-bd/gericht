import { AiFillCloseCircle, AiOutlineMenu } from 'react-icons/ai';
import styled from 'styled-components';
import { colors, fonts } from '../../constants';

const StyledAiFillCloseCircle = styled(AiFillCloseCircle)`
    color: ${colors.Golden};
    font-size: 27px;
    cursor: pointer;
    @media screen and (max-width: 850px) {
        font-size: 30px;
    }
    @media screen and (max-width: 450px) {
        font-size: 25px;
    }
`;

const StyledAiOutlineMenu = styled(AiOutlineMenu)`
    color: ${colors.White};
    font-size: 27px;
    cursor: pointer;
    @media screen and (max-width: 850px) {
        font-size: 30px;
    }
    @media screen and (max-width: 450px) {
        font-size: 25px;
    }
`;

const Image = styled.img`
    width: 150px;
    @media screen and (min-width: 2000px) {
        width: 210px;
    }
    @media screen and (max-width: 850px) {
        width: 140px;
    }
    @media screen and (max-width: 650px) {
        width: 100px;
    }
`;
const NavBarLinks = styled.ul`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    @media (max-width: 1150px) {
        display: none;
    }
`;

const NavItem = styled.li`
    margin: 0 1rem;
    cursor: pointer;
`;

const NavLink = styled.a`
    font-family: ${fonts.alt};
    color: ${(props) => (props.primary ? '#ffffff' : '#dcca87')};
    font-size: ${(props) => (props.primary ? '1rem' : '2rem')};

    font-weight: 400;
    letter-spacing: 0.04em;
    text-transform: capitalize;
    line-height: 28px;
    font-size: 16px;

    &:hover {
        color: ${colors.Grey};
    }
`;
const Login = styled.div`
    display: flex;
    @media screen and (max-width: 650px) {
        display: none;
    }
    color: ${colors.White};
    justify-content: flex-end;
    align-items: center;
    & a {
        margin: 0 1rem;
        text-decoration: none;
        transition: all 0.3s ease-in-out;
        &:hover {
            border-bottom: 1px solid ${colors.Golden};
            color: ${colors.White};
        }
    }
`;
const Div = styled.div`
    width: 1px;
    height: 30px;
    background-color: ${colors.Grey};
`;

// Mobile Nav Bar
const SmallScreen = styled.div`
display: none;
@media screen and (max-width: 1150px) {
    display: flex;
`;
const SmallNavBar = styled.ul`
    list-style: none;
    @media screen and (max-width: 1150px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: fixed;

        width: 100%;
        height: 100vh;
        color: ${colors.Golden};
    }
    @media screen and (max-width: 650px) {
        height: 100vh;
        width: 100%;
    }
`;

const SmallNavItem = styled.li`
    margin: 1rem 0;
    cursor: pointer;
    text-align: center;
    text-transform: uppercase;
    font-family: ${fonts.base};
`;

const SmallNavLink = styled.a`
    font-family: ${fonts.base};
    font-size: 4rem;
    &:hover {
        border-bottom: 1px solid ${colors.Golden};
        color: ${colors.White};
    }
    @media screen and (max-width: 850px) {
        font-size: 2.5rem;
        line-height: 1.6;
    }
    @media screen and (max-width: 650px) {
        font-size: 1.5rem;
        line-height: 1.6;
    }
`;
const SmallScreenOverlay = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    background-color: ${colors.Black};

    transition: 0.3s ease;
    flex-direction: column;
    z-index: 5;
`;

// Mobile Nav Bar

const NavBar = styled.nav`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${colors.Black};
    padding: 1rem 2rem;
    @media (max-width: 650px) {
        padding: 1rem;
    }
`;
const NavBarLogo = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export {
    Image,
    NavBarLinks,
    NavItem,
    NavLink,
    Login,
    Div,
    NavBar,
    NavBarLogo,
    SmallScreen,
    SmallNavBar,
    SmallNavItem,
    SmallNavLink,
    SmallScreenOverlay,
    StyledAiFillCloseCircle,
    StyledAiOutlineMenu,
};
// Language: javascript
