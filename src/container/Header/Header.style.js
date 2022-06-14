import styledComponents from 'styled-components';
import { colors } from '../../constants';
import { POpensans, SectionPadding } from '../../GlobalStyle';

const HeaderSection = styledComponents(SectionPadding)`
    background-color: ${colors.Black};
`;
const Paragraph = styledComponents(POpensans)`
margin: 2rem 0;`;

export { HeaderSection, Paragraph };
// export default
