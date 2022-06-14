import { BsArrowLeftShort, BsArrowRightShort, BsInstagram } from 'react-icons/bs';
import styledComponents from 'styled-components';
import { colors } from '../../constants';
import { FlexCenter, POpensans } from '../../GlobalStyle';

const GallerySection = styledComponents(FlexCenter)`
    display: flex;
    flex-direction:row;
    flex-wrap: wrap;
    background-color: ${colors.Black};
    padding:4rem 0 4rem 4rem ;
    @media screen and (max-width: 1150px) {
        flex-direction: column;
    }
    @media screen and (max-width: 850px)
     {
         padding: 4rem 0 4rem 4rem;
        }
    @media screen and (max-width: 650px) 
    { 
        padding: 2rem 0 2rem 2rem;
    }`;

const GalleryContent = styledComponents.div`
flex: 1;
display: flex;
justify-content: center;
align-items: flex-start;
flex-direction: column;

min-width: 500px;
padding: 0 4rem;
@media screen and (min-width: 2000px) {
    padding-right: 4rem;
    min-width: 1000px;
}
@media screen and (max-width: 1150px) {
    min-width: 100%;
    padding: 0 4rem;
}
@media screen and (max-width: 650px) {
    min-width: 100%;
    padding: 0 1rem;
}
`;
const GalleryContentParagraph = styledComponents(POpensans)`
    margin:2rem 0;
    color:${colors.Grey};
`;
const GalleryImages = styledComponents.div`
flex: 1;
display: flex;
flex-direction: row;
max-width: 50%;
position: relative;
@media screen and (max-width: 1150px) {
    max-width: 100%;
    margin: 2rem 0;
}
@media screen and (max-width: 650px) {
   
    margin: 1rem 0;
}
`;
const GalleryImagesContainer = styledComponents.div`
    display: flex;
    flex-direction: row;
    width: max-content;
    overflow-x: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none; 
    &::-webkit-scrollbar {
        display: none;
    }
    @media screen and (max-width: 1150px) {
        padding: 0 0.5rem;
    } `;
const StyledBsInstagram = styledComponents(BsInstagram)`
    color:${colors.White};
    position: absolute;
    
    font-size: 1.5rem;
    opacity: 0;
    transition: .5s ease;
    cursor: pointer;`;

const GalleryImagesCard = styledComponents(FlexCenter)`
position: relative;
min-width: 301px;
height: 447px;
margin-right: 2rem;
    &:hover ${StyledBsInstagram} {
        opacity:1;
    }
    
    @media screen and (min-width: 2000px) {
        min-width: 400px;
        height: 547px;
    }
    @media screen and (max-width: 650px) {
        min-width: 240px;
        height: 320px;
    }`;

const CardImage = styledComponents.img`
width: 100%;
height: 100%;
object-fit: cover;
opacity: 1;
transition: .5s ease;
&:hover {
    opacity: .35;
}
@media screen and (max-width: 1150px) {
    width: 90%;
}
`;
const GalleryImagesArrow = styledComponents.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;

padding: 0 1rem;
position: absolute;
bottom: 5%;`;

const StyledBsArrowLeftShort = styledComponents(BsArrowLeftShort)`
font-size: 2rem;
cursor:pointer;
background-color: ${colors.Black};
border-radius:  5px;
color:${colors.Golden};
&:hover {
    color:${colors.White};
}`;

const StyledBsArrowRightShort = styledComponents(BsArrowRightShort)`
font-size: 2rem;
cursor:pointer;
background-color: ${colors.Black};
color:${colors.Golden};
border-radius:  5px;
&:hover {
    color:${colors.White};
}`;

export {
    CardImage,
    GallerySection,
    GalleryContent,
    GalleryContentParagraph,
    GalleryImages,
    GalleryImagesContainer,
    GalleryImagesArrow,
    GalleryImagesCard,
    StyledBsArrowLeftShort,
    StyledBsArrowRightShort,
    StyledBsInstagram,
};

// default
