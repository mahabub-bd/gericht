import styledComponents from 'styled-components';
import { colors, fonts } from '../../constants';
import { FlexCenter, SectionPadding } from '../../GlobalStyle';

const SpecialMenuSection = styledComponents(SectionPadding, FlexCenter)`

background: ${colors.Black};
flex-direction: column;

`;
const Title = styledComponents.div`
margin-bottom: 2rem;
text-align: center;

`;

const Menu = styledComponents.div`
width: 100%;
margin: 2rem 0;
display: flex;
align-items: flex-start;
flex-direction: row;
@media screen and (max-width: 1150px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
}
`;
const MenuTitle = styledComponents.p`
font-family: ${fonts.base};
font-weight: 600;
font-size: 45px;
line-height: 58.5px;
letter-spacing: .04em;
color: ${colors.White};
@media screen and (max-width: 650px) {
    font-size: 35px;
    line-height: 48.5px;
}
`;
const WineBear = styledComponents(FlexCenter)`
flex: 1;
    width: 100%;
    flex-direction: column;
   `;
const Cocktails = styledComponents(FlexCenter)`
flex: 1;
    width: 100%;
    flex-direction: column;
   
`;

const MenuItems = styledComponents.div`
display: flex;
flex-direction: column;

margin: 2rem 0;
width: 100%;`;

const MenuImage = styledComponents.div`
width: 410px;
@media screen and (min-width: 2000px) {
    width: 650px;
}
margin: 0 2rem;
@media screen and (max-width: 1150px) {
    margin: 3rem 0;
};
@media screen and (max-width: 650px) {
width: 60%;
}`;

const Image = styledComponents.img`
width: 100%;
height: auto;
@media screen and (min-width: 2000px) {
    height: 920px;
}`;
const ViewMoreBtn = styledComponents.div`
margin-top: 1rem;
text-align: center;`;

export {
    Title,
    Menu,
    SpecialMenuSection,
    WineBear,
    Cocktails,
    MenuTitle,
    MenuItems,
    MenuImage,
    Image,
    ViewMoreBtn,
};
// export default
