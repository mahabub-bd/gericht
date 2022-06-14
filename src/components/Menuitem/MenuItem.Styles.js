import styledComponents from 'styled-components';
import { colors } from '../../constants';
import { PCormorant } from '../../GlobalStyle';

const MenuItemContainer = styledComponents.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin:1rem 0 `;

const MenuItemHead = styledComponents.div`
display: flex;
justify-content: space-between;
align-items: center;`;
const MenuItemName = styledComponents.div`
flex: 1;

`;

const MenuItemTitle = styledComponents(PCormorant)`
color: ${colors.Golden};
`;

const MenuItemTag = styledComponents(PCormorant)`
color: ${colors.Grey};
@media screen and (max-width: 650px) {
    font-size: 1rem;
}`;

const MenuItemDesh = styledComponents.div`
width: 90px;
height: 1px;
background-color: ${colors.Golden};
margin: 0 1rem`;

const MenuItemPrice = styledComponents.div`
display: flex;
justify-content: flex-end;
align-items: flex-end;`;

const MenuItemSub = styledComponents.div`
width: 100%;
margin-top: 0.2rem;`;

export {
    MenuItemContainer,
    MenuItemHead,
    MenuItemName,
    MenuItemDesh,
    MenuItemPrice,
    MenuItemSub,
    MenuItemTitle,
    MenuItemTag,
};
// export default
