import styledComponents from 'styled-components';
import ChefBG from '../../assets/bg.webp';
import { FlexCenter, PCormorant, POpensans, SectionPadding } from '../../GlobalStyle';

const LaurelsSection = styledComponents(SectionPadding, FlexCenter)`
background: url(${ChefBG});
background-position: center;
background-size: cover;
background-repeat: repeat;
background-attachment: fixed`;

const LaurelsAward = styledComponents.div`
display:flex;
justify-content: flex-start;
align-items: center;
flex-wrap: wrap;
margin-top:1rem
`;

const LaurelsAwardCard = styledComponents.div`
display:flex;
flex:1;
justify-content:flex-start;
align-items:flex-start;
flex-basis: 250px;
margin:1rem;
@media screen and(min-width:2000px){
    flex-basis: 330px;
        
}
@media screen and(max-width:450px){
    min-width: 100%;
        margin: 1rem 0;
}
`;

const LaurelsAwardCardImage = styledComponents.img`
width:50px;
height:50px`;

const LaurelsAwardCardContent = styledComponents.div` display: flex;
flex-direction: column;
margin-left: 1rem;
`;
const LaurelsAwardCardContentTitle = styledComponents(PCormorant)`
color:#dcca87`;

const LaurelsAwardCardContentSubTitle = styledComponents(POpensans)`
margin:0`;

export {
    LaurelsSection,
    LaurelsAward,
    LaurelsAwardCard,
    LaurelsAwardCardImage,
    LaurelsAwardCardContent,
    LaurelsAwardCardContentTitle,
    LaurelsAwardCardContentSubTitle,
};
// Example:
