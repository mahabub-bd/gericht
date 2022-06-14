import styledComponents from 'styled-components';
import AboutBG from './assets/bg.webp';
import { colors, fonts } from './constants';

export const SectionPadding = styledComponents.div`
        padding: 4rem 6rem;
        @media screen and (max-width: 850px) {
            padding: 4rem ;
        }
        @media screen and (max-width: 650px) {
            padding: 4rem 2rem;
        }
        @media screen and (max-width: 450px) {
            padding: 2rem 2rem;
        }
    `;

export const PCormorant = styledComponents.p`
        font-family: ${fonts.base};
        color: ${colors.White};
        
        letter-spacing: 0.04em;
        text-transform: capitalize;
        font-feature-settings: "tnum" on, "lnum" on;
        line-height: 29.9px;
        font-size: 23px;
        @media screen and (min-width: 2000px) {
            font-size: 37px;
            line-height: 67px;
        }
        @media screen and (max-width: 650px) {
            font-size: 21px;
        }
        @media screen and (max-width: 450px) {
            font-size: 19px;
        }
      `;

export const POpensans = styledComponents.p`
      font-family: ${fonts.alt};
      margin:2rem 0;
      @media screen and (min-width: 850px) {
          margin:4rem 0;
      }     
      color: ${colors.White};
      font-weight: 400;
      letter-spacing: 0.04em;
      text-transform: capitalize;
      line-height: 28px;
      font-size: 16px;
      @media screen and (min-width: 2000px) {
        font-size: 30px;
        line-height: 50px;
    }
    @media screen and (max-width: 650px) {
        font-size: 21px;
    }
    @media screen and (max-width: 450px) {
        font-size: 14px;
    }
    `;
export const HeadtextCormorant = styledComponents.h1`
        font-family: ${fonts.base};
        color: ${colors.Golden};
        font-size: 64px;
        @media screen and (max-width: 850px) {
            font-size: 50px;
            line-height: 70px;
        }
        @media screen and (max-width: 450px) {
        font-size: 40px;
        line-height: 70px;
     }           
`;

export const Image = styledComponents.img`
    width: 80%;
    @media screen and (max-width: 1150px) {
        width: 100%;
    }
    
    `;
export const CustomButton = styledComponents.button`

    background-color: ${colors.Crimson};
    color: ${colors.Black};
    font-family: ${fonts.base};
    font-weight: 700;
    letter-spacing: 0.04em;
    line-height: 28px;
    font-size: 16px;
    text-align: center;
    padding: 0.5rem 1.5rem;
    @media screen and (max-width: 450px) {
        padding: 0.3rem 0.7rem;
        font-size: 14px;
    }
    
    border-radius: 1px;
    border: none;
    outline: none;
    cursor: pointer;
  
    `;

export const Wrapper = styledComponents.div`
display: flex;
justify-content: space-between;
align-items: center;
min-height: 80vh;

@media screen and (max-width: 1150px) {
    flex-direction: column;
}
`;

export const WrapperInfo = styledComponents.div`
flex: 1;    
width: 100%;
display: flex;
justify-content: center;
align-items: flex-start;

flex-direction: column;
@media screen and (max-width: 1150px) {
    margin: 3rem 0 0 ;
}
`;
export const WrapperImage = styledComponents.div`

flex: 1;
width: 100%;
display: flex;
justify-content: center;
align-items: center;

margin-left: 2rem;
@media screen and (max-width: 1150px) {
    margin: 5rem 0 0 ;
}
`;
export const WrapperImageReverse = styledComponents(WrapperImage)`
justify-content: flex-start;
margin-right: 2rem;`;

export const FlexCenter = styledComponents.div`
display: flex;
justify-content: center;
align-items: center;
`;

export const BG = styledComponents.div`
background: url(${AboutBG});
  background-position: center;
  background-size: cover;
  background-repeat: repeat;
  background-attachment: fixed;`;
