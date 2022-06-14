import styledComponents from 'styled-components';
import { colors, fonts } from '../../constants';
import { FlexCenter } from '../../GlobalStyle';

const NewsletterSection = styledComponents.div`
padding: 2rem 4rem;
border:1px solid ${colors.Golden};
background-color:${colors.Black};
@media (max-width: 650px) {
padding: 2rem 0rem;
border:none;
}`;

const NewsletterHeading = styledComponents.div`
text-align:center;`;

const InputContainer = styledComponents(FlexCenter)`flex-direction: row;
margin-top: 3rem;
@media (max-width: 990px) {
    flex-direction: column;
    width: 100%;
}`;

const Input = styledComponents.input`
width: 620px;
border:1px solid ${colors.Golden};
border-radius: 5px;
font-size: 1rem;
@media (min-width: 2000px) {
    font-size: 2rem;
}
@media (max-width: 990px) {
    margin:0 0 2rem 0;
    width: 100%;
}
font-family: ${fonts.base};
color: ${colors.Golden};

margin-right: 2rem;
padding: 0.75rem 1rem;
background: ${colors.Black};
::placeholder {
    color: ${colors.Crimson};
    font-family: ${fonts.base};
    font-size: 1rem;
}`;

export { NewsletterSection, NewsletterHeading, InputContainer, Input };

// Export
