import styledComponents from 'styled-components';
import FindUsBG from '../../assets/bg.webp';
import { colors } from '../../constants';
import { PCormorant, POpensans, SectionPadding } from '../../GlobalStyle';

const FindUsSection = styledComponents(SectionPadding)`
background: url(${FindUsBG});
background-position: center;
background-size: cover;
background-repeat: repeat;
background-attachment: fixed;
`;
const OpeningHours = styledComponents(PCormorant)`
color:${colors.Golden};`;
const Paragraph = styledComponents(POpensans)`
margin: 2rem 0;`;
const Paragraph2nd = styledComponents(POpensans)`
      

&:not(:last-child){
    margin:1rem 0 1rem 0;
}`;

export { FindUsSection, OpeningHours, Paragraph, Paragraph2nd };
// export default
