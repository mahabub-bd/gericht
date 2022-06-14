import React from 'react';
import { MenuItem, SubHeading } from '../../components';
import { data, images } from '../../constants';
import { CustomButton, HeadtextCormorant } from '../../GlobalStyle';
import {
    Cocktails,
    Image,
    Menu,
    MenuImage,
    MenuItems,
    MenuTitle,
    SpecialMenuSection,
    Title,
    ViewMoreBtn,
    // eslint-disable-next-line prettier/prettier
    WineBear
} from './SpecialMenu.Styles';

const SpecialMenu = () => (
    <SpecialMenuSection>
        <Title>
            <SubHeading title="Menu That Fits Your Palatte" />
            <HeadtextCormorant>Today&apos;s Special</HeadtextCormorant>
        </Title>
        <Menu>
            <WineBear>
                <MenuTitle>Wine & Beer</MenuTitle>
                <MenuItems>
                    {data.wines.map((win) => (
                        <MenuItem
                            key={win.key}
                            title={win.title}
                            price={win.price}
                            tags={win.tags}
                        />
                    ))}
                </MenuItems>
            </WineBear>

            <MenuImage>
                <Image src={images.menu} />
            </MenuImage>

            <Cocktails>
                <MenuTitle>Cocktails</MenuTitle>
                <MenuItems>
                    {data.cocktails.map((cocktail) => (
                        <MenuItem
                            key={cocktail.key}
                            title={cocktail.title}
                            price={cocktail.price}
                            tags={cocktail.tags}
                        />
                    ))}
                </MenuItems>
            </Cocktails>
        </Menu>
        <ViewMoreBtn>
            <CustomButton type="button">View More </CustomButton>
        </ViewMoreBtn>
    </SpecialMenuSection>
);

export default SpecialMenu;
