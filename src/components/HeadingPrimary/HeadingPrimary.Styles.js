import styledComponents from 'styled-components';
import { colors, fonts } from '../../constants';

const Heading = styledComponents.h1`
margin-bottom: 1rem;   
    color: ${colors.Golden}; 
    font-size: 64px;
    line-height: 117px;
    font-weight: 700;
    font-family: ${fonts.base};
    letter-spacing: 0.04em;
    @media screen and (min-width: 2000px) {
        
            font-size: 180px;
            line-height: 210px;
        
    }
    
    @media screen and (max-width: 1150px) {
        
            font-size: 64px;
        
    }
    
    @media screen and (max-width: 650px) {
            font-size: 50px;
            line-height: 87px;
        
    }
    
    @media screen and (max-width: 450px) {
        
            font-size: 40px;
            line-height: 70px;
        
    }
    `;
export default Heading;
