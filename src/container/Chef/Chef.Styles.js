import styledComponents from 'styled-components';
import ChefBG from '../../assets/bg.webp';
import { colors, fonts } from '../../constants';
import { FlexCenter, POpensans, SectionPadding } from '../../GlobalStyle';

const ChefSection = styledComponents(SectionPadding, FlexCenter)`
background: url(${ChefBG});
background-position: center;
background-size: cover;
background-repeat: repeat;
background-attachment: fixed;`;

const ChefContent = styledComponents.div`
display: flex;
flex-direction: column;
width: 100%;
margin-top: 5rem;`;

const ChefContentQuote = styledComponents.div`
display: flex;
justify-content: flex-start;
align-items: center;`;

const ParagraphQuate = styledComponents(POpensans)`
margin:0;
font-weight: 400;
    letter-spacing: .04em;
    line-height: 28px;
    font-size: 16px`;
const ImageQuate = styledComponents.img`
width: 47px;
height: 40px;
margin:0 1rem 1rem 0;  `;

const ChefName = styledComponents.p`
font-family: ${fonts.base};
    font-weight: 400;
    font-size: 32px;
    line-height: 41.6px;
    letter-spacing: 0.04em;
    text-transform: capitalize;
    color: ${colors.Golden};`;

const Designation = styledComponents.p`
font-family: ${fonts.alt};
    font-weight: 400;
    letter-spacing: .04em;
    line-height: 28px;
    font-size: 16px;
    color: ${colors.White};`;

const ChefSign = styledComponents.div`
width: 100%;
margin-top: 3rem;`;

const ImageSign = styledComponents.img`
width: 250px;
@media screen and (min-width: 2000px) {
    width: 370px;
}
@media screen and (max-width: 450px) {
    width: 60%;
}
margin-top: 3rem;`;

export {
    ImageSign,
    ChefSection,
    ChefContent,
    ChefContentQuote,
    Designation,
    ImageQuate,
    ChefSign,
    ChefName,
    ParagraphQuate,
};

// export default
