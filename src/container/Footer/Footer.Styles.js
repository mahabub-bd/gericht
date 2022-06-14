import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';
import styledComponents from 'styled-components';
import { colors, fonts } from '../../constants';
import { POpensans, SectionPadding } from '../../GlobalStyle';

const FooterSection = styledComponents(SectionPadding)`
width:100%;
position:relative;
z-index: 1;
display:flex;
flex-direction:column;
align-items:center;
justify-content:flex-start;
background-color:${colors.Black};
padding-top:3rem;
`;

const FooterLinks = styledComponents.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: flex-start;

margin-top: 5rem;
padding: 0 2rem;
@media (max-width: 1150px) {
    flex-direction: column;
    align-items: center;
    padding: 0;
}`;

const FooterLink = styledComponents.div`
    flex: 1;
    margin: 1rem;
    text-align: center;
    
    @media (max-width: 1150px) {
        margin:2rem 0;
        width: 100%;
    }`;

const LinkHead = styledComponents.h1`
font-family: ${fonts.base};
    color: ${colors.White};
    font-weight: 400;
    letter-spacing: 0.04em;
    text-transform: capitalize;
    font-size: 32px;
    line-height: 41.6px;
    margin-bottom: 1rem;
    @media (min-width: 2000px) {
        font-size: 51px;
        line-height: 61.6px;
    }`;

const FooterLogo = styledComponents.img` 
  width: 210px;
 margin-bottom: 0.75rem;`;

const SpoonImage = styledComponents.img`
margin-top: 1rem;`;

const StyledFiFacebook = styledComponents(FiFacebook)` 
color: ${colors.White};
margin: 0.7rem;
font-size: 24px;
cursor: pointer;
&:hover {
    color: ${colors.Golden};
} `;

const StyledFiInstagram = styledComponents(FiInstagram)` 
color: ${colors.White};
margin: 0.7rem;
font-size: 24px;
cursor: pointer;
&:hover {
    color: ${colors.Golden};
} 

`;
const StyledFiTwitter = styledComponents(FiTwitter)`
color: ${colors.White};
margin: 0.7rem;
font-size: 24px;
cursor: pointer;
&:hover {
    color: ${colors.Golden};
} `;

const Paragraph = styledComponents(POpensans)`
margin: 0;`;

const Copyright = styledComponents.div``;

export {
    Copyright,
    FooterSection,
    LinkHead,
    FooterLinks,
    FooterLink,
    FooterLogo,
    SpoonImage,
    StyledFiFacebook,
    StyledFiInstagram,
    StyledFiTwitter,
    Paragraph,
};

// export
