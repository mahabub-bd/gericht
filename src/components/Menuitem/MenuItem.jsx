import React from 'react';
import { PCormorant } from '../../GlobalStyle';
import {
    MenuItemContainer,
    MenuItemDesh,
    MenuItemHead,
    MenuItemName,
    MenuItemPrice,
    // eslint-disable-next-line prettier/prettier
    MenuItemSub, MenuItemTag, MenuItemTitle
} from './MenuItem.Styles';
// export default MenuItem;

const MenuItem = ({ title, price, tags }) => (
    <MenuItemContainer>
        <MenuItemHead>
            <MenuItemName>
                <MenuItemTitle>{title}</MenuItemTitle>
            </MenuItemName>
            <MenuItemDesh />
            <MenuItemPrice>
                <PCormorant>{price}</PCormorant>
            </MenuItemPrice>
        </MenuItemHead>
        <MenuItemSub>
            <MenuItemTag>{tags}</MenuItemTag>
        </MenuItemSub>
    </MenuItemContainer>
);

export default MenuItem;
