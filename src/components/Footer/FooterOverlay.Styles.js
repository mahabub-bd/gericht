import styledComponents from 'styled-components';
import FooterBG from '../../assets/bg.webp';
import { colors } from '../../constants';

const FooterOverlaySection = styledComponents.div`
    width:100%;
    height:100%;
    z-index:-1;
    display:flex;
    flex-direction:column-reverse;
    position:absolute;
    color:${colors.Golden};`;

const FooterOverlayImage = styledComponents.div`
height:75%;
background: url(${FooterBG});
background-position: center;
background-size: cover;
background-repeat: repeat;
background-attachment: fixed;`;
export { FooterOverlaySection, FooterOverlayImage };

// export
