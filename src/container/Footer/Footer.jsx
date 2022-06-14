import React from 'react';
import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import { POpensans } from '../../GlobalStyle';
import {
    Copyright,
    FooterLink,
    FooterLinks,
    FooterLogo,
    FooterSection,
    LinkHead,
    Paragraph,
    SpoonImage,
    StyledFiFacebook,
    StyledFiInstagram,
    // eslint-disable-next-line prettier/prettier
    StyledFiTwitter
} from './Footer.Styles';

const year = new Date().getFullYear();
const Footer = () => (
    <FooterSection>
        <FooterOverlay />
        <Newsletter />
        <FooterLinks>
            <FooterLink>
                <LinkHead>Contact Us</LinkHead>
                <Paragraph>9 W 53rd St, New York, NY 10019, USA</Paragraph>
                <Paragraph>+1 212-344-1230</Paragraph>
                <Paragraph>+1 212-555-1230</Paragraph>
            </FooterLink>

            <FooterLink>
                <FooterLogo src={images.gericht} alt="footer_logo" />
                <Paragraph>
                    &quot;The best way to find yourself is to lose yourself in the service of
                    others.&quot;
                </Paragraph>
                <SpoonImage src={images.spoon} className="spoon__img" alt="spoon" />
                <div className="app__footer-links_icons">
                    <StyledFiFacebook />
                    <StyledFiTwitter />
                    <StyledFiInstagram />
                </div>
            </FooterLink>

            <FooterLink>
                <LinkHead>Working Hours</LinkHead>
                <Paragraph>Monday-Friday:</Paragraph>
                <Paragraph>08:00 am - 12:00 am</Paragraph>
                <Paragraph>Saturday-Sunday:</Paragraph>
                <Paragraph>07:00 am - 11:00 pm</Paragraph>
            </FooterLink>
        </FooterLinks>

        <Copyright>
            <POpensans> &copy;{year} Gericht. All Rights reserved.</POpensans>
        </Copyright>
    </FooterSection>
);

export default Footer;
