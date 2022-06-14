import styledComponents from 'styled-components';
import AboutBG from '../../assets/bg.webp';
import { FlexCenter } from '../../GlobalStyle';

const AboutSection = styledComponents(FlexCenter)`
  position: relative;
  background: url(${AboutBG});
  background-position: center;
  background-size: cover;
  background-repeat: repeat;
  background-attachment: fixed;
  padding: 4rem 6rem;
  @media screen and (max-width: 850px) {
      padding: 4rem ;
  }
  @media screen and (max-width: 650px) {
      padding: 2rem 2rem;
  }
`;
const Overlay = styledComponents(FlexCenter)`
position: absolute;
inset: 0;`;
const OverlayImage = styledComponents.img`
width: 391px;
height: 415px;
z-index: 0;
@media screen and (max-width: 850px) {
    width: 30%;
    height: 20%;
    
}
@media screen and (max-width: 650px) {
    width: 20%;
    height: 15%;
    
}
@media screen and (max-width: 450px) {
    width: 30%;
    height: 15%;
    
}
`;
const Content = styledComponents(FlexCenter)`
width: 100%;
z-index: 1;
@media screen and (max-width: 1150px) {
    flex-direction: column;
    text-align: left;
}
`;
const Knife = styledComponents(FlexCenter)`
margin:2rem 4rem;
@media screen and (max-width: 1150px) {
    margin:1rem 4rem;
}


`;

const KnifeImage = styledComponents.img`
height: 910px;
@media screen and (min-width: 2000px) {
    height: 1110px;
}
@media screen and (max-width: 1150px) {
    height: 710px;
}
@media screen and (max-width: 850px) {
    height: 510px;
}
@media screen and (max-width: 650px) {
    height: 350px;
}
@media screen and (max-width: 450px) {
    height: 260px;
}`;

const SpoonImage = styledComponents.img`
width: 45px;
`;
const AboutUsContent = styledComponents.div`
flex: 1;
display: flex;
justify-content: flex-end;
align-items: flex-end;
flex-direction: column;
text-align: right;
@media screen and (max-width: 1150px) {
    
    justify-content: flex-start;
    align-items: flex-start;
    text-align: left;
}


`;
const OurHistoryContent = styledComponents.div`
flex: 1;
display: flex;
justify-content: flex-start;
align-items: flex-start;
flex-direction: column;
text-align: left;
`;

export {
    AboutSection,
    Overlay,
    OverlayImage,
    Content,
    AboutUsContent,
    OurHistoryContent,
    SpoonImage,
    Knife,
    KnifeImage,
};
// export default AboutSection;
